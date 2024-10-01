import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import AddNotes from './components/offline/notepad/AddNotes'
import YourNotes from './components/offline/notepad/Notes'
import EditNotes from './components/offline/notepad/EditNotes'

import AddTodos from './components/offline/todolist/AddTodos'

import Weather from './components/online/weather/Weather'

import GuessNumber from './components/games/guessnumber/GuessNumber'
import QuizGame from './components/games/quizgame/QuizGame'
import RokePaperScissors from './components/games/rockpaperscissors/RockPaperScissors'
import SlidingPuzzle from './components/games/slidingpuzzle/SlidingPuzzle'
import TicTacToe from './components/games/tictactoe/TicTacToe'

import CGPACalculator from './components/offline/cgpa_calculator/CGPACalculator'
import CurrencyConverter from './components/offline/currency_converter/CurrencyConverter'
import Reminder from './components/offline/reminder/Reminder'

import Dashboard from './components/user/Dashboard'
import EditProfile from './components/user/EditProfile'
import SetProfileLock from './components/user/SetProfileLock'
import Unlock from './components/user/Unlock'

function App() {
  //Initialization
  let initToolbox;
  if (localStorage.getItem("toolbox") === null) {
    initToolbox = {
      name: 'Guest',
      bio: '',
      image: '',
      coins: 1000,
      notes: [],
      questions: [],
      reminders: [],
      todos: [],
      isAvailable: {
        edit: 0,
        lock: 0,
      },
      auth: {
        token: '',
        isToken: '',
      }
    };
  } else {
    initToolbox = JSON.parse(localStorage.getItem("toolbox"));
  }





  const [name, setName] = useState(initToolbox.name)
  const [bio, setBio] = useState(initToolbox.bio)
  const [image, setImage] = useState(initToolbox.image)
  const [coins, setCoins] = useState(initToolbox.coins)

  const [isAvailable, setIsAvailable] = useState(initToolbox.isAvailable)
  const [auth, setAuth] = useState(initToolbox.auth)

  useEffect(()=>{
    initToolbox.name = name;
    localStorage.setItem('toolbox', JSON.stringify(initToolbox));
  },[name])

  useEffect(()=>{
    initToolbox.bio = bio;
    localStorage.setItem('toolbox', JSON.stringify(initToolbox));
  },[bio])

  useEffect(()=>{
    initToolbox.image = image;
    localStorage.setItem('toolbox', JSON.stringify(initToolbox));
  },[image])

  useEffect(()=>{
    initToolbox.coins = coins;
    localStorage.setItem('toolbox', JSON.stringify(initToolbox));
  },[coins])

  useEffect(()=>{
    initToolbox.isAvailable = isAvailable;
    localStorage.setItem('toolbox', JSON.stringify(initToolbox));
  },[isAvailable?.edit][isAvailable?.lock])

  useEffect(()=>{
    initToolbox.auth = auth;
    localStorage.setItem('toolbox', JSON.stringify(initToolbox));
  },[auth?.token][auth?.isToken])

  const resetProfile = () => {
      setName('Guest')
      setBio('')
      setImage('')
      setCoins(1000)
      setNotes([])
      setQuestions([])
      setReminders([])
      setTodos([])
      setIsAvailable({
        edit: 0,
        lock: 0,
      })
      setAuth({
        token: '',
        isToken: '',
      })

      setAlertMssg("Profile Reseted.");
      alertSystem();
  }





  //Current Time
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])





  //Alarm
  const [alarmTime, setAlarmTime] = useState("");
  const [message, setMessage] = useState("");

  const resetAlarm = () => {
    setAlarmTime("")
    setMessage("")
  }

  useEffect(() => {
    if (alarmTime && time.toLocaleTimeString('en-GB').slice(0, 5) === alarmTime) {
      setAlarmTime("");
      window.alert("Time's up! Alarm is ringing...");
    }
  }, [alarmTime, time]);





  //Stopwatch
  const [timeOfStopwatch, setTimeOfStopwatch] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeOfStopwatch((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setIsRunning(false);
    setTimeOfStopwatch(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };





  //Timer
  const [timeOfTimer, setTimeOfTimer] = useState(0);  // Time in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerRunning && timeOfTimer > 0) {
      timer = setInterval(() => {
        setTimeOfTimer(time => time - 1);  // Decrease time by 1 second
      }, 1000);
    } else if (timeOfTimer === 0) {
      if (isTimerRunning) {
        window.alert("Time's up!")
      }
      setIsTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeOfTimer]);

  const startTimer = () => {
    if (timeOfTimer > 0) {
      setIsTimerRunning(true);
    }
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setTimeOfTimer(0);
    setIsTimerRunning(false);
  };

  // Helper function to format the time in mm:ss
  const formatTimeOfTimer = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };





  //Reminder
  const [reminderText, setReminderText] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminders, setReminders] = useState([]);

  // Add a new reminder
  const addReminder = () => {
    if (reminderText && reminderTime) {
      const newReminder = {
        text: reminderText,
        time: reminderTime,
        id: time,
      };
      setReminders([...reminders, newReminder]);
      setReminderText('');
      setReminderTime('');
    } else {
      window.alert("Please enter both a reminder and time.");
    }
  };

  // Remove a reminder
  const removeReminder = (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
  };

  // Display the time left for each reminder
  const calculateTimeLeft = (reminderTime, reminderText) => {
    const now = time;
    const targetTime = new Date(reminderTime);
    const difference = targetTime - now;

    if (difference <= 0) {
      return 'Time is up!';
    } else {
      const minutes = Math.floor(difference / 60000);
      const seconds = Math.floor((difference % 60000) / 1000);
      return `${minutes} min ${seconds} sec left`;
    }
  };

  useEffect(() => {
    initToolbox.reminders = reminders;
    localStorage.setItem('toolbox', JSON.stringify(initToolbox));
  }, [reminders]);





  //function to show alert when needed
  const alertSystem = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }





  //Another

  //Notepad
  const [noteTitle, setNoteTitle] = useState('')
  const [noteDesc, setNoteDesc] = useState('')
  const [notes, setNotes] = useState(initToolbox.notes)
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

      setAlertMssg("Note saved successfully.");
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

    setAlertMssg("Note successfully removed.");
    alertSystem();
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

  //everytime when notes will change, it renders and current notes will be saved in the local storage.
  useEffect(() => {
    initToolbox.notes = notes;
    localStorage.setItem("toolbox", JSON.stringify(initToolbox));
  }, [notes])
  //Notepad end





  //Todolist
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

      setAlertMssg("Todo saved successfully.");
      alertSystem();
    }
    else {
      setAlertMssg("Title or Description can't be blank");
      alertSystem();
    }
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    )

    setAlertMssg("Todo successfully removed.");
    alertSystem();
  }

  const [todos, setTodos] = useState(initToolbox.todos);

  useEffect(() => {
    initToolbox.todos = todos;
    localStorage.setItem("toolbox", JSON.stringify(initToolbox));
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





  //Quiz
  const [questions, setQuestions] = useState([
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
    { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
    { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Tolstoy', 'Hemingway', 'Austen'], answer: 'Shakespeare' },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const handleAddQuestion = () => {
    if (question !== '' && option1 !== '' && option2 !== '' && option3 !== '' && option4 !== '' && answer !== '') {
      setQuestions([...questions, { question: question, options: [option1, option2, option3, option4], answer: answer }]);
      setQuestion('')
      setOption1('')
      setOption2('')
      setOption3('')
      setOption4('')
      setAnswer('')
    } else {
      setAlertMssg("Any fields can't be empty.");
      alertSystem();
    }
  }

  const handleRemoveQuestion = (question) => {
    setQuestions(
      questions.filter((e) => {
        return e !== question;
      })
    )
  }

  const handleSubmit = () => {
    setStarted(true)
  }

  const handleResetQuestions = () => {
    setQuestions([])
  }

  const handleReset = () => {
    setQuestions([
      { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
      { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
      { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Tolstoy', 'Hemingway', 'Austen'], answer: 'Shakespeare' },
    ]);
    setFinished(false);
    setStarted(false);
  }

  useEffect(() => {
    initToolbox.questions = questions;
    localStorage.setItem("toolbox", JSON.stringify(initToolbox));
  }, [questions])






  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar time={time} changeMode={changeMode} mode={mode} alert={alert} alertMssg={alertMssg} coins={coins} />}>
            <Route index element={<Home mode={mode}
              //alarm  
              time={time} alarmTime={alarmTime} setAlarmTime={setAlarmTime} message={message} setMessage={setMessage} resetAlarm={resetAlarm}
              //stopwatch
              timeOfStopwatch={timeOfStopwatch} formatTime={formatTime} startStopwatch={startStopwatch} isRunning={isRunning} stopStopwatch={stopStopwatch} resetStopwatch={resetStopwatch}
              //timer
              timeOfTimer={timeOfTimer} setTimeOfTimer={setTimeOfTimer} formatTimeOfTimer={formatTimeOfTimer} startTimer={startTimer} isTimerRunning={isTimerRunning} stopTimer={stopTimer} resetTimer={resetTimer}
            />} />
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/contact' element={<Contact mode={mode} />} />

            <Route path='/reminder' element={<Reminder time={time} mode={mode} reminders={reminders} addReminder={addReminder} removeReminder={removeReminder} reminderText={reminderText} setReminderText={setReminderText} reminderTime={reminderTime} setReminderTime={setReminderTime} calculateTimeLeft={calculateTimeLeft} />} />

            <Route path="/write-notes" element={<AddNotes title={noteTitle} desc={noteDesc} setTitle={setNoteTitle} setDesc={setNoteDesc} addNotes={addNotes} clear={clear} time={time} />} />
            <Route path="/notes" element={<YourNotes notes={notes} deleteNotes={deleteNotes} editNotes={editNotes} time={time} />} />
            <Route path="/edit-notes" element={<EditNotes toEditNote={toEditNote} newTitle={newTitle} newDesc={newDesc} setNewTitle={setNewTitle} setNewDesc={setNewDesc} save={save} clear={clear} time={time} />} />

            <Route path='/todos' element={<AddTodos title={todoTitle} desc={todoDesc} setTitle={setTodoTitle} setDesc={setTodoDesc} addTodo={addTodo} todos={todos} onDelete={onDelete} />} />

            <Route path='/cgpa-calculator' element={<CGPACalculator mode={mode} />} />

            <Route path='/currency-converter' element={<CurrencyConverter mode={mode} />} />

            <Route path='/weather' element={<Weather />} />

            <Route path='/guess-number' element={<GuessNumber coins={coins} setCoins={setCoins} />} />
            <Route path='/quiz' element={<QuizGame questions={questions} currentQuestion={currentQuestion} score={score} started={started} finished={finished} question={question} setQuestion={setQuestion} option1={option1} setOption1={setOption1} option2={option2} setOption2={setOption2} option3={option3} setOption3={setOption3} option4={option4} setOption4={setOption4} answer={answer} setAnswer={setAnswer} handleAddQuestion={handleAddQuestion} handleRemoveQuestion={handleRemoveQuestion} handleAnswer={handleAnswer} handleReset={handleReset} handleResetQuestions={handleResetQuestions} handleSubmit={handleSubmit} />} />
            <Route path='/roke-paper-scissors' element={<RokePaperScissors coins={coins} setCoins={setCoins} />} />
            <Route path='/puzzle' element={<SlidingPuzzle />} />
            <Route path='/tic-tac-toe' element={<TicTacToe />} />

            <Route path='/dashboard' element={<Dashboard initToolbox={initToolbox} alarmTime={alarmTime} isRunning={isRunning} isTimerRunning={isTimerRunning} coins={coins} setCoins={setCoins} isAvailable={isAvailable} setIsAvailable={setIsAvailable} auth={auth} setAuth={setAuth} resetProfile={resetProfile} />} />
            <Route path='/edit-profile' element={<EditProfile name={name} setName={setName} bio={bio} setBio={setBio} image={image} setImage={setImage} />} />
            <Route path='/set-profile-lock' element={<SetProfileLock auth={auth} setAuth={setAuth} />} />
            <Route path='/unlock' element={<Unlock auth={auth} setAuth={setAuth} />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
