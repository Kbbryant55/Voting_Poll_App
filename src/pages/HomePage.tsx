import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/Header";
import PollTileCard from "../components/PollTileCard";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import NoPollsAvailable from "../components/NoPollsAvailable";
import { PollType } from "../components/PollTileCard";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { retrievePolls } from "../reducers/PollSlice";

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const polls = useSelector((state: RootState) => state.polls.polls);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(retrievePolls());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App-container">
        {polls.length > 0 ? (
          polls.map((poll: PollType) => {
            // This extra check is only when adding new polls to the database
            if (poll) {
              return <PollTileCard key={poll?._id} {...poll} />;
            }
          })
        ) : (
          <NoPollsAvailable />
        )}
      </div>
    </div>
  );
};

export default HomePage;
