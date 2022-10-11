import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row mx-20 my-5 items-center justify-between">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl font-bold font-mono cursor-pointer"
      >
        Voting Poll App
      </h1>
      <button
        onClick={() => navigate("/addpoll")}
        className="w-40 h-full bg-[#BF1213] hover:bg-[#de4343]  rounded-xl text-white py-3"
      >
        <FontAwesomeIcon icon={faPlus} className="pr-2" />
        Add New Poll
      </button>
    </div>
  );
};

export default Header;
