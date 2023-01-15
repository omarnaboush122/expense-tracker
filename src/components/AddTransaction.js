import { useContext } from "react";
import { useState } from "react";
import { Context } from "./Context";
import { nanoid } from "nanoid";

const AddTransaction = () => {
  const { addNewTransaction } = useContext(Context);
  const [inputs, setInputs] = useState({
    text: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    const newTransaction = {
      text: inputs.text,
      amount: +inputs.amount,
      id: nanoid(),
    };
    e.preventDefault();
    addNewTransaction(newTransaction);
    setInputs({
      text: "",
      amount: "",
    });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={inputs.text}
            name="text"
            onChange={handleChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={inputs.amount}
            name="amount"
            onChange={handleChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
