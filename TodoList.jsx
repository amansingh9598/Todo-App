import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task:"Eat", id: uuidv4(), isDone:false}]);
    let [newTodo , setNewTodo]= useState("");

    let addNewTask =()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4() , isDone:false}];
        });
        setNewTodo(""); 
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTodo =(id)=>{
        setTodos((prevTodos) => todos.filter((prevTodos)=> prevTodos.id !=id));
    };

    let markAllDone =()=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            }
        }));
    };

    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id==id){
            return{
                ...todo,
                isDone:true,
            };
            } else{
                return todo;
            }
            
        }));
    }

    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask} style={{backgroundColor:"green",color:"white"}}>Add Task</button>
            <br /><br />
            <br />
            <hr />
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}><b>{todo.task}</b></span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)} style={{backgroundColor:"red",color:"white"}}>Delete</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>markAsDone(todo.id)} style={{backgroundColor:"green",color:"white"}}>Mark as Done</button>
                            </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone} style={{backgroundColor:"green",color:"white"}}>Done all Tasks</button>
        </div>
    );
}