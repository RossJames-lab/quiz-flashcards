import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from '../features/topics/topicsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';
import cardsReducer from '../features/cards/cardsSlice'; // Import the cards reducer

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer, // Include the cards reducer
  },
});
