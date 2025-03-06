import { BookmarkCafe } from '@/types/types';
import {
  checkBookmarkAllCafes,
  createNewFolder,
  deleteFolderById,
  toggleCafeBookmark,
  updatedBookmark
} from '@/utils/bookmarkUtils';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface BookmarkFolder {
  id: string;
  folderName: string;
  cafes: BookmarkCafe[];
}

interface BookmarkState {
  bookmarkFolders: BookmarkFolder[];
}

interface BookmarkAction {
  createFolder: (folderName: string) => void;
  deleteFolder: (selectedFolderId: string | null) => void;
  checkBookmark: (folderId: string, selectedCafe: BookmarkCafe) => void;
  setAllUnbookmarked: (folderId: string) => void;
  saveChanges: () => void;
}

export const useBookmarkStore = create<BookmarkState & BookmarkAction>()(
  persist(
    (set) => ({
      bookmarkFolders: [
        {
          id: '1',
          folderName: '기본 폴더',
          cafes: [],
        },
      ],

      createFolder: (folderName) =>
        set((state) => ({
          bookmarkFolders: createNewFolder(state.bookmarkFolders, folderName),
        })),

      deleteFolder: (selectedFolderId) =>
        set((state) => ({
          bookmarkFolders: deleteFolderById(state.bookmarkFolders, selectedFolderId),
        })),

      checkBookmark: (folderId, selectedCafe) =>
        set((state) => ({
          bookmarkFolders: toggleCafeBookmark(state.bookmarkFolders, folderId, selectedCafe),
        })),

      setAllUnbookmarked: (folderId) =>
        set((state) => ({
          bookmarkFolders: checkBookmarkAllCafes(state.bookmarkFolders, folderId),
        })),

      saveChanges: () =>
        set((state) => {
          const updatedFolders = updatedBookmark(state.bookmarkFolders);
          localStorage.setItem('bookmark-storage', JSON.stringify(updatedFolders));
          return { bookmarkFolders: updatedFolders };
        }),
    }),
    {
      name: 'bookmark-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
