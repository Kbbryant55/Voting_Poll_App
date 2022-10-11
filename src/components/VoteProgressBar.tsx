import React from "react";
import { Option } from "./PollTileCard";

interface ProgressBar {
  progress: number;
  option: Option;
  selected: any;
}

const VoteProgressBar = ({ progress, option, selected }: ProgressBar) => {
  return (
    <div
      className={`w-full h-full rounded-xl m-50 relative ${
        selected ? "border-[#4f8cab] border-4" : ""
      }`}
    >
      <div className="text-black z-10 pt-12 pl-5 absolute break-all">
        {option.pollOption} ({option.votes}) - {progress}%
      </div>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "#d3dae8",
          borderRadius: 10,
          textAlign: "right",
        }}
      ></div>
    </div>
  );
};

export default VoteProgressBar;
