import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload
      state.quizzes[id] = action.payload;
    }
  }
});

export const addQuizForTopicId = (payload) => {
  return (dispatch) => {
    console.log('here it is ')
    const {id, topicId} = payload;
    dispatch(addQuiz(payload));

    dispatch(addQuizId({quizId: id, topicId}));
  }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;