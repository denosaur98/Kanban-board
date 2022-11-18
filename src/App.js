import React, { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { LIST_TYPE } from './config';
import data from './mock.json';
import css from './App.module.css';

function App() {
  const {users, activeUserId} = data
  const activeUser = users.find(user => user.id === activeUserId)

  let tasks = JSON.parse(localStorage.getItem("tasksList"))
  tasks = tasks ? tasks : []
  const [List, setList] = useState(tasks)

  const backlogTasks = List ? List.filter(task => task.type === LIST_TYPE.BACKLOG) : []
  const readyTasks = List ? List.filter(task => task.type === LIST_TYPE.READY) : []
  const inprogressTasks = List ? List.filter(task => task.type === LIST_TYPE.IN_PROGRESS) : []
  const finishedTasks = List ? List.filter(task => task.type === LIST_TYPE.FINISHED) : []

  const handleAddTask = (task) => {
    const newTasksList = [...List, task]
    localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    setList(newTasksList)
  }

  const handleMoveTask = (id, type) => {
    const newTasksList = List.map(task => {
      task.type = task.id === id ? type : task.type 
      return task
    })

    localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    setList(newTasksList)
  }

  return (
    <div className={css.app}>
      <Header />
      <Main 
        tasks={[backlogTasks, readyTasks, inprogressTasks, finishedTasks]}
        handleAddTask={handleAddTask}
        handleMoveTask={handleMoveTask}
      />
      <Footer 
        activeTasks={backlogTasks.length}
        finishedTasks={finishedTasks.length}
        nameUser={activeUser.name}
        yearUser={activeUser.year}
      />
    </div>
  );
}

export default App;
