import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
export default function Info() {
  const { data } = useSelector((state) => state.data);
  console.log(data);

  return (
    <div
      style={{
        backgroundColor: "inherit",
        padding: "1rem",
        paddingTop: "20%",
        minHeight: "100%",
        maxWidth: "100%",
        backgroundImage: `url(${data[0].backdrop_path})`,
        backgroundImageRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: "54rem",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          backdropFilter: "blur(2px)",
        }}
      >
        <h2>{data[0].title} </h2>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Montserrat",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
          }}
        >
          {data[0].overview}
        </p>
      </div>
    </div>
  );
}
