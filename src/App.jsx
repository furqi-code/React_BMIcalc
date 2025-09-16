import { useState } from "react";
import { Header } from "./components/header.jsx";
import { Input } from "./components/inputs.jsx";
import { Chart } from "./components/range_Category.jsx";

export function App() {
  const [standard, setStandard] = useState(true);
  const [calculated_bmi, setCalculated_bmi] = useState();

  return (
    <>
      <Header
        standard={standard}
        setStandard={setStandard}
        setCalculated_bmi={setCalculated_bmi}
      ></Header>
      <div className="container box">
        <div>
          <Input
            standard={standard}
            setCalculated_bmi={setCalculated_bmi}
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
