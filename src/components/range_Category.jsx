export function Chart()
{
  return (
       <div className="emi-results">
            <div className="emi-item">
                <h4 className="emi-label">Underweight</h4>
                <p className="emi-value emi-principal" id="under">below 18.5</p>
            </div>
            
            <div className="emi-item">
                <h4 className="emi-label">Healthy Weight</h4>
                <p className="emi-value emi-monthly" id="healthy">18.5 – 24.9</p>
            </div>
            
            <div className="emi-item">
                <h4 className="emi-label">Overweight</h4>
                <p className="emi-value emi-interest" id="over">25.0 – 29.9</p>
            </div>
            
            <div className="emi-item">
                <span className="emi-label">Obese</span>
                <span className="emi-value emi-total" id="obese">30.0 or above</span>
            </div>
        </div>
  )
}