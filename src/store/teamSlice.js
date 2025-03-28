import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeams = createAsyncThunk(
  "teams/fetchTeams",
  async () => {
    const response = await axios.get(`http://localhost:3001/team`);
    return response.data;
  }
);
export const crearTeams = createAsyncThunk(
  "points/crearTeams",
  async ({ id_round }) => {
    const response = await axios.post(
      `http://localhost:3001/team`, { id_round }
    );
    return response.data;
  }
);
const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    allTeams: [],
    createTeamStatus: "idle",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allTeams = action.payload;

      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(crearTeams.pending, (state) => {
        state.createTeamStatus = "loading";
      })
      .addCase(crearTeams.fulfilled, (state, action) => {
        state.createTeamStatus = "succeeded";
        state.allTeams = action.payload;

        alert("Match creado con éxito");
      })
      .addCase(crearTeams.rejected, (state, action) => {
        state.createTeamStatus = "failed";
        state.error = action.error.message;
        alert("No se pudo crear Team. Slice");
      })


  },
});

export default teamsSlice.reducer;