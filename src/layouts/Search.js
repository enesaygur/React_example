import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";
export default function Search() {
  const { darkMode } = useSelector((state) => state.theme);
  const { data } = useSelector((state) => state.data);
  
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "inherit",
      }}
    >
      <div
        style={{
          marginLeft: "19rem",
          marginRight: "19rem",
          fontFamily: "inherit",
          padding: ".5rem",
          paddingTop: "2rem",
          backgroundColor: "inherit",
        }}
      >
        <Input
          fluid
          icon="search"
          placeholder="Search Movie..."
          className={darkMode ? "inputRadiusDark" : "inputRadius"}
        />  
      </div>
      <div
        style={{
          height: "100%",
          backgroundColor: "inherit",
          paddingLeft: "19rem",
          paddingRight: "19rem",
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <h2
            style={{
              color: "rgba(74, 74, 74)",
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              paddingBottom: "1.5rem",
              paddingTop: "2rem",
              fontFamily: "Montserrat",
            }}
          >
            Popular Today
          </h2>
          {data &&
            data.map((item) => {
              return (
                <Link
                  className="itemInsideDiv"
                  to={`/detail/${item.media_type}/${item.id}`}
                  key={item.id}
                >
                  <div className="itemOutDiv">
                    <div>
                      <div className="imdbScore">{item.vote_average}</div>
                      <img src={item.poster_path}></img>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
