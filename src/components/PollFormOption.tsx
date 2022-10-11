import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Option {
  option: string;
  onDelete: any;
}
const PollFormOption = ({ option, onDelete }: Option) => {
  return (
    <div className="flex flex-row items-center justify-between px-14">
      <div>{option}</div>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={() => onDelete(option)}
        className="pl-10 hover:text-[#de4343]"
      />
    </div>
  );
};

export default PollFormOption;
