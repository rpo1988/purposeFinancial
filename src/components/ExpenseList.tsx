import { Expense } from "../types";
import ExpenseItem from "./ExpenseItem";

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <div>
      {!expenses.length
        ? "No data yet"
        : expenses.map((item) => <ExpenseItem key={item.id} {...item} />)}
    </div>
  );
};

export default ExpenseList;
