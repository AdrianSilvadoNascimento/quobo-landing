export interface PlanFeatureLimits {
  product_limits: {
    max_products: number;
    unlimited: boolean;
  };
  user_limits: {
    max_users: number;
    unlimited: boolean;
  };
  // ... other nested features if needed
}

export interface Plan {
  id: string;
  name: string;
  tier: string;
  billing_period: 'MONTHLY' | 'SEMI_ANNUAL' | 'ANNUAL';
  interval: number;
  value: number; // In cents
  description: string;
  currency: string;
  feature_list: string[];
  features?: PlanFeatureLimits;
  status: string;
}

export enum Period {
  MONTHLY = 1,
  SEMI_ANNUAL = 6,
  ANNUAL = 12
}