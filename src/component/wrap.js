import React from 'react';
import { useState, useEffect } from 'react';
import icon from './images/icon.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Wrap() {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState('');
  // const [className, setClassName] = useState('unchecked');

  // const inputBox = document.getElementById("input-box");
  // const listContainer = document.getElementById("list-container")
const addTask = () => {
    if(input.length < 4){
        toast.error("input be greater then 4")
    }
    else{
      let data={
        task: input,
        id: todolist.length + 1,
      }
      setTodolist((prev) => [
        ...prev, 
        data
      ])
      setInput("")
      toast.success("SUCCESS")
    }
    
}
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const [checkedItems, setCheckedItems] = useState({});

  const toggleClass = index => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [index]: !prevCheckedItems[index]
    }));
  };
  const deleteTodo = (id) => {
    setTodolist(todolist.filter(list => list.id !== id))
  }
  useEffect(() => {
    console.log(todolist, 'i  am todo')
  }, [todolist])

  return (
    <div>
      <div className='container'>
        <div className='todo-app'>
          <h2>To-Do List <img src={icon}></img></h2>
          <div className='row'>
            <input type='text' id='input-box' value={input} placeholder='Add your text' onChange={handleChange}></input>
            <button disabled={input === ''} onClick={addTask}>Add</button>
          </div>
          <p></p>
          <ul id='list-container'>
            {todolist.length > 0 ?
             todolist.map((todo, index) => {
              const className = checkedItems[index] ? 'checked' : 'unchecked';
              return (
                <li key={index} className={className} onClick={() => toggleClass(index)}> {todo.task} <button onClick={() => deleteTodo(todo.id)} className='btn'>&#xD7;</button></li>
                // {index + 1}
              )
            })
            : <div>No Task at the moment</div>
           }
          </ul>
          {/* {input} */}
        </div>
      </div>

    </div>
  )
}

export default Wrap
