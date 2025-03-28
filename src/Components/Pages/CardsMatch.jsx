import React from "react";
import CardMatch from "./CardMatch";

const CardsMatch = ({ filteredTeams }) => {
  return (
    <div className="grid place-items-center">
      <div className="w-full max-w-[1300px]">
        {/* Mostrar los equipos con id_player1 */}
        <div className="grid grid-cols-3 gap-4 ">
          {filteredTeams.map((team) => (
            <CardMatch
              key={team.id}
              teamId={team.id}
              playerId={team.id_player1}
              playerNumber={1} // 1 para el primer jugador
            />
          ))}
        </div>
        <div class="grid justify-items-center grid-cols-3 gap-4 text-white text-extrabold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
        {/* Mostrar los equipos con id_player2 */}
        <div className="grid grid-cols-3 gap-4 ">
          {filteredTeams.map((team) => (
            <CardMatch
              key={team.id}
              teamId={team.id}
              playerId={team.id_player2}
              playerNumber={2} // 2 para el segundo jugador
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsMatch;
