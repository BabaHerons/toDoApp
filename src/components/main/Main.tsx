import Task from "./Task";
import Input from "../Input";
import Button from "../Button";
import React, { useState } from "react";
import { TaskModel } from "../../Model";


export default function Main() {
  // THE VARIABLE taskForm IS USED TO STORE THE VALUES FROM THE FORM AS JSON.
  let [taskForm, setTaskForm] = useState<TaskModel>({
    taskName: "",
    taskDescription: "",
  });

  // THIS FUNCTION IS USED TO RECORD THE PARITCULAR FORM DATA
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
  };

  // TAKING THE VALUES FROM THE USER THROUGH THE FORM
  const submitForm = ():void => {
    if (taskForm.taskName == "") {
      alert("Please enter Task Name");
    } else if (taskForm.taskDescription == "") {
      alert("Please enter Task Description");
    } else {
      console.log(JSON.parse(JSON.stringify(taskForm)));
      (document.getElementById("TaskForm") as HTMLFormElement).reset();
    }
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
          <Button name="Submit" type="button" onClick={submitForm} />
        </form>
        <Task
          name="Groccery Shopping"
          description="Need to purchase the Groccerry from Smart Bazaar of boring road."
        />
        &nbsp;
        <Task
          name="Groccery Shopping"
          description="Need to purchase the Groccerry from Smart Bazaar of boring road."
        />
        &nbsp;
      </div>
    </>
  );
}
