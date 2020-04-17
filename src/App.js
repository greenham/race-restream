import React from "react";
import "./App.scss";
import { race, racers, comms } from "./config";
import { ReactComponent as TwitchGlitch } from "./TwitchGlitchWhite.svg";
import { ReactComponent as CommsIcon } from "./comms.svg";

const raceStyle = racers.length > 2 ? "grid" : "headsup";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="race-title">{race.title}</h2>
        <h3 className="race-subtitle">{race.subtitle}</h3>
      </header>

      <main>
        <section id={raceStyle}>
          <div className="container">
            {racers.map((racer) => (
              <div className="racer-container">
                <div className="game-feed"></div>
                <div className="racer-nameplate">
                  <TwitchGlitch
                    className="text-icon"
                    style={{ paddingRight: 5 }}
                  />{" "}
                  <span className="racer-name">{racer.name.toUpperCase()}</span>
                </div>
                <div className="racer-final-time">{racer.finalTime}</div>
              </div>
            ))}
          </div>
        </section>

        {comms.length > 0 && (
          <section id={"comms-" + raceStyle}>
            <CommsIcon className="text-icon" />
            {comms.map((comm) => (
              <div className="comm-name">{comm.name}</div>
            ))}
          </section>
        )}
      </main>

      <footer>
        <small>Presented by ForeverGrind.fm</small>
      </footer>
    </div>
  );
}

export default App;
