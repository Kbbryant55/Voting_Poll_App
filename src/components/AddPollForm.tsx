import React, { useState } from "react";
import CustomInput from "./CustomInput";
import PollFormOption from "./PollFormOption";
import { uid } from "uid";
import { createPoll } from "../reducers/PollSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";

const AddPollForm = () => {
  const [topicSubmitted, setTopicSubmitted] = useState("");
  const [pollOptions, setPollOptions] = useState<string[]>([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleTopicSubmit = (text: string) => {
    setTopicSubmitted(text);
  };

  const handleAddOption = (text: string) => {
    if (text == "") {
      setError(`Please enter in a value.`);
    } else if (pollOptions.includes(text)) {
      setError(
        `"${text}" is already an option. Please enter in a different value.`
      );
    } else {
      setPollOptions([...pollOptions, text]);
      setError("");
    }
  };

  const handleOnDelete = (text: string) => {
    setPollOptions(pollOptions.filter((target) => target !== text));
  };

  const handleNewPollSubmit = () => {
    if (pollOptions.length < 2) {
      setError("Poll must contain 2 or more values!");
    } else {
      setError("");

      // creating a new object and setting the votes to 0
      const options = pollOptions.map((pollOption) => {
        return {
          pollOption,
          votes: 0,
        };
      });
      const newPoll = { id: uid(), question: topicSubmitted, options };
      dispatch(createPoll(newPoll));
      navigate("/");
    }
  };

  return (
    <div className="w-2/3 min-h-[12rem] bg-[#ffffff] pt-10 rounded-[1rem] shadow-2xl ">
      {!topicSubmitted ? (
        <CustomInput
          label={"What topic are we voting on?"}
          onSubmit={handleTopicSubmit}
        />
      ) : (
        <div>
          <div>{topicSubmitted}</div>
          <CustomInput label={"Add an option!"} onSubmit={handleAddOption} />
          {error && <div className="text-base text-[#BF1213]">{error}</div>}
          {pollOptions?.map((option, index) => {
            return (
              <PollFormOption
                key={`${option}-${index}`}
                option={option}
                onDelete={handleOnDelete}
              />
            );
          })}
        </div>
      )}

      <div className="justify-center h-[3rem] my-5">
        <button
          onClick={handleNewPollSubmit}
          className="w-1/6 h-full bg-[#BF1213] hover:bg-[#de4343]  text-white py-3 rounded-lg text-base"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPollForm;
