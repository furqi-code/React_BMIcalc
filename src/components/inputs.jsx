export function Input({ heightRef, weightRef, bmi, calculated_bmi }) {
  return (
    <>
      <form>
        <div className="d-block">
          <div className="p-2">
            <label for="weight" className="form-label">
              Weight (kg)
            </label>
            <input
              className="form-control me-2"
              type="number"
              placeholder="weight"
              aria-label="number"
              id="weight"
              name="weight"
              ref={weightRef}
            />
          </div>
          <div className="p-2">
            <label for="height" className="form-label">
              Height (m)
            </label>
            <input
              className="form-control me-2"
              type="number"
              placeholder="height"
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
              onClick={() => bmi()}
            >
              Compute =
            </button>
            <h3>{calculated_bmi}</h3>
          </div>
        </div>
      </form>
    </>
  );
}
