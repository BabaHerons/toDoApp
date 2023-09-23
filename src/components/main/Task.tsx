// import Something from "../../assets/RightArrow";
import DeleteSvg from "../../assets/Delete";
import Check from "../../assets/Check";
import Uncheck from "../../assets/Uncheck";
import { TaskModel } from "../../Model";
// import React from "react";

interface Props {
  task: TaskModel;
  onDelete: () => void
  onToggle: () => void
}

export default function Task(props: Props) {

  return (
    <>
      <div className="max-w-sm p-6 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <a>
            <h5 className={props.task.isRead ? "mb-2 text-2xl font-bold tracking-tight text-orange-700 line-through": "mb-2 text-2xl font-bold tracking-tight text-lime-700"}>
              {props.task.taskName}
            </h5>
          </a>
          <p className={props.task.isRead ? "line-through mb-3 font-normal text-gray-700 dark:text-gray-400" : "mb-3 font-normal text-gray-700 dark:text-gray-400"}>
            {props.task.taskDescription}
          </p>
        </div>
        <div>
          {!props.task.isRead ? (
            <>
              <span onClick={() => props.onToggle()}>
                <Check />
              </span>
            </>
          ) : (
            <>
              <span onClick={() => props.onToggle()}>
                <Uncheck />
              </span>
            </>
          )}
          &nbsp;
          <span onClick={() => props.onDelete()}>
            <DeleteSvg />
          </span>
          &nbsp;
        </div>
      </div>
    </>
  );
}
