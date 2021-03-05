import React from "react";
import "./tourney.scss";
import { ReactComponent as TwitchGlitch } from "../../assets/TwitchGlitchPurple.svg";
import { ReactComponent as CommsIcon } from "../../assets/comms.svg";
import { ReactComponent as TrophyIcon } from "../../assets/trophy.svg";

function NMG2021Theme(props) {
  const { racers, comms } = props.config;
  return (
    <div className="App">
      <main>
        <section>
          {racers.map((racer) => (
            <div>
              <div
                id={racer.position + "-racer-container"}
                key={racer.position}
              >
                <div className="racer-nameplate">
                  <TwitchGlitch
                    className="text-icon"
                    style={{ paddingRight: 5 }}
                  />{" "}
                  <span className="racer-name">
                    {racer.name} ({racer.seed})
                  </span>
                  <span className="racer-pronouns">
                    {racer.pronouns.toUpperCase()}{" "}
                  </span>
                </div>
                <div className="racer-stats">
                  PB: <strong>{racer.currentPB}</strong> | Record:{" "}
                  <strong>{racer.record}</strong>
                </div>
              </div>
              {racer.finalTime && (
                <div
                  id={racer.position + "-racer-final-time"}
                  className="racer-time"
                >
                  Final Time: <strong>{racer.finalTime}</strong>
                </div>
              )}
              {racer.winner && (
                <div
                  id={racer.position + "-racer-winner-indicator"}
                  className="racer-winner"
                >
                  <TrophyIcon
                    className="text-icon"
                    style={{ paddingRight: 10 }}
                  />{" "}
                  <strong>WINNER!</strong>
                </div>
              )}
            </div>
          ))}
        </section>

        {comms.length > 0 && (
          <section id="comms">
            <CommsIcon className="text-icon" />
            <div className="comm-names">
              {comms.map((comm) => comm.name).join(", ")}
            </div>
          </section>
        )}
      </main>

      <footer>
        <small>Presented by ForeverGrind.fm</small>
      </footer>
    </div>
  );
}

export default NMG2021Theme;
