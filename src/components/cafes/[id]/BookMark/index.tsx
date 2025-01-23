'use client';

import { useState, useEffect } from 'react';
import Bookmark from '@/assets/Icon/Bookmark.svg';
import { bookMark } from './BookMark.css';

interface BookMarkProps {
  cafeIdForBookMark: string;
}

export default function BookMark({ cafeIdForBookMark }: BookMarkProps) {
  const [bookMarks, setBookMarks] = useState<string[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookMarkList');
    if (savedBookmarks) {
      setBookMarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const BookMarkChecked = (id: string) => {
    const updatedBookMarks = bookMarks.includes(id)
      ? bookMarks.filter((bookMark) => bookMark !== id)
      : [...bookMarks, id];

    setBookMarks(updatedBookMarks);
    localStorage.setItem('bookMarkList', JSON.stringify(updatedBookMarks));
  };

  const isCurrentCafeBookmarked = bookMarks.includes(cafeIdForBookMark);

  return (
    <Bookmark 
      className={bookMark} 
      onClick={() => BookMarkChecked(cafeIdForBookMark)}
      fill={isCurrentCafeBookmarked ? '#11111' : 'none'}
    />
  );
}