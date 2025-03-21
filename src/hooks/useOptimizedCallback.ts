import { useCallback, useMemo, DependencyList } from 'react';

export function useOptimizedCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: DependencyList
): T {
  return useCallback(callback, deps);
}

export function useOptimizedValue<T>(factory: () => T, deps: DependencyList): T {
  return useMemo(factory, deps);
}

export function useOptimizedMemo<T>(value: T, deps: DependencyList): T {
  return useMemo(() => value, deps);
} 