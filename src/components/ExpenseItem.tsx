import { Expense } from "../types";

type ExpenseItemProps = Expense;

const ExpenseItem = ({
  amount,
  category,
  date,
  description,
}: ExpenseItemProps) => {
  return (
    <div>
      <div>{description}</div>
      <div>{date}</div>
      <div>{category.name}</div>
      <div>{amount}</div>
    </div>
  );
};

export default ExpenseItem;
