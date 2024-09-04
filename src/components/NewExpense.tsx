import { useState } from "react";
import { categories } from "../data";

export interface NewItem {
  description: string;
  amount: string;
  date: string;
  categoryId: string;
}

type NewExpenseProps = {
  onSubmit: (newItem: NewItem) => void;
};

const NewExpense = ({ onSubmit }: NewExpenseProps) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Some validation
    if (!description || !amount || !date || !categoryId) {
      setError("All fields are required");
      return;
    }

    setError("");
    onSubmit({
      description,
      amount,
      date,
      categoryId,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={description}
        name="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        value={amount}
        name="amount"
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        value={date}
        name="date"
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <select
        value={categoryId}
        name="categoryId"
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button type="submit">Create</button>
      {error}
    </form>
  );
};

export default NewExpense;
