import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 1️⃣ FETCH PLAYERS (Obtener jugadores)
export const fetchPlayers = createAsyncThunk("players/fetchPlayers", async () => {
  const response = await axios.get(`http://localhost:3001/players`);
  return response.data;
});

// 🔹 2️⃣ CREATE PLAYER (Crear nuevo jugador)
export const crearPlayer = createAsyncThunk("players/crearPlayer", async ({ name, color, points }) => {
  const response = await axios.post(`http://localhost:3001/players`, { name, color, points });
  return response.data;
});

// 🔹 3️⃣ UPDATE PLAYER (Actualizar jugador)
export const updatePlayers = createAsyncThunk("players/updatePlayers", async ({ id, points }) => {
  const response = await axios.put(`http://localhost:3001/players`, { id, points });
  return response.data;
});

const playersSlice = createSlice({
  name: "players",
  initialState: {
    allPlayers: [], // 🔹 No cargamos desde localStorage aquí
    createPlayerStatus: "idle",
    updateStatus: "idle", // Nuevo estado para evitar conflictos
    status: "idle",
    error: null,
    successMessage: null, // Mensaje de éxito para mostrar en la UI
  },
  reducers: {
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🚀 FETCH PLAYERS
      .addCase(fetchPlayers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPlayers = action.payload;
        localStorage.setItem("players", JSON.stringify(state.allPlayers)); // Guardamos en cache
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // 🚀 CREATE PLAYER
      .addCase(crearPlayer.pending, (state) => {
        state.createPlayerStatus = "loading";
      })
      .addCase(crearPlayer.fulfilled, (state, action) => {
        state.createPlayerStatus = "succeeded";
        state.allPlayers.push(action.payload);
        localStorage.setItem("players", JSON.stringify(state.allPlayers));
        state.successMessage = "Jugador creado con éxito"; // Guardamos el mensaje para la UI
      })
      .addCase(crearPlayer.rejected, (state, action) => {
        state.createPlayerStatus = "failed";
        state.error = action.error.message;
      })

      // 🚀 UPDATE PLAYER
      .addCase(updatePlayers.pending, (state) => {
        state.updateStatus = "loading";
      })

      .addCase(updatePlayers.fulfilled, (state, action) => {
        state.updateStatus = "succeeded";
        const updatedPlayer = action.payload;
        state.allPlayers = state.allPlayers.map((player) =>
          player.id === updatedPlayer.id ? updatedPlayer : player
        );
        localStorage.setItem("players", JSON.stringify(state.allPlayers));
        state.successMessage = "Jugador actualizado con éxito";
      })
      .addCase(updatePlayers.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearSuccessMessage } = playersSlice.actions;
export default playersSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchPlayers = createAsyncThunk("players/fetchPlayers", async () => {
//   const response = await axios.get(`http://localhost:3001/players`);
//   return response.data;
// });

// export const crearPlayer = createAsyncThunk("players/crearPlayer", async ({ name, color, points }) => {
//   const response = await axios.post(`http://localhost:3001/players`, { name, color, points });
//   return response.data;
// });

// export const updatePlayers = createAsyncThunk("players/updatePlayers", async ({ id, points }) => {
//   const response = await axios.put(`http://localhost:3001/players/${id}`, { points });
//   return response.data;
// });

// // Manejo de localStorage seguro
// let storedPlayers = [];
// try {
//   storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
// } catch (error) {
//   console.error("Error parsing players from localStorage:", error);
// }

// const playersSlice = createSlice({
//   name: "players",
//   initialState: {
//     allPlayers: storedPlayers,
//     createPlayerStatus: "idle",
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPlayers.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPlayers.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.allPlayers = action.payload;
//         localStorage.setItem("players", JSON.stringify(state.allPlayers));
//       })
//       .addCase(fetchPlayers.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })

//       .addCase(updatePlayers.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(updatePlayers.fulfilled, (state, action) => {
//         const updatedPlayer = action.payload;
//         state.allPlayers = state.allPlayers.map((player) =>
//           player.id === updatedPlayer.id ? updatedPlayer : player
//         );
//         localStorage.setItem("players", JSON.stringify(state.allPlayers));
//         state.status = "succeeded";
//       })
//       .addCase(updatePlayers.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })

//       .addCase(crearPlayer.pending, (state) => {
//         state.createPlayerStatus = "loading";
//       })
//       .addCase(crearPlayer.fulfilled, (state, action) => {
//         state.createPlayerStatus = "succeeded";
//         state.allPlayers.push(action.payload);
//         localStorage.setItem("players", JSON.stringify(state.allPlayers));
//         alert("Jugador creado con éxito");
//       })
//       .addCase(crearPlayer.rejected, (state, action) => {
//         state.createPlayerStatus = "failed";
//         state.error = action.error.message;
//         alert("Error al crear el jugador.");
//       });
//   },
// });

// export default playersSlice.reducer;



///viejo




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchPlayers = createAsyncThunk(
//   "players/fetchPlayers",
//   async () => {
//     const response = await axios.get(`http://localhost:3001/players`);
//     return response.data;
//   }
// );

// export const crearPlayer = createAsyncThunk(
//   "players/crearPlayer",
//   async ({ name, color, points }) => {
//     const response = await axios.post(
//       `http://localhost:3001/players`,
//       { name, color, points }
//     );
//     return response.data;
//   }
// );

// export const updatePlayers = createAsyncThunk(
//   "players/updatePlayers",
//   async ({ id, points }) => {
//     const response = await axios.put(`http://localhost:3001/players`, { id, points });
//     return response.data;
//   }
// );

// const playersSlice = createSlice({
//   name: "players",
//   initialState: {
//     allPlayers: [],
//     createPlayerStatus: "idle",
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPlayers.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPlayers.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.allPlayers = action.payload;

//       })
//       .addCase(fetchPlayers.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })

//       .addCase(updatePlayers.fulfilled, (state, action) => {
//         // Actualizar el estado con el nuevo jugador actualizado
//         const updatedPlayer = action.payload;
//         state.allPlayers = state.allPlayers.map((player) =>
//           player.id === updatedPlayer.id ? updatedPlayer : player
//         );
//       })
//       .addCase(updatePlayers.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
//       .addCase(crearPlayer.pending, (state) => {
//         state.createPlayerStatus = "loading";
//       })
//       .addCase(crearPlayer.fulfilled, (state, action) => {
//         state.createPlayerStatus = "succeeded";
//         state.allPlayers = action.payload;

//         alert("Jugador creado con éxito");
//       })
//       .addCase(crearPlayer.rejected, (state, action) => {
//         state.createPlayerStatus = "failed";
//         state.error = action.error.message;
//         alert("Player create error. Slice");
//       })

//   },
// });

// export default playersSlice.reducer;


// // export const fetchReservasById = createAsyncThunk(
// //   "reservas/fetchReservasById",
// //   async (id) => {
// //     const response = await axios.get(`https://elrocio-back-production.up.railway.app/reservas/${id}`
// //     );
// //     return response.data;
// //   }
// // );


