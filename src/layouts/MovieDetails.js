import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCast from "./DetailCast";
import DetailInfo from "./DetailInfo";
import "../App.css";
import TMDB from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../stores/slices/details";

export default function MovieDetails() {
  const { details } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  let { movieType, id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await TMDB.getTitle(movieType, id);
      if (data) {
        dispatch(setDetails(data));
      }
    };

    getData();
  }, []);
  return (
    <div>
      {details && (
        <>
          <div
            style={{
              backgroundColor: "inherit",
              height: "3.5rem",
            }}
          ></div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "inherit",
              minHeight: "42.5rem",
              maxWidth: "100%",
              backgroundImage: `url(${details.backdrop_path})`,
              backgroundImageRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              alignContent: "center",
            }}
          >
            <DetailInfo />
          </div>
          <div>
            <DetailCast />
          </div>
        </>
      )}
    </div>
  );
}
