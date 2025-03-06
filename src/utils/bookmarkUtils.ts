import { BookmarkFolder } from '@/store/store';
import { BookmarkCafe } from '@/types/types';

export const createNewFolder = (
  bookmarkFolders: BookmarkFolder[],
  folderName: string
): BookmarkFolder[] => {
  return [
    ...bookmarkFolders,
    {
      id: crypto.randomUUID(),
      folderName,
      cafes: [],
    },
  ];
};

export const deleteFolderById = (
  bookmarkFolders: BookmarkFolder[],
  folderId: string | null
): BookmarkFolder[] => {
  return bookmarkFolders.filter((folder) => folder.id !== folderId);
};

export const toggleCafeBookmark = (
  bookmarkFolders: BookmarkFolder[],
  folderId: string,
  selectedCafe: BookmarkCafe
): BookmarkFolder[] => {
  return bookmarkFolders.map((folder) => {
    if (folder.id !== folderId) return folder;

    const isAlreadyBookmarked = folder.cafes.some((cafe) => cafe.id === selectedCafe.id);

    if (isAlreadyBookmarked) {
      return {
        ...folder,
        cafes: folder.cafes.map((cafe) =>
          cafe.id === selectedCafe.id ? { ...cafe, isBookmarked: !cafe.isBookmarked } : cafe
        ),
      };
    } else {
      return {
        ...folder,
        cafes: [...folder.cafes, { ...selectedCafe, isBookmarked: true }],
      };
    }
  });
};

export const checkBookmarkAllCafes = (
  bookmarkFolders: BookmarkFolder[],
  folderId: string
): BookmarkFolder[] => {
  return bookmarkFolders.map((folder) => {
    if (folder.id !== folderId) return folder;

    return {
      ...folder,
      cafes: folder.cafes.map((cafe) => ({ ...cafe, isBookmarked: false })),
    };
  });
};

export const updatedBookmark = (bookmarkFolders: BookmarkFolder[]): BookmarkFolder[] => {
  return bookmarkFolders.map((folder) => ({
    ...folder,
    cafes: folder.cafes.filter((cafe) => cafe.isBookmarked),
  }));
};
