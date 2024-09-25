import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import Alarm from './components/offline/alarm/Alarm'
import Clock from './components/offline/clock/Clock'
import Stopwatch from './components/offline/stopwatch/Stopwatch'
import Timer from './components/offline/timer/Timer'

import Alert from './components/offline/notepad/Alert'
import AddNotes from './components/offline/notepad/AddNotes'
import YourNotes from './components/offline/notepad/Notes'
import EditNotes from './components/offline/notepad/EditNotes'

import Calculator from './components/offline/calculator/Calculator'

import AddTodos from './components/offline/todolist/AddTodos'

import Weather from './components/online/weather/Weather'

import News from './components/online/news/News'

import GuessNumber from './components/games/guessnumber/GuessNumber'
import QuizGame from './components/games/quizgame/QuizGame'
import RokePaperScissors from './components/games/rockpaperscissors/RockPaperScissors'
import SlidingPuzzle from './components/games/slidingpuzzle/SlidingPuzzle'
import TicTacToe from './components/games/tictactoe/TicTacToe'

import AffirmationGenerator from './components/online/affirmation/Affirmation'
import FactGenerator from './components/online/fact/Fact'
import JokeGenerator from './components/online/joke/Joke'
import MotivationalQuoteGenerator from './components/online/motivationalquote/MotivationalQuote'
import QuoteGenerator from './components/online/quote/Quote'
import CGPACalculator from './components/offline/cgpa_calculator/CGPACalculator'
import CurrencyConverter from './components/offline/currency_converter/CurrencyConverter'
import Reminder from './components/offline/reminder/Reminder'
import Calendar from './components/offline/calendar/Calendar'

function App() {
  //Current Time
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

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
  const [alert, setAlert] = useState(false)
  const [alertMssg, setAlertMssg] = useState('')

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
        date: time.toLocaleDateString(),
        time: time.toLocaleTimeString()
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
        date: time.toLocaleDateString(),
        time: time.toLocaleTimeString()
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

  //Color mode
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#E8E7D5";
      document.body.style.color = "black";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#3f3e42";
      document.body.style.color = "white";
    }
  }

  return (
    <div className="App">
      {alert === true ? <Alert alertMssg={alertMssg} /> : ''}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar time={time} changeMode={changeMode} mode={mode}/>}>
            <Route index element={<Home mode={mode}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/alarm' element={<Alarm time={time} mode={mode} />} />
            <Route path='/stopwatch' element={<Stopwatch mode={mode}/>} />
            <Route path='/timer' element={<Timer mode={mode}/>} />
            <Route path='/reminder' element={<Reminder time={time} mode={mode}/>} />

            <Route path='/calculator' element={<Calculator mode={mode}/>} />

            <Route path="/writeNotes" element={<AddNotes title={noteTitle} desc={noteDesc} setTitle={setNoteTitle} setDesc={setNoteDesc} addNotes={addNotes} clear={clear} time={time} />} />
            <Route path="/notes" element={<YourNotes notes={notes} deleteNotes={deleteNotes} editNotes={editNotes} time={time} />} />
            <Route path="/editNotes" element={<EditNotes toEditNote={toEditNote} newTitle={newTitle} newDesc={newDesc} setNewTitle={setNewTitle} setNewDesc={setNewDesc} save={save} clear={clear} time={time} />} />

            <Route path='/todos' element={<AddTodos title={todoTitle} desc={todoDesc} setTitle={setTodoTitle} setDesc={setTodoDesc} addTodo={addTodo} todos={todos} onDelete={onDelete} />} />

            <Route path='/cgpa-calculator' element={<CGPACalculator mode={mode}/>} />

            <Route path='/currency-converter' element={<CurrencyConverter mode={mode} />} />

            <Route path='/calendar' element={<Calendar />} />

            <Route path='/weather' element={<Weather />} />
            <Route path='/news' element={<News />} />
            <Route path='/affirmation' element={<AffirmationGenerator />} />
            <Route path='/fact' element={<FactGenerator />} />
            <Route path='/joke' element={<JokeGenerator />} />
            <Route path='/motivational-quote' element={<MotivationalQuoteGenerator />} />
            <Route path='/random-quote' element={<QuoteGenerator />} />

            <Route path='/guess-number' element={<GuessNumber />} />
            <Route path='/quiz' element={<QuizGame />} />
            <Route path='/roke-paper-scissors' element={<RokePaperScissors />} />
            <Route path='/puzzle' element={<SlidingPuzzle />} />
            <Route path='/tic-tac-toe' element={<TicTacToe />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
