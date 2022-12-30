import React, { useEffect, useState } from "react";
import Info from "./Info";
import Search from "./Search";
import "../App.css";
import TMDB from "../services/api";
import {setData} from "../stores/slices/data"
import { useDispatch, useSelector } from "react-redux";
export default function MovieList() {
  const {data}=useSelector(state=>state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await TMDB.getMoviesAndTV(1, "");
      if (res.results.lenght !== 0) {
        dispatch(setData(res.results));
      }
    }
    fetchData();
  }, []);
  return (
    <div style={{ backgroundColor: "inherit", height: "100%" }}>
      <div
        style={{
          height: "3.2rem",
        }}
      ></div>
      <Info data={data} setData={setData} />
      <Search data={data} setData={setData} />
    </div>
  );
}
