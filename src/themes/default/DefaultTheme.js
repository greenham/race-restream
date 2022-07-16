import React from "react";
import "./default.scss";
import { ReactComponent as TwitchGlitch } from "../../assets/TwitchGlitchWhite.svg";
import { ReactComponent as CommsIcon } from "../../assets/comms.svg";

function DefaultTheme(props) {
  const { race, racers, comms } = props.config;
  const raceStyle = racers.length > 2 ? "grid" : "headsup";
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
                  <span className="racer-name">{racer.name}</span>
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

export default DefaultTheme;
