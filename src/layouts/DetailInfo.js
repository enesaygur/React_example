import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

export default function DetailInfo() {
  const { details } = useSelector((state) => state.details);
  return (
    <div>
      <div
        style={{
          Width: "64rem",
          height: "31rem",
          marginLeft: "17%",
          marginRight: "17%",
          color: "white",
          backdropFilter: "blur(12px)",
          padding: "0.5rem",
          marginTop: "2rem",
          display: "inline-flex",
          borderRadius: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div
          style={{
            width: "23rem",
            borderRadius: "1rem",
          }}
        >
          <img
            style={{
              backgroundImage: `url(${details.poster_path})`,
              width: "100%",
              height: "100%",
              borderRadius: "1rem",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border:"none",
            }}
          />
        </div>
        <div
          style={{
            width: "48rem",
            borderRadius: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontHeight: "2rem",
              fontWeight: "bolder",
              fontFamily: "Montserrat,sans-serif",
            }}
          >
            {details.name}
          </h2>
          <div
            style={{
              marginTop: "0.75rem",
            }}
          >
            {details.genres &&
              details.genres.map((genre) => {
                return (
                  <span
                    key={genre.id}
                    style={{
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      margin: "0.25rem",
                      borderRadius: "99px",
                      border: "1px solid",
                      borderColor: "rgba(222, 226, 230)",
                    }}
                  >
                    {genre.name}
                  </span>
                );
              })}
          </div>
          <div>
            <h3
              style={{
                marginTop: "0.75rem",
              }}
            >
              PLOT
            </h3>
            <div>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "1rem",
                  lineHeight: "1.25rem",
                }}
              >
                {details.overview}
              </p>
            </div>
          </div>
          <hr
            style={{
              width: "33%",
              margin: "1rem auto",
              borderWidth: "2px",
              borderColor: "rgba(115, 115, 115,.5)",
            }}
          />
          <div className="InfoDisDiv">
            <div className="InfoIcDiv">
              <h3>RELEASE DATE</h3>
              <span>{new Date(details.release_date).toDateString()}</span>
            </div>
            <div className="InfoIcDiv">
              <h3>RATING</h3>
              <span
                style={{
                  backgroundColor: "#DEE2E6",
                  color: "#181818",
                  padding: "6px",
                  width: "2rem",
                  borderRadius: "25px",
                }}
              >
                {details.vote_average}
              </span>
            </div>
            <div className="InfoIcDiv">
              <h3>HOMEPAGE</h3>
              <span style={{
                textDecoration:"wrap",
              }}>
                <a href={details.homepage}>{details.homepage}</a>
              </span>
            </div>
            <div className="InfoIcDiv">
              <h3>RUNTIME</h3>
              <span>{details.runtime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
