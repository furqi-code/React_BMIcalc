import { useRef } from "react";

export function Input({ standard, setCalculated_bmi, calculated_bmi }) {
  const weightRef = useRef();
  const heightRef = useRef();
  const height_inchesRef = useRef();
  
  const invalidInputField = () => {
    alert("Input fields shouldn't be empty, Zero or negative numbers");
    setCalculated_bmi("");
    weightRef.current.value = "";
    heightRef.current.value = "";
    if (!standard)
      height_inchesRef.current.value = "";
  };

  // Multiplication, division, subtraction auto-convert strings → numbers
  const calculate = () => {
    let weight = weightRef.current.value;
    if (standard) {
      // Metric system 
      let height = heightRef.current.value;
      if (!weight || !height || weight <= 0 || height <= 0) {
        invalidInputField();
        return;
      }
      let bmi = weight / (height * height);
      console.log(bmi);
      setCalculated_bmi(bmi.toFixed(2));
    } else {
      // Imperial system
      let feet = parseFloat(heightRef.current.value);
      let inches = parseFloat(height_inchesRef.current.value);
      let totalInches = (feet * 12) + inches;
      if (!weight || !feet || weight <= 0 || feet <= 0 || inches < 0 || isNaN(inches)) {
        invalidInputField();
        return;
      }
      let bmi = (703 * weight) / (totalInches * totalInches);
      console.log(bmi);
      setCalculated_bmi(bmi.toFixed(2));
    }
  };

  return (
    <>
      <form>
        {standard && (
          <div className="d-block">
            <div className="p-2">
              <label htmlFor="weight" className="form-label">
                Weight
              </label>
              <input
                className="form-control me-2"
                type="number"
                placeholder="kg"
                aria-label="number"
                id="weight"
                name="weight"
                ref={weightRef}
              />
            </div>
            <div className="p-2">
              <label htmlFor="height" className="form-label">
                Height
              </label>
              <input
                className="form-control me-2"
                type="number"
                placeholder="meter"
                aria-label="number"
                id="height"
                name="height"
                ref={heightRef}
              />
            </div>
            <div className="p-2 text-endd d-flex justify-content-around">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => calculate()}
              >
                Compute =
              </button>
              <h4>{calculated_bmi}</h4>
            </div>
          </div>
        )}

        {!standard && (
          <div className="d-block" style={{ width: "275px" }}>
            <div className="p-2">
              <label htmlFor="weight" className="form-label">
                Weight
              </label>
              <input
                className="form-control me-2"
                type="number"
                placeholder="pounds"
                aria-label="number"
                id="weight"
                name="weight"
                ref={weightRef}
              />
            </div>
            <div className="p-2">
              <label htmlFor="heightFeet" className="form-label">
                Height
              </label>
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="number"
                  placeholder="feet"
                  aria-label="number"
                  id="heightFeet"
                  name="height"
                  ref={heightRef}
                />
                <input
                  className="form-control"
                  type="number"
                  placeholder="inches"
                  aria-label="number"
                  id="heightInches"
                  name="height"
                  ref={height_inchesRef}
                />
              </div>
            </div>
            <div className="p-2 d-flex justify-content-around">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => calculate()}
              >
                Compute =
              </button>
              <h4>{calculated_bmi}</h4>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
