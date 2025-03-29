import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPoints = createAsyncThunk("points/fetchPoints", async () => {
  const response = await axios.get(`http://localhost:3001/points`);
  return response.data;
});

export const crearPoints = createAsyncThunk("points/crearPoints", async ({ id_round, id_player, points, totalpoints }) => {
  const response = await axios.post(`http://localhost:3001/points`, { id_round, id_player, points, totalpoints });
  return response.data;
});

// Manejo seguro de localStorage
let storedPoints = [];
try {
  storedPoints = JSON.parse(localStorage.getItem("points")) || [];
} catch (error) {
  console.error("Error parsing points from localStorage:", error);
}

const pointSlice = createSlice({
  name: "points",
  initialState: {
    allPoints: storedPoints,
    createPointStatus: "idle",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoints.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPoints.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPoints = action.payload;
        localStorage.setItem("points", JSON.stringify(state.allPoints));
      })
      .addCase(fetchPoints.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(crearPoints.pending, (state) => {
        state.createPointStatus = "loading";
      })
      .addCase(crearPoints.fulfilled, (state, action) => {
        state.createPointStatus = "succeeded";
        state.allPoints.push(action.payload); // Agrega en lugar de reemplazar
        localStorage.setItem("points", JSON.stringify(state.allPoints));
        alert("Punto creado con éxito");
      })
      .addCase(crearPoints.rejected, (state, action) => {
        state.createPointStatus = "failed";
        state.error = action.error.message;
        alert("Error al crear el punto.");
      });
  },
});

export default pointSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchPoints = createAsyncThunk(
//   "points/fetchPoints",
//   async () => {
//     const response = await axios.get(`http://localhost:3001/points`);
//     return response.data;
//   }
// );

// export const crearPoints = createAsyncThunk(
//   "points/crearPoints",
//   async ({ id_round, id_player, points, totalpoints }) => {
//     const response = await axios.post(
//       `http://localhost:3001/points`, { id_round, id_player, points, totalpoints }
//     );
//     return response.data;
//   }
// );

// const pointSlice = createSlice({
//   name: "points",
//   initialState: {
//     allPoints: [],
//     createPointStatus: "idle",
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPoints.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPoints.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.allPoints = action.payload;

//       })
//       .addCase(fetchPoints.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(crearPoints.pending, (state) => {
//         state.createPointStatus = "loading";
//       })
//       .addCase(crearPoints.fulfilled, (state, action) => {
//         state.createPointStatus = "succeeded";
//         state.allPoints = action.payload;

//         alert("Point creado con éxito");
//       })
//       .addCase(crearPoints.rejected, (state, action) => {
//         state.createPointStatus = "failed";
//         state.error = action.error.message;
//         alert("Points create error. Slice");
//       })


//   },
// });

// export default pointSlice.reducer;

