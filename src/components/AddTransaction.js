import { useState } from "react";


const AddTransaction = () => {
  const [inputs,setInputs] = useState({
    text: "",
    amount: ""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [name]: value
      }
    })
  } 
  
  return (
    <>
    <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={inputs.text} name="text" onChange={handleChange} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={inputs.amount} name="amount" onChange={handleChange} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
