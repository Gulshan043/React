import Btn from "./btn";
import FormInputs from "./formInputs";

const FormContainer = () => {
  return (
    <div className="border-2 border-white rounded-xl pt-0 p-6 w-md max-w-md">
      <h1 className="text-white my-4 text-center font-bold">Login</h1>
      <form>
        <FormInputs />
        <Btn />
      </form>
    </div>
  );
};

export default FormContainer;
