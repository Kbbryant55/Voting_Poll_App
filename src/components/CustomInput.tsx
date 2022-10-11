import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface InputType {
  label: string;
  onSubmit: any;
}

const CustomInput = ({ label, onSubmit }: InputType) => {
  const [text, setText] = useState("");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="text-slate-900 flex flex-col h-5/6">
      <div className="flex justify-start ml-20">{label}</div>
      <div className="flex w-2/3 ml-20 h-[3rem] border-2 border-slate-400 rounded-lg">
        <input
          value={text}
          type={"text"}
          className="w-5/6 pl-3 py-3 rounded-lg text-sm"
          onChange={onTextChange}
        />
        <button
          onClick={() => {
            onSubmit(text);
            setText("");
          }}
          className="w-1/6 h-full bg-[#BF1213] hover:bg-[#de4343] text-white rounded-s"
        >
          <FontAwesomeIcon icon={faPlus} className="pr-2 pb-1" />
        </button>
      </div>
    </div>
  );
};

export default CustomInput;
