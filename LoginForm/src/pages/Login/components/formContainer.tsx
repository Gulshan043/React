// import Btn from "./btn";
// import FormInputs from "./formInputs";
import { useState } from "react";
const FormContainer = () => {

  const [input, setInput] = useState('second');

  const submitHandler = (e:any) => {
    e.preventDefault();
    console.log("form submitted by: ", input);
    setInput('')
  };

  const onInput = (e:any) => {
    setInput(e.target.value);
  };
  return (
    // <div className="border-2 border-white rounded-xl pt-0 p-6 w-md max-w-md">
    //   <h1 className="text-white my-4 text-center font-bold">Login</h1>
    //   <form>
    //     <FormInputs />
    //     <Btn />
    //   </form>
    // </div>

    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input
        type="text"
        onChange={(e)=> onInput(e)}
        value={input}
        className="border border-white rounded-2xl  text-white p-3"
      />
      <button
        className="bg-gray-600 px-5 py-2 text-white rounded" type="submit">
        submit
      </button>
    </form>
  );
};

export default FormContainer;
