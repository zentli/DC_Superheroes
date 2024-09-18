import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Superhero } from '../types';
import { RootState } from './store';

export const fetchSuperheroes = createAsyncThunk<Superhero[], void, { state: RootState }>(
  'superheroes/fetchSuperheroes',
  async () => {
    const response = await fetch('https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes');
    const data: Superhero[] = await response.json();
    return data;
  }
);

interface SuperheroesState {
  superheroes: Superhero[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SuperheroesState = {
  superheroes: [],
  status: 'idle',
  error: null,
};

const superheroesSlice = createSlice({
  name: 'superheroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuperheroes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSuperheroes.fulfilled, (state, action: PayloadAction<Superhero[]>) => {
        state.status = 'succeeded';
        state.superheroes = action.payload;
      })
      .addCase(fetchSuperheroes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch superheroes';
      });
  },
});

export default superheroesSlice.reducer;