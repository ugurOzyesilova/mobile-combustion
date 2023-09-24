import React from 'react'

const Results = ({ editRow, deleteRow, calculationResultsList }) => {
    return (
        <div className="results">
            <table>
                <thead>
                    <tr>
                        <th>Facility ID</th>
                        <th>Year</th>
                        <th>Fuel</th>
                        <th>Amount of Fuel</th>
                        <th>Units</th>
                        <th>CO2</th>
                        <th>CH4</th>
                        <th>N2O</th>
                        <th>CO2e</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {calculationResultsList.map((result, index) => (
                        <tr key={index}>
                            <td>{result.selectedFacility}</td>
                            <td>{result.selectedYear}</td>
                            <td>{result.selectedFuel}</td>
                            <td>{result.selectedAmount}</td>
                            <td>{result.selectedUnit}</td>
                            <td>{result.co2}</td>
                            <td>{result.ch4}</td>
                            <td>{result.no2}</td>
                            <td>{result.co2e}</td>
                            <td>
                                <button onClick = {() => editRow(index)}>Edit</button>
                                <button onClick = {() => deleteRow(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default Results