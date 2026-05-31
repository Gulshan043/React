import { useState } from "react";
type Note = {
  title: string;
  Details: string;
};

const App = () => {
  const [title, settitle] = useState("title");
  const [Details, setDetail] = useState("Detail");
  const [Task, setTask] = useState<Note[]>([]);

  const submitHanlder = (e: any) => {
    e.preventDefault();
    const copyTask = [...Task];
    copyTask.push({ title, Details });
    setTask(copyTask);
    settitle("");
    setDetail("");
    console.log(Task);
  };

  const onInputChange = (e: any) => {
    const value = e.target.value;
    settitle(value);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      {/* Left Section */}
      <form
        onSubmit={(e) => submitHanlder(e)}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        <input
          type="text"
          value={title}
          onChange={(e) => onInputChange(e)}
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 outline-none rounded font-medium"
        />

        <textarea
          value={Details}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          className="px-5 py-2 w-full h-32 border-2 outline-none rounded font-medium"
          placeholder="Enter note content"
        />

        <button className="bg-white active:scale-95 w-full outline-none text-black px-5 py-2 font-medium">
          Add Note
        </button>
      </form>

      {/* Right Section */}
      <div className="lg:w-1/2 lg:border-l-2 p-10 h-screen flex flex-col">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex-1 flex flex-wrap items-start justify-start gap-5 mt-6 overflow-y-auto">
          {Task.map((task, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-40 rounded-xl bg-cover text-blue-950] py-6 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black"
              >
                <h4 className="leading-tight font-bold text-xl text-center mb-1">{task.title}</h4>
                <p>{task.Details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
