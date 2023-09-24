import React from 'react'

const Calculations = ({calculationResult, addResultToList, editingRowIndex}) => {
  return (
      <div className="calculations">
          <span>HESAPLAMA ALANI</span>
          <p>Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları aşağıdaki gibidir:</p>
          <div> 
                <div>
                  <span>CO2</span>
                  <span>{calculationResult.co2}</span>
                </div>
              <div>
                  <span>NO2</span>
                  <span>{calculationResult.no2}</span>
              </div>
              <div>
                  <span>CH4</span>
                  <span>{calculationResult.ch4}</span>
              </div>
              <div>
                  <span>CO2e</span>
                  <span>{calculationResult.co2e}</span>
              </div>
          </div>
         
          <button onClick={addResultToList}>
              {editingRowIndex !== null ? 'Change Table with Edited Values' : 'Add to Table'}
          </button>
      </div>
  )
}

export default Calculations