export function Header({ setStandard, setCalculated_bmi }) {
  return (
    <div className="container p-3 d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3u541LNZgNbMdnXQ_qLbmmKSr1CgGOUEt0g&s"
          alt=""
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "4px",
          }}
        />
        <h2 className="px-3 mb-0">BMI Calculator</h2>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            setStandard(false);
            setCalculated_bmi("");
          }}
        >
          Imperial
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => {
            setStandard(true);
            setCalculated_bmi("");
          }}
        >
          Metric
        </button>
      </div>
    </div>
  );
}
