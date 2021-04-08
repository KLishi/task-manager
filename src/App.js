import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App=() => {
  const[tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Submit assignment',
        day: 'Apr 7th at 12pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctor appointment',
        day: 'Apr 7th at 1pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Call friend',
        day: 'Apr 7th at 7pm',
        reminder: false,
    }
])
//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  console.log(id)
}
  return (
    <div className="container">
     <Header/>
     {tasks.length > 0 ?(<Tasks tasks= {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to show')}
    </div>
  );
}

export default App;
