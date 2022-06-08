import { useState } from 'react';
import './App.css';

function Todo(props) {
    const [task, setTask] = useState("")
    const [listOftasks, setListOfTasks] = useState([])

    function addTaskToList() {
        if(!task) return; // "" 0  null undefined - false
        const data = [...listOftasks]
        data.push({
            task,
            done: false
        })
        setListOfTasks(data);
        setTask("")
    }


    function deleteTask(task) {
        const filteredList = listOftasks.filter(item => item.task !== task)
        setListOfTasks(filteredList)
    }


    function toggleLine(task) {
        const newArr = listOftasks.map(item => {
            if(item.task === task) {
                item.done = !item.done
            }

            return item
        })

        setListOfTasks(newArr)
    }

    console.log(listOftasks)
    return (
        <>
            <div className="App">
                <h1>Todo App</h1>
                <div>
                    <input placeholder='Enter a task' value={task} onChange={e => setTask(e.currentTarget.value)}/>
                    <button onClick={addTaskToList}>Add {task}</button>
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ul style={{textAlign: "start", width: '15rem'}}>
                        {
                            listOftasks.map(({task, done}) => (
                                <li key={task} style={{ textDecoration: `${done ? "line-through": "none"}`}}><span onClick={() => toggleLine(task)}>{task}</span> <button onClick={() => deleteTask(task)}>delete</button></li>
                            ))
                        }
                      
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Todo;