import { useState, useEffect } from 'react';

export interface CheckedItems {
  [key: string]: boolean;
}

export function useCheckedItems(cafeId: string) {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>
  (() => {
    const saved = localStorage.getItem(`bookmark-selection-${cafeId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(`bookmark-selection-${cafeId}`, JSON.stringify(checkedItems));
  }, [checkedItems, cafeId]);

  const onCheck = (id: string) => {
    
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  

  return { checkedItems, onCheck };
}
