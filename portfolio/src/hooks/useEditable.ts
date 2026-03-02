import { useState, useEffect, useCallback } from 'react';

export function useEditableState<T>(key: string, defaultValue: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(`portfolio_${key}`);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(`portfolio_${key}`, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function useEditableText(key: string, defaultValue: string) {
  const [value, setValue] = useEditableState(key, defaultValue);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText.trim();
    if (text) setValue(text);
  }, [setValue]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.blur();
    }
  }, []);

  return { value, handleBlur, handleKeyDown, setValue };
}
