import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

const initialState = {
  topics: {}
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic(state, action) {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      const { id: quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    });
  }
});

export const { addTopic } = topicsSlice.actions;
export const selectTopics = state => state.topics.topics;

export default topicsSlice.reducer;
