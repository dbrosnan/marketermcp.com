export type ToolVisibility = "public" | "beta" | "private";

export interface ToolDescriptor {
  namespace: string;
  name: string;
  version: string;
  description: string;
  visibility: ToolVisibility;
  authRequired: boolean;
  tags: string[];
}

export interface HubDiscoveryResponse {
  hub: {
    name: string;
    version: string;
    environment: string;
  };
  tools: ToolDescriptor[];
}

export interface BudgetBuddyInput {
  monthlyBudget: number;
  channels: Array<{
    name: string;
    spend: number;
  }>;
}

export interface BudgetBuddyOutput {
  totalSpend: number;
  remaining: number;
  overBudget: boolean;
}
