import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlayers = createAsyncThunk(
  "players/fetchPlayers",
  async () => {
    const response = await axios.get(`http://localhost:3001/players`);
    return response.data;
  }
);

export const crearPlayer = createAsyncThunk(
  "players/crearPlayer",
  async ({ name, color, points }) => {
    const response = await axios.post(
      `http://localhost:3001/players`,
      { name, color, points }
    );
    return response.data;
  }
);

export const updatePlayers = createAsyncThunk(
  "players/updatePlayers",
  async ({ id, points }) => {
    const response = await axios.put(`http://localhost:3001/players`, { id, points });
    return response.data;
  }
);

const playersSlice = createSlice({
  name: "players",
  initialState: {
    allPlayers: [],
    createPlayerStatus: "idle",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPlayers = action.payload;

      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updatePlayers.fulfilled, (state, action) => {
        // Actualizar el estado con el nuevo jugador actualizado
        const updatedPlayer = action.payload;
        state.allPlayers = state.allPlayers.map((player) =>
          player.id === updatedPlayer.id ? updatedPlayer : player
        );
      })
      .addCase(updatePlayers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(crearPlayer.pending, (state) => {
        state.createPlayerStatus = "loading";
      })
      .addCase(crearPlayer.fulfilled, (state, action) => {
        state.createPlayerStatus = "succeeded";
        state.allPlayers = action.payload;

        alert("Jugador creado con éxito");
      })
      .addCase(crearPlayer.rejected, (state, action) => {
        state.createPlayerStatus = "failed";
        state.error = action.error.message;
        alert("Player create error. Slice");
      })

  },
});

export default playersSlice.reducer;


// export const fetchReservasById = createAsyncThunk(
//   "reservas/fetchReservasById",
//   async (id) => {
//     const response = await axios.get(`https://elrocio-back-production.up.railway.app/reservas/${id}`
//     );
//     return response.data;
//   }
// );


