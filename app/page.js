"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask, {title, desc}])
    settitle('')
    setdesc('')
    console.log(mainTask)
  }
  const handleDelete = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let renderTask = <h2 className="font-bold">No task available</h2>
  if (mainTask.length > 0) {
    renderTask =mainTask.map((t,i)=>{
      return(
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between w-2/3">
           <h4 className="text-2xl font-semibold">{t.title}</h4>
           <h5 className="text-2xl font-semibold">{t.desc}</h5>
          </div>
          <button onClick={()=>{handleDelete(i)}} className="bg-red-500 text-white rounded px-5 py-2">Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Yadubir's TO-Do List
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-9 px-5 py-3"
          placeholder="Enter your task here"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-9 px-5 py-3"
          placeholder="Enter your description here"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr/>
      <div className="p-6 bg-slate-400">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default page;
