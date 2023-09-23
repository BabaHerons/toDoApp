import Task from "./Task";
import Input from "../Input";
import Button from "../Button";
import React, { useState, useEffect } from "react";
import { TaskModel } from "../../Model";

export default function Main() {
  // ALL THE ASYNCHRONOUS CHANGE WHEN THE COMPONENT LOADS
  useEffect(() => {
    fetchData();
  }, []);

  let [tasks, setTasks] = useState<TaskModel[]>([]);

  // THE VARIABLE taskForm IS USED TO STORE THE VALUES FROM THE FORM AS JSON.
  let [taskForm, setTaskForm] = useState<TaskModel>({
    taskName: "",
    taskDescription: "",
  });

  // THIS FUNCTION IS USED TO RECORD THE PARITCULAR FORM DATA
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
  };

  const fetchData = () => {
    // let city = "Chennai";
    // let api_key = "c03acf7f491a5f173e497ecba28c67c4";
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    let url = "http://localhost:3000/tasks";
    return fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTasks(data.reverse());
      })
      .catch((networkError) => console.log(networkError));
  };

  // TAKING THE VALUES FROM THE USER THROUGH THE FORM
  const submitForm = (): void => {
    console.log(taskForm)
    if (taskForm.taskName == "") {
      alert("Please enter Task Name");
    } else if (taskForm.taskDescription == "") {
      alert("Please enter Task Description");
    } else {
      console.log(JSON.parse(JSON.stringify(taskForm)));
      (document.getElementById("TaskForm") as HTMLFormElement).reset();
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskForm),
      }).then(() => {
        fetchData();
        setTaskForm({ taskName: "", taskDescription: "" });
      });
    }
  };

  const handleDelete = (id:number):void => {
    if (confirm("Do you wanna delete this task ?")){
      fetch(`http://localhost:3000/tasks/${id}`, {
          method: "DELETE"
        }).then(() => {
          fetchData();
        });
    }
  }
  const handleRead = (task:TaskModel):void => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...task, isRead: !task.isRead}),
      }).then(() => {
        fetchData();
      });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form id="TaskForm" className="mb-5">
          <Input
            name="taskName"
            type="text"
            placeholder="Enter the task name"
            changeHandler={handleChange}
          />{" "}
          <br />
          <br />
          <Input
            name="taskDescription"
            type="text"
            placeholder="Enter the task description"
            changeHandler={handleChange}
          />
          <Button name="Submit" type="button" onClick={() => submitForm()} />
        </form>
        <div className="grid grid-cols-3 gap-1 px-2">
          {tasks.map((task: TaskModel) => {
            return (
              <>
                <Task task={task} onDelete={() => handleDelete(task.id!)} onToggle={() => handleRead(task)} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
