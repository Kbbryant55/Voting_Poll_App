import React, { useState, useEffect } from "react";
import VoteProgressBar from "./VoteProgressBar";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { updatePoll } from "../reducers/PollSlice";

export interface PollType {
  _id?: string;
  id: string;
  question: string;
  options: Array<Option>;
}

export interface Option {
  pollOption: string;
  votes: number;
}

const PollTileCard = ({ question, options, id, _id }: PollType) => {
  const [selected, setSelected] = useState(-1); //index can be 0 so I chose -1
  const [voted, setVoted] = useState(false);
  const [totalVotes, setTotalVotes] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const handleSelection = (index: number) => {
    // can only vote once

    if (voted !== true) {
      const updatedOptions = [...options];

      updatedOptions[index] = {
        ...updatedOptions[index],
        votes: updatedOptions[index].votes + 1,
      };

      dispatch(
        updatePoll({
          _id: _id || "",
          poll: { id, question, options: updatedOptions },
        })
      );
      setSelected(index);
      setVoted(true);
    }
  };

  const calculateVotes = () => {
    let totalVotes = 0;
    options.forEach((option) => (totalVotes = option.votes + totalVotes));
    return totalVotes;
  };

  const calculatePercantage = (partialValue: number, totalValue: number) => {
    if (totalValue !== 0) {
      const exactNumber = (100 * partialValue) / totalValue;
      return Math.round((exactNumber + Number.EPSILON) * 100) / 100;
    } else return 0;
  };

  useEffect(() => {
    setTotalVotes(calculateVotes());
  }, [voted]);

  useEffect(() => {
    setTotalVotes(calculateVotes());
  }, [options]);

  return (
    <div className="w-2/3 bg-[#ffffff] mt-20 rounded-[2.4rem] shadow-2xl">
      <div className=" text-slate-900">{question}</div>
      <div className="py-10">
        {options?.map((option, index) => {
          return (
            <div key={`${option.pollOption}-${id}`} className="mx-10">
              <button
                onClick={() => handleSelection(index)}
                className="w-full h-40 flex flex-row rounded-xl border-2 border-neutral-400 hover:bg-[#EEEFF0] items-center justify-center"
              >
                {!voted ? (
                  <div className="text-slate-600">{option.pollOption}</div>
                ) : (
                  <VoteProgressBar
                    progress={calculatePercantage(option.votes, totalVotes)}
                    option={option}
                    selected={selected === index}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PollTileCard;
