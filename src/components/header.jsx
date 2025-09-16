export function Header({ standard, setStandard, setCalculated_bmi }) {
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
          className={`btn ${!standard ? "btn-dark" : "btn-outline-dark"} me-2`}
          disabled={!standard}
          onClick={() => {
            setStandard(false);
            setCalculated_bmi("");
          }}
        >
          Imperial
        </button>
        <button
          className={`btn ${standard ? "btn-light" : "btn-outline-light"}`}
          disabled={standard}
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
