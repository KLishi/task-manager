import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App=() => {
  const[showAddTask,setShowAddTask] = useState(false)
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
//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
  

}

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
 
}

//Toggle Reminder
 const toggleReminder = (id) => {
   setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
    
  }
  
  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ?(<Tasks tasks= {tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>) : ('No Tasks to show')}
    </div>
  );
}

export default App;
