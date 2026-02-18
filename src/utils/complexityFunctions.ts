import type { ComplexityType } from "../types/ComplexityType";

export const complexityMap: Record<
  ComplexityType,
  (n: number) => number
> = {
  'O(1)': (_n: number) => 1,
  'O(log n)': (n: number) => Math.log2(n),
  'O(n)': (n: number) => n,
  'O(n log n)': (n: number) => n * Math.log2(n),
  'O(n²)': (n: number) => n * n,
  'O(2ⁿ)': (n: number) => Math.pow(2, n),
};
