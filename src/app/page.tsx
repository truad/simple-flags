import { allowExpensiveAI } from "@/flags";

export default async function Home() {
  const expensiveAI = await allowExpensiveAI();

  return (
    <main className="p-5">
      <div>Searchs will use: {expensiveAI ? "Expensive AI" : "Cheap AI"}</div>
    </main>
  );
}
