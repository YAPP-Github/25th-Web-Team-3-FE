import { useEffect, useState } from 'react';

export interface Cafe {
  id: string;
  name: string;
  location: string;
  mainImageUrl: string[];
}

export interface BookmarkListType {
  id: string;
  listName: string;
  cafes?: Cafe[];
}

const getInitialBookmarkList = (): BookmarkListType[] => {
  const defaultList = [
    {
      id: 'bookmark-1',
      listName: '기본 폴더',
    },
  ];
  if (typeof window === 'undefined') {
    return [];
  }
  const savedBookmarks = localStorage.getItem('bookmarkList');
  if (savedBookmarks) {
    return JSON.parse(savedBookmarks);
  }
  return defaultList;
};

export const useBookmarkList = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setBookmarkList(getInitialBookmarkList());
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
    }
  }, [bookmarkList, isMounted]);

  const addBookmarkList = (listName: string) => {
    setBookmarkList((prev) => [
      ...prev,
      {
        id: `bookmark-${Date.now()}`,
        listName,
      },
    ]);
  };

  const deleteBookmarkList = (id: string) => {
    setBookmarkList((prev) => prev.filter((item) => item.id !== id));
  };

  return { bookmarkList, addBookmarkList, deleteBookmarkList, setBookmarkList };
};