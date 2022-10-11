import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { create, update, getAll } from "../services/PollService";
import { PollType } from "../components/PollTileCard";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PollState {
  polls: Array<PollType>;
}

const initialState: PollState = {
  polls: [],
};

export const createPoll = createAsyncThunk(
  "polls/create",
  async (poll: PollType) => {
    const res = await create(poll);
    return res.data;
  }
);

export const retrievePolls = createAsyncThunk("polls/retrieve", async () => {
  const res = await getAll();
  return res.data;
});

export const updatePoll = createAsyncThunk(
  "polls/update",
  async ({ _id, poll }: { _id: string; poll: PollType }) => {
    const res = await update(_id, poll);
    return res.data;
  }
);

export const pollSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPoll.fulfilled, (state, action) => {
      state.polls.push(action.payload.poll);
    });
    builder.addCase(retrievePolls.fulfilled, (state, action) => {
      state.polls = [...action.payload];
    });
    builder.addCase(updatePoll.fulfilled, (state, action) => {
      // I need to find the index of the correct poll then update the votes on that option

      const correctPollIndex = state.polls.findIndex(
        (poll) => poll._id === action.payload._id
      );

      state.polls[correctPollIndex] = {
        ...state.polls[correctPollIndex],
        ...action.payload,
      };
    });
  },
});

export default pollSlice.reducer;
