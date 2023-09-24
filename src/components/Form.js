import React from 'react'


const Form = ({ handleSubmit, formValues, setFormValues, data, editingRowIndex, uniqueUnits }) => {
    return (
        <div className="form">
            <span>GİRDİ ALANI</span>

            <p>Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları doldurun:</p>
            <form onSubmit={handleSubmit} className='form-input-area'>
                <div>
                    <label>Facility:</label>
                    <div>
                        <select
                            value={formValues.selectedFacility}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    selectedFacility: e.target.value,
                                })
                            }
                        >
                            <option value="">Seçiniz</option>
                            {data.facilities.map((facility, index) => (
                                <option key={index} value={facility}>
                                    {facility}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                <div>
                    <label>Year:</label>
                    <div>
                    <input
                        type="text"
                        placeholder='Giriniz'
                        value={formValues.selectedYear}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                selectedYear: e.target.value,
                            })
                        }
                    />
                    </div>
                </div>

                <div>
                    <label>Fuel Source:</label>
                    <div>
                        <select
                            value={formValues.selectedFuelSource}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    selectedFuelSource: e.target.value,
                                })
                            }
                        >
                            <option value="">Seçiniz</option>
                            {data.sources.map((source) => (
                                <option key={source.id} value={source.name_tr}>
                                    {source.name_tr}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label>Fuel Type:</label>
                    <div>
                        <select
                            value={formValues.selectedFuelType}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    selectedFuelType: e.target.value,
                                })
                            }
                        >
                            <option value="">Seçiniz</option>
                            {data.fuel_types.map((fuelType) => (
                                <option key={fuelType.id} value={fuelType.name_tr}>
                                    {fuelType.name_tr}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label>Fuel:</label>
                    <div>
                        <select
                            value={formValues.selectedFuel}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    selectedFuel: e.target.value,
                                })
                            }
                        >
                            <option value="">Seçiniz</option>
                            {data.fuels.map((fuel) => (
                                <option key={fuel.id} value={fuel.name_en}>
                                    {fuel.name_tr}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label>Unit:</label>
                    <div className = "unit-selection">
                        <input
                            type="text"
                            placeholder='Giriniz'
                            value={formValues.selectedAmount}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    selectedAmount: e.target.value,
                                })
                            }
                        />
                    <select
                        value={formValues.selectedUnit}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                selectedUnit: e.target.value,
                            })
                        }
                    >
                        <option value="">Seçiniz</option>
                        {uniqueUnits.map((unit) => (
                            <option key={unit.id} value={unit.name_en}>
                                {unit.name_tr}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>

                <button type="submit" className ="submit">
                    {editingRowIndex !== null ? 'Submit with Edited Values' : 'Submit'}

                </button>
            </form>

        </div>
    )
}

export default Form