import { useState, useRef } from "react";
import { Header } from "./components/header.jsx";
import { Input } from "./components/inputs.jsx";
import { Chart } from "./components/range_Category.jsx";

export function App() {
  const weightRef = useRef();
  const heightRef = useRef();
  const height_inchesRef = useRef();
  const [standard, setStandard] = useState(true);
  const [calculated_bmi, setCalculated_bmi] = useState();

  const invalidInputField = () => {
    if(standard)
    {
      alert("Input fields shouldn't be empty, Zero or negative numbers");
      setCalculated_bmi("");
      weightRef.current.value = "";
      heightRef.current.value = "";
    }else{
      alert("Input fields shouldn't be empty, Zero or negative numbers");
      setCalculated_bmi("");
      weightRef.current.value = "";
      heightRef.current.value = "";
      height_inchesRef.current.value = "";
    }
  };

  // Multiplication, division, subtraction auto-convert strings → numbers
  const calculate = () => {
    let weight = weightRef.current.value;
    if (standard) {  // Metric system
      let height = heightRef.current.value;
      if (!weight || !height || weight <= 0 || height <= 0) {
        invalidInputField() ;
        return;
      }
      let bmi = weight / (height * height);
      console.log(bmi);
      setCalculated_bmi(bmi.toFixed(2));
    } else {  // Imperial system
      let feet = parseFloat(heightRef.current.value);
      let inches = parseFloat(height_inchesRef.current.value);
      let totalInches = (feet * 12) + inches ;
      if (!weight || !feet || weight <= 0 || feet <= 0) {
        invalidInputField() ;
        return;
      }
      let bmi = (703 * weight) / (totalInches * totalInches);
      console.log(bmi);
      setCalculated_bmi(bmi.toFixed(2));
    }
  };

  return (
    <>
      <Header setStandard={setStandard} setCalculated_bmi={setCalculated_bmi}></Header>
      <div className="container box">
        <div>
          <Input
            weightRef={weightRef}
            heightRef={heightRef}
            height_inchesRef={height_inchesRef}
            standard={standard}
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
