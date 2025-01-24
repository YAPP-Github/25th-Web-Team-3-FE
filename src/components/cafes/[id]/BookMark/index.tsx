'use client';

import { useState, useEffect } from 'react';
import BookMarkIcon from '@/assets/Icon/Bookmark.svg';
import { bookMark } from './BookMark.css';
import { color } from '@/styles/color.css';

interface BookMarkProps {
  cafeIdForBookMark: string;
}
type CafeId = string;

export default function BookMark({ cafeIdForBookMark }: BookMarkProps) {
  const [bookMarks, setBookMarks] = useState<CafeId[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookMarkList');
    if (savedBookmarks) {
      setBookMarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const isBookMarkChecked = (id: string) => {
    const updatedBookMarks = bookMarks.includes(id)
      ? bookMarks.filter((bookMark) => bookMark !== id)
      : [...bookMarks, id];

    setBookMarks(updatedBookMarks);
    localStorage.setItem('bookMarkList', JSON.stringify(updatedBookMarks));
  };

  const isCurrentCafeBookMarked = bookMarks.includes(cafeIdForBookMark);

  return (
    <BookMarkIcon
      className={bookMark}
      onClick={() => isBookMarkChecked(cafeIdForBookMark)}
      fill={isCurrentCafeBookMarked ? color.grayScale.gray500: 'none'}
    />
  );
}
