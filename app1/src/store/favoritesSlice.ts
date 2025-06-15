import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

interface FavoritesState {
  favorites: Photo[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Photo>) => {
      const index = state.favorites.findIndex(fav => fav.id === action.payload.id);
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer; 