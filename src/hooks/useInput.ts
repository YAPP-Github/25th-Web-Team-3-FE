'use client';

import { useCallback, useState } from 'react';

interface UseInputReturn {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetInput: () => void;
  input: string;
  error: string;
}

export const useInput = (intialInput: string, maxLength: number): UseInputReturn => {
  const [input, setInput] = useState<string>(intialInput);
  const [error, setError] = useState<string>('');

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length > maxLength) {
        setError(`북마크 제목은 최대 ${maxLength}자까지 입력할 수 있어요.`);
      } else {
        setError('');
        setInput(value);
      }
    },
    [maxLength]
  );

  const resetInput = useCallback(() => {
    setInput('');
  }, []);

  return { handleOnChange, resetInput, input, error };
};
