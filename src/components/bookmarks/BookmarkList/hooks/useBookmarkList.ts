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
  const savedBookmarks = localStorage.getItem('bookmarkList');
  if (savedBookmarks) {
    return JSON.parse(savedBookmarks);
  }
  return [
    {
      id: 'bookmark-1',
      listName: '기본 폴더',
    },
  ];
};

export const useBookmarkList = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType[]>(getInitialBookmarkList);

  useEffect(() => {
    localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
  }, [bookmarkList]);

  const addBookmarkList = (listName: string) => {
    setBookmarkList((prev) => {
      const updatedList = [
        ...prev,
        {
          id: `bookmark-${Date.now()}`,
          listName,
        },
      ];
      return updatedList;
    });
  };

  const deleteBookmarkList = (id: string) => {
    const updatedList = bookmarkList.filter((item) => item.id !== id);
    setBookmarkList(updatedList);
  };

  return { bookmarkList, addBookmarkList, deleteBookmarkList, setBookmarkList };
};