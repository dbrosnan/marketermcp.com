import type { ToolDescriptor } from "@marketermcp/mcp-schemas";
import { budgetBuddyDescriptor, runBudgetBuddy } from "@marketermcp/tools-budget-buddy";

export const publicToolRegistry: ToolDescriptor[] = [budgetBuddyDescriptor];

export function listPublicTools(): ToolDescriptor[] {
  return publicToolRegistry;
}

export function executeTool(
  toolName: string,
  payload: unknown
): { tool: string; result: unknown } {
  if (toolName === "budget_buddy.plan_overview") {
    return {
      tool: toolName,
      result: runBudgetBuddy(payload as Parameters<typeof runBudgetBuddy>[0])
    };
  }

  throw new Error(`Unknown tool: ${toolName}`);
}
