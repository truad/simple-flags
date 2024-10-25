import { unstable_flag as flag } from "@vercel/flags/next";

export const allowExpensiveAI = flag({
  key: "expensive-ai",
  description: "Use the expensive AI model",
  decide: async () => {
    const response = await fetch("https://9c9e-171-7-128-132.ngrok-free.app/flags.json");
    const flags = await response.json();

    return flags["expensive-ai"];
  },
  defaultValue: true,
});


export const precomputeFlags = [allowExpensiveAI] as const;