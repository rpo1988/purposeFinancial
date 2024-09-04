import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpensePieChart from "./components/ExpensePieChart";
import NewExpense, { NewItem } from "./components/NewExpense";
import { categories } from "./data";
import { Expense } from "./types";

function App() {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleSubmit = (newItem: NewItem) => {
    setShowNewExpense(false);
    setExpenses((previous) => [
      ...previous,
      {
        ...newItem,
        id: Date.now().toString(),
        category: categories.find((item) => item.id === newItem.categoryId)!,
      },
    ]);
  };

  const handleNewClick = () => {
    setShowNewExpense(true);
  };

  return (
    <div>
      <button onClick={handleNewClick}>Create an expense</button>
      <ExpenseList expenses={expenses} />
      {!!expenses && <ExpensePieChart expenses={expenses} />}
      {showNewExpense && <NewExpense onSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
