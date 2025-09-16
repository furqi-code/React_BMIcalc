export function Input({
  height_inchesRef,
  heightRef,
  weightRef,
  bmi,
  calculated_bmi,
  standard,
}) {
  return (
    <>
      <form>
        {standard && (
          <div className="d-block">
            <div className="p-2">
              <label for="weight" className="form-label">
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
              <label for="height" className="form-label">
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
                onClick={() => bmi()}
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
              <label for="weight" className="form-label">
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
              <label for="heightFeet" className="form-label">
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
                onClick={() => bmi()}
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
