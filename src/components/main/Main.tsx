import Task from "./Task";

export default function Main() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          className="w-[50%] mb-10"
          placeholder="Enter the Task"
        />
        <Task name="Groccery Shopping" description="Need to purchase the Groccerry from Smart Bazaar of boring road." />&nbsp;
        <Task name="Groccery Shopping" description="Need to purchase the Groccerry from Smart Bazaar of boring road." />&nbsp;
      </div>
    </>
  );
}
