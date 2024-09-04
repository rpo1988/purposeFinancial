export interface Category {
  id: string;
  name: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: string;
  date: string;
  category: Category;
}
