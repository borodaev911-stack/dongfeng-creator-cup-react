export const calculateFund = views => Math.min(1000000, Math.floor(Math.max(0, views) / 1000000) * 100000);
