import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
export default function Dashboard() {
  return (
    <div style={{backgroundColor:"inherit"}}>
      <Routes>
        <Route exact path="/" element={<MovieList/>} />
        <Route exact path="/detail/:movieType/:id" element={<MovieDetails />}/>
      </Routes>
    </div>
  );
}
