import { useState } from "react"
import LoginPage from "./pages/Login/loginPage"

const App = () => {
  const [obj, setobj] = useState({name:'Gulshan', Age: 23});

  const onClickBtn = () =>{
    const newObj = {...obj};
    console.log("newObj: ", newObj);
    newObj.name = "Gulshan Sethi";
    setobj(newObj);
    
  }
  return (
    <>
    {/* <LoginPage /> */}
    <h1>Name:{obj.name} and Age{obj.Age}</h1>
    <button className="bg-blue-300 p-5 m-5 rounded-full" onClick={onClickBtn}>Change Values</button>
    </>
  )
}

export default App
