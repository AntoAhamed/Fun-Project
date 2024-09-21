import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import Alarm from './components/offline/alarm/Alarm'
import Stopwatch from './components/offline/stopwatch/Stopwatch'
import Timer from './components/offline/timer/Timer'

import Alert from './components/offline/notepad/Alert'
import AddNotes from './components/offline/notepad/AddNotes'
import YourNotes from './components/offline/notepad/Notes'
import EditNotes from './components/offline/notepad/EditNotes'

import Calculator from './components/offline/calculator/Calculator'

import AddTodos from './components/offline/todolist/AddTodos'
import Todos from './components/offline/todolist/Todos'

import Weather from './components/online/weather/Weather'
import News from './components/online/news/News'

function App() {
  //Notepad
  let initNotes;
  if (localStorage.getItem("notes") === null) {
    initNotes = [];
  } else {
    initNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const [noteTitle, setNoteTitle] = useState('')
  const [noteDesc, setNoteDesc] = useState('')
  const [notes, setNotes] = useState(initNotes)
  const [toEditNote, setToEditNote] = useState({})
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [time, setTime] = useState("loading...")
  const [date, setDate] = useState('loading...')
  const [alert, setAlert] = useState(false)
  const [alertMssg, setAlertMssg] = useState('')

  const updateTimeAndDate = () => {
    const d = new Date();
    setTime(d.toLocaleTimeString());
    setDate(d.toLocaleDateString());
  }

  setInterval(updateTimeAndDate, 1000);

  //function to add note
  const addNotes = (e) => {
    e.preventDefault();

    if (noteTitle.length > 0 && noteDesc.length > 0) {
      let sno;

      if (notes.length === 0) {
        sno = 0;
      } else {
        sno = notes[notes.length - 1].sno;
      }

      const newNote = {
        sno: sno + 1,
        title: noteTitle,
        desc: noteDesc,
        date: date,
        time: time
      }

      setNotes([...notes, newNote]);
      setNoteTitle('');
      setNoteDesc('');

      setAlertMssg("Note added successfully.");
      alertSystem();
    } else {
      setAlertMssg("Title and description can't be blank.");
      alertSystem();
    }
  }

  //function to clear user inputs
  const clear = (e) => {
    e.preventDefault();

    setNoteTitle('');
    setNoteDesc('');
    setNewTitle('');
    setNewDesc('');
  }

  //function to delete note
  const deleteNotes = (note) => {
    setNotes(notes.filter((e) => { return e !== note; })) //filter note from existing notes
  }

  //function to edit note
  const editNotes = (note) => {
    setToEditNote(note);
    setNewTitle(note.title);
    setNewDesc(note.desc);
  }

  //function to save the edited note
  const save = async (e) => {
    e.preventDefault();

    if (newTitle.length > 0 && newDesc.length > 0) {
      let tmpNotes = notes;

      tmpNotes = tmpNotes.filter(e => e !== toEditNote); //it deletes toEditNote

      let sno;

      if (tmpNotes.length === 0) {
        sno = 0;
      } else {
        sno = tmpNotes[tmpNotes.length - 1].sno;
      }

      const editedNote = {
        sno: sno + 1,
        title: newTitle,
        desc: newDesc,
        date: date,
        time: time
      }

      tmpNotes.push(editedNote);

      setNotes(tmpNotes);

      setToEditNote({});
      setNewTitle('');
      setNewDesc('');

      setAlertMssg("Edited note saved successfully.");
      alertSystem();
    } else {
      setAlertMssg("Title and description can't be blank.");
      alertSystem();
    }
  }

  //function to show alert when needed
  const alertSystem = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  //everytime when notes will change, it renders and current notes will be saved in the local storage.
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])
  //Notepad end

  //Todolist
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todoTitle, setTodoTitle] = useState('');
  const [todoDesc, setTodoDesc] = useState('');

  const addTodo = () => {
    if (todoTitle.length > 0 && todoDesc.length > 0) {
      let sno;
      if (todos.length === 0) {
        sno = 0;
      }
      else {
        sno = todos[todos.length - 1].sno;
      }
      let myTodo = {
        sno: sno + 1,
        title: todoTitle,
        desc: todoDesc
      }

      setTodos([...todos, myTodo]);
      setTodoTitle('');
      setTodoDesc('');

      localStorage.setItem("todos", JSON.stringify(todos));
    }
    else {
      alert("Title or Description can't be blank");
    }
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    )

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  //Todolist end

  return (
    <div className="App">
      {alert === true ? <Alert alertMssg={alertMssg} /> : ''}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/alarm' element={<Alarm />} />
            <Route path='/stopwatch' element={<Stopwatch />} />
            <Route path='/timer' element={<Timer />} />

            <Route path='/calculator' element={<Calculator />} />

            <Route path="/writeNotes" element={<AddNotes title={noteTitle} desc={noteDesc} setTitle={setNoteTitle} setDesc={setNoteDesc} addNotes={addNotes} clear={clear} date={date} time={time} />} />
            <Route path="/notes" element={<YourNotes notes={notes} deleteNotes={deleteNotes} editNotes={editNotes} date={date} time={time} />} />
            <Route path="/editNotes" element={<EditNotes toEditNote={toEditNote} newTitle={newTitle} newDesc={newDesc} setNewTitle={setNewTitle} setNewDesc={setNewDesc} save={save} clear={clear} date={date} time={time} />} />

            <Route path='/writeTodos' element={<AddTodos title={todoTitle} desc={todoDesc} setTitle={setTodoTitle} setDesc={setTodoDesc} addTodo={addTodo} />} />
            <Route path='/todos' element={<Todos todos={todos} onDelete={onDelete} />} />

            <Route path='/weather' element={<Weather />} />

            <Route path='/news' element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
