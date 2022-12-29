import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "../App.css";
import TMDB from "../services/api";
import { setCastDetails } from "../stores/slices/castActor";

export default function DetailCast() {
  const { castDetails } = useSelector((state) => state.castActor);
  const dispatch = useDispatch();

  let { movieType, id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const actorData = await TMDB.getActors(movieType, id);
      if (actorData) {
        dispatch(setCastDetails(actorData));
      }
    };

    getCast();
  }, []);
  console.log(castDetails);
  return (
    <div>
      <div
        style={{
          height: "100%",
          width: "68rem",
          marginLeft: "17%",
          marginRight: "17%",
          paddingBottom: ".5rem",
        }}
      >
        <h2
          style={{
            width: "100%",
            color: "rgba(74, 74, 74)",
            fontSize: "2.25rem",
            lineHeight: "2.25rem",
            fontWeight: "lighter",
            padding: "1rem",
            paddingBottom: "1.5rem",
            paddingTop: "2rem",
            fontFamily: "Montserrat",
          }}
        >
          Cast
        </h2>
        <div
          style={{
            backgroundColor: "inherit",
          }}
        >
          {castDetails &&
            castDetails.map((item) => {
              return (
                <div className="CastOutDiv" key={item.id}>
                  <div className="CastInsideDiv">
                    <img
                      src={
                        item.profile_path != null
                          ? item.profile_path
                          : "https://via.placeholder.com/300?text=No Image"
                      }
                    ></img>
                    <h4>{item.original_name}<br/>({item.character})</h4>
                  </div>  
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
