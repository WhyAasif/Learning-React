import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/buttonContainer.jsx";
import { useState } from "react";




function App() {
  const [calVal, setCalVal] = useState("");
  const Onclickbtn = (Btntxt) => {
       if(Btntxt === "c"){
        useState("");
       }
       else if(Btntxt === "="){
         const ResuLt = eval(calVal);
        setCalVal(ResuLt);
       }
       else if (Btntxt === "<"){
        let NewCalVal = calVal.slice(0, -1);
        setCalVal(NewCalVal);
       }
      else{
        let NewCalVal = calVal + Btntxt;
        setCalVal(NewCalVal); 
      }


     console.log(Btntxt);
  }

  return (
    <>
      <div id="calculator" className={styles.calculator}>
        <Display calVal={calVal} />
        <ButtonsContainer  Onclickbtn = {Onclickbtn} />
      </div>
    </>
  );
}

export default App;
