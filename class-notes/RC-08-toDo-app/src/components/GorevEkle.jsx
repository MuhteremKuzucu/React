import React, { useState } from 'react'

const GorevEkle = ({yapilacak,setYapilacak}) => {
  
  const[todo,setTodo]=useState("")
  const[day,setDay]=useState("")
  const[goster,setGoster]=useState(true)


  const gonder=(e)=>{
    e.preventDefault()

    setYapilacak([{id:7,text:todo,day:day,isDone:false},  ...yapilacak
      ])

    setTodo("")
    setDay("")  
  }

  return (
    <div>
      <header className="header">
        <h1>TO DO APP</h1>
        <button
          className="btn"
          style={{background: goster===true ? "red":"purple"}}
          onClick={()=>setGoster(!goster)}
         
        >
         {goster===true ? "CLOSE":"SHOW"} ADD TASK BAR
        </button>
      </header>
        
        {goster && (
          <form onSubmit={gonder}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"

              onChange={(e)=>setTodo(e.target.value)}
            
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              onChange={(e)=>setDay(e.target.value)}
              name="day"
              value={day}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        )}
        
    </div>
  );
}

export default GorevEkle