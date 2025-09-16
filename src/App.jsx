import { useState, useRef } from "react";
import { Header } from "./components/header.jsx";
import { Input } from "./components/inputs.jsx";
import { Chart } from "./components/range_Category.jsx";

export function App() {
  const weightRef = useRef() ;
  const heightRef = useRef() ;
  const [calculated_bmi, setCalculated_bmi] = useState();

  const calculate = () => {
    let weight = weightRef.current.value, height = heightRef.current.value ;
    if((!weight || !height) || (weight==0 || height==0)){
      alert("Input fields shouldn't be empty or Zero") ;
      setCalculated_bmi("") ;
      weightRef.current.value = "" ;
      heightRef.current.value = "" ;
      return ;
    }
    let bmi = weight / (height * height)
    // console.log(bmi) ;
    setCalculated_bmi(bmi.toFixed(2)) ;
  }

  return (
    <>
      <Header></Header>
      <div className="container box">
        <div>
          <Input
          weightRef={weightRef}
          heightRef={heightRef}
          bmi={calculate}
          calculated_bmi={calculated_bmi}
          ></Input>
        </div>

        <div className="results-container">
          <Chart></Chart>
        </div>
      </div>
    </>
  );
}