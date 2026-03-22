function CountField({value, handleChange}){
    return <div>
                <button onClick={() => handleChange(value - 1)}>Remove</button>
                <input type="tel" value={value} onChange={(event) => handleChange(event.target.value)}/>
                <button onClick={() => handleChange(value + 1)}>Add</button>
            </div>
}

export default CountField;