import type { BudgetBuddyInput, BudgetBuddyOutput, ToolDescriptor } from "@marketermcp/mcp-schemas";

export const budgetBuddyDescriptor: ToolDescriptor = {
  namespace: "budget_buddy",
  name: "budget_buddy.plan_overview",
  version: "0.1.0",
  description: "Summarize marketing channel spend against a monthly budget.",
  visibility: "beta",
  authRequired: true,
  tags: ["budgeting", "marketing-ops", "finance"]
};

export function runBudgetBuddy(input: BudgetBuddyInput): BudgetBuddyOutput {
  const totalSpend = input.channels.reduce((sum, channel) => sum + channel.spend, 0);
  const remaining = Number((input.monthlyBudget - totalSpend).toFixed(2));

  return {
    totalSpend: Number(totalSpend.toFixed(2)),
    remaining,
    overBudget: remaining < 0
  };
}
