import Task from "./Task";

export default function Main() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <input type="text" className="w-[50%] mb-10" placeholder="Enter the Task" />
        <Task />
      </div>
    </>
  );
}
