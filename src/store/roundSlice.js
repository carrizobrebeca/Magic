import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Cargar el ID de la ronda desde localStorage (si existe)
const savedRoundId = localStorage.getItem("currentRoundId");

export const fetchRounds = createAsyncThunk(
  "rounds/fetchRounds",
  async () => {
    const response = await axios.get(`http://localhost:3001/round`);
    return response.data;
  }
);

export const crearRounds = createAsyncThunk(
  "rounds/crearRounds",
  async () => {  
    const response = await axios.post(`http://localhost:3001/round`, {});
 
    return response.data;
  }
);

const roundSlice = createSlice({
  name: "rounds",
  initialState: {
    allRounds: [],
    currentRoundId: savedRoundId ? Number(savedRoundId) : 1, // Usa el guardado o 1 por defecto
    status: "idle",
    error: null,
  },
  reducers: {
    nextRound: (state) => {
      state.currentRoundId += 1;
      localStorage.setItem("currentRoundId", state.currentRoundId); // Guardar en localStorage
    },
    resetRound: (state) => {
      state.currentRoundId = 1;
      localStorage.setItem("currentRoundId", "1");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRounds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRounds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allRounds = action.payload;
      })
      .addCase(fetchRounds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(crearRounds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(crearRounds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allRounds = action.payload;
        alert("Ronda creada con éxito");
      })
      .addCase(crearRounds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { nextRound, resetRound } = roundSlice.actions;
export default roundSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchRounds = createAsyncThunk(
//   "rounds/fetchRounds",
//   async () => {
//     const response = await axios.get(`http://localhost:3001/round`);
//     return response.data;
//   }
// );

// const roundSlice = createSlice({
//   name: "rounds",
//   initialState: {
//     allRounds: [],
//     currentRoundId: 1, // Estado para el ID de la ronda actual
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     nextRound: (state) => {
//       state.currentRoundId += 1;
//   },
// },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRounds.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchRounds.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.allRounds = action.payload;
//       })
//       .addCase(fetchRounds.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { nextRound } = roundSlice.actions;
// export default roundSlice.reducer;


