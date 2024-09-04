import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { Expense } from "../types";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

type ExpensePieChartProps = {
  expenses: Expense[];
};

const ExpensePieChart = ({ expenses }: ExpensePieChartProps) => {
  if (!expenses.length) return null;

  const expensesByCategory = expenses.reduce((acc, item) => {
    return {
      ...acc,
      [item.category.id]: {
        total: acc[item.category.id]
          ? acc[item.category.id].total + +item.amount
          : +item.amount,
        item,
      },
    };
  }, {} as Record<string, { total: number; item: Expense }>);

  const data = Object.keys(expensesByCategory).map((categoryId) => ({
    name: expensesByCategory[categoryId].item.category.name,
    value: expensesByCategory[categoryId].total,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ExpensePieChart;
