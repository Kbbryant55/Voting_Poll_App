import React from "react";
import "../App.css";
import Header from "../components/Header";
import AddPollForm from "../components/AddPollForm";

const AddPollPage = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <AddPollForm />
      </div>
    </div>
  );
};

export default AddPollPage;
