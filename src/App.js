import React, { useEffect, useState } from 'react';
import "./App.css"
import Form from "./components/Form"
import Calculations from "./components/Calculations"
import Results from "./components/Results"
import Profile from "./components/Profile"
import Nav from "./components/Nav"
function App() {
  const [data, setData] = useState({
    sources: [],
    facilities: [],
    units: [],
    fuel_types: [],
    fuels: [],
  });

  const [formValues, setFormValues] = useState({
    selectedFacility: '',
    selectedYear: '',
    selectedFuelSource: '',
    selectedFuelType: '',
    selectedFuel: '',
    selectedUnit: '',
    selectedAmount:''
  });

  const [calculationResult, setCalculationResult] = useState({
    co2: '',
    no2: '',
    ch4: '',
    co2e: '',
  });

  const [calculationResultsList, setCalculationResultsList] = useState([]);
  const [editingRowIndex, setEditingRowIndex] = useState(null);

  // Fetch data from the provided endpoint
  useEffect(() => {
    fetch('http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Build the URL for the calculation endpoint
    const calculationURL = `http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data-calculate?source_id=${formValues.selectedFuelSource}&fuel_type_id=${formValues.selectedFuelType}&fuel_id=${formValues.selectedFuel}&unit_id=${formValues.selectedUnit}&amount=${formValues.selectedAmount}&facility=${formValues.selectedFacility}&year=${formValues.selectedYear}`;

    // Fetch data from the calculation endpoint
    fetch(calculationURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        // Update the calculationResult state with the new result values
        setCalculationResult(result);
      })
      .catch((error) => {
        console.error('Error fetching calculation data:', error);
        setCalculationResult({
          co2: '',
          no2: '',
          ch4: '',
          co2e: '',
        }); 
      });
  };

  
  const addResultToList = () => {
    if (
      calculationResult.co2 !== '' &&
      calculationResult.no2 !== '' &&
      calculationResult.ch4 !== '' &&
      calculationResult.co2e !== ''
    ) {
     
      const newRow = {
        ...formValues,
        ...calculationResult,
      };

      let updatedList;

      if (editingRowIndex !== null) {
        
        updatedList = [...calculationResultsList];
        updatedList[editingRowIndex] = newRow;
        setEditingRowIndex(null); // 
      } else {
  
        updatedList = [...calculationResultsList, newRow];
      }

      
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        selectedFacility: '',
        selectedFuelSource: '',
        selectedFuelType: '',
        selectedFuel: '',
        selectedUnit: '',
        selectedYear: '',
        selectedAmount:''
      }));

     
      setCalculationResult({
        co2: '',
        no2: '',
        ch4: '',
        co2e: '',
      });

    
      localStorage.setItem('calculationResultsList', JSON.stringify(updatedList));

    
      setCalculationResultsList(updatedList);
    }
  };


  useEffect(() => {
    const storedResults = localStorage.getItem('calculationResultsList');
    if (storedResults) {
      setCalculationResultsList(JSON.parse(storedResults));
    }
  }, []);

 
  const deleteRow = (index) => {
    const updatedList = [...calculationResultsList];
    updatedList.splice(index, 1);
    setCalculationResultsList(updatedList);
    localStorage.setItem('calculationResultsList', JSON.stringify(updatedList));
  };

 
  const editRow = (index) => {
    const rowToEdit = calculationResultsList[index];
    setFormValues({ ...rowToEdit });
    setEditingRowIndex(index); 
  };


  const uniqueUnits = Array.from(
    new Set(data.units.map((unit) => unit.id))
  ).map((id) => data.units.find((unit) => unit.id === id));

  return (
    <div className='app'>
      <div className="ball" />
      <div className='glass-profile'>
        <Profile />
      </div>
      <div className='glass-form'>
        <Nav />
        <div className='glass-form-structure'>
          <Form handleSubmit={handleSubmit}
            formValues={formValues}
            setFormValues={setFormValues}
            data={data}
            editingRowIndex={editingRowIndex}
            uniqueUnits = {uniqueUnits}
          />
          <Calculations calculationResult={calculationResult}
            addResultToList={addResultToList}
            editingRowIndex={editingRowIndex}
          />
          <Results editRow={editRow}
            deleteRow={deleteRow}
            calculationResultsList={calculationResultsList}
          />   
        </div>
       

      </div>
    </div>
  );
}
export default App;
