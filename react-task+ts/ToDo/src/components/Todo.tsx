import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

//interface
interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const ToDo = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const[todoText, setTodoText] = React.useState<string>('');
  const [editIds, setEditIds] = React.useState<number[]>([]);
  const [editedTodo, setEditedTodo] = React.useState<string>('');

  const handleAddToDo = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(todoText !== ''){
      setTodos([...todos, {id:Date.now(), text: todoText, isDone: false}]);
      setEditedTodo(todoText);
    }
    setTodoText('');
  }

  return (
    <div
      style={{
        margin: "50px auto",
        width: "40%",
        background: "rgba(226, 31, 249, 0.2)",
        borderRadius: "16px",
        boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: " 1px solid rgba(226, 31, 249, 0.3)",
        padding: "40px",
      }}
    >
      <Typography variant="h4" style={{ textAlign: "center" , marginBottom:'20px'}}>
        To Do
      </Typography>

      <form onSubmit={handleAddToDo}>
        <div style={{display:'flex', gap:'10px', }}>
        <TextField value={todoText} onChange={(e)=>setTodoText(e.target.value)} style={{width:'80%'}} sx={{ input: { color: 'white'} }}  placeholder="your task" />
        <Button type='submit' variant="outlined" style={{color:'white', borderColor:'rgb(120,32,178)', width:'10%', fontSize:'25px' }}>+</Button>
        </div>
      </form>

        <ul style={{display:'flex',flexDirection:"column", marginTop:'20px', padding:'0'}}>
          {todos && todos.map((obj)=>
          
              <li key={obj.id} style={{display:'flex', gap:'10px', justifyContent:'flex-start', alignItems:'center', margin:'10px 0', textDecoration: obj.isDone ? 'line-through' : 'none'}}>
                {
                  !editIds.includes(obj.id) ?
                    <>
                      <Typography>{obj.text}</Typography>
                      <Button onClick={()=>setTodos(prevTodos => prevTodos.map((x)=> x.id === obj.id 
                          ? {...x, isDone: x.isDone ? false : true } 
                          : x))} variant="outlined" style={{borderColor:'white'}}><DoneIcon sx={{color:'white'}}/></Button>
                      <Button onClick={()=> setEditIds([...editIds, obj.id])} variant="outlined" style={{borderColor:'white'}}><EditIcon sx={{color:'white'}}/></Button>
                      <Button onClick={()=>{
                        const updatedTodos = todos.filter(x=>x.id !== obj.id)
                        setTodos(updatedTodos)
                      }}  variant="outlined" style={{borderColor:'white'}}><DeleteIcon sx={{color:'white'}}/></Button>
                    </>
                :
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    setTodos(prevTodos => prevTodos.map((x)=> x.id === obj.id ? {...x, text: editedTodo} : x));
                    setEditIds(editIds.filter((x)=> x !== obj.id));
                    
                  }}>
                    <TextField onChange={(e)=> setEditedTodo(e.target.value)} value={editedTodo}/>
                    <Button type="submit">save</Button>
                    <Button onClick={()=> setEditIds(editIds.filter((x)=> x !== obj.id))} type="button">cancel</Button>
                  </form>
                }
              </li>
          )}
        </ul>
    </div>
  );
};

export default ToDo;
