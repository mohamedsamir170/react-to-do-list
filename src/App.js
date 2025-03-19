import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import About from './components/About';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      {/* <Router basename="/react-to-do-list"></Router> */}
      <Router>
        <div className="App">
          <nav className="navbar">
            <h1>Todo Manager</h1>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/add">Add Task</Link>
              <Link to="/about">About</Link>
            </div>
          </nav>
          
          <Routes>
            <Route path="react-to-do-list/" element={<TodoList />} />
            <Route path="react-to-do-list/add" element={<AddTodo />} />
            <Route path="react-to-do-list/edit/:id" element={<EditTodo />} />
            <Route path="react-to-do-list/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;