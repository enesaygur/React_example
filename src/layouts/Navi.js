import React from "react";
import { BsFillSunFill, BsMoon, BsGithub } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "semantic-ui-react";
import {setDarkMode} from "../stores/slices/theme"
export default function Navi() {
  const {darkMode} =useSelector((state)=>state.theme)
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: "inherit", zIndex: "100" }}>
      <Menu
        style={{
          backgroundColor: "transparent",
          border: "none",
          zIndex: "100",
          position: "fixed",
          boxShadow: "none",
          height: "3.5rem",
          width: "100%",
          backdropFilter: "blur(3px)",
        }}
        size="large"
      >
        <Menu.Menu
          position="right"
          style={{
            paddingLeft: "18%",
            margin: "auto",
            width: "100%",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            fontWeight: 700,
          }}
        >
          <h2
            style={{
              color: "rgba(20, 184, 166)",
            }}
          >
            React IMDB
          </h2>
        </Menu.Menu>
        <Menu.Menu
          position="right"
          style={{
            margin: "auto",
            width: "100%",
            paddingLeft: "12%",
            paddingright: "auto",
          }}
        >
          <span
            style={{
              marginRight: "2rem",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <img
              height={15}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            ></img>
          </span>
          <span style={{ marginRight: "3rem" }}>
            <BsGithub size={"2.2rem"} style={{ color: "white" }} />
          </span>
          <span style={{ marginRight: "2rem" }}>
            {!darkMode ? (
              <BsFillSunFill
                size={"2em"}
                style={{ color: "yellow" }}
                onClick={() => dispatch(setDarkMode())}
              />
            ) : (
              <BsMoon
                size={"2em"}
                style={{ color: "lightBlue" }}
                onClick={() => dispatch(setDarkMode())}
              />
            )}
          </span>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
