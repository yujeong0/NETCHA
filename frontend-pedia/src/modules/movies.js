// import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import * as moviesAPI from "../lib/api/movies";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const [
  LIST_SEARCH_MOVIES,
  LIST_SEARCH_MOVIES_SUCCESS,
  LIST_SEARCH_MOVIES_FAILURE,
] = createRequestActionTypes("movies/LIST_SEARCH_MOVIES");

export const listSearchMovies = createAction(
  LIST_SEARCH_MOVIES,
  ({ keyword, page }) => ({ keyword, page })
);

// 영화 검색 사가 생성
const listsearchMoviesSaga = createRequestSaga(
  LIST_SEARCH_MOVIES,
  moviesAPI.listSearchMovies
);
export function* searchMoviesSaga() {
  yield takeLatest(LIST_SEARCH_MOVIES, listsearchMoviesSaga);
}

const [
  NETCHA_RANKING_MOVIES,
  NETCHA_RANKING_MOVIES_SUCCESS,
  NETCHA_RANKING_MOVIES_FAILURE,
] = createRequestActionTypes("movies/NETCHA_RANKING_MOVIES");

export const listNetChaRankingMovies = createAction(
  NETCHA_RANKING_MOVIES,
);

// 넷챠 영화 순위 사가 생성
const listNetChaRankingMoviesSaga = createRequestSaga(
  NETCHA_RANKING_MOVIES,
  moviesAPI.listNetChaRankingMovies
);
export function* netchaRankingMoviesSaga() {
  yield takeLatest(NETCHA_RANKING_MOVIES, listNetChaRankingMoviesSaga);
}

const [
  LIST_SCORE_MOVIES,
  LIST_SCORE_MOVIES_SUCCESS,
  LIST_SCORE_MOVIES_FAILURE,
] = createRequestActionTypes("movies/LIST_SCORE_MOVIES");

export const listScoreMovies = createAction(
  LIST_SCORE_MOVIES,
  moviesAPI.listNetChaRankingMovies
  );
  
  // 사용지별 별점 준 영화 사가 생성
  const listScoreMoviesSaga = createRequestSaga(
    LIST_SCORE_MOVIES,
    moviesAPI.listScoreMovies
  );
  export function* scoreMoviesSaga() {
    yield takeLatest(LIST_SCORE_MOVIES, listScoreMoviesSaga);
  }


const initialState = {
  movies: null,
  error: null,
};

const movies = handleActions(
  {
    [LIST_SEARCH_MOVIES_SUCCESS]: (state, { payload: movies }) => ({
      ...state,
      movies,
    }),
    [LIST_SEARCH_MOVIES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [NETCHA_RANKING_MOVIES_SUCCESS]: (state, { payload: movies }) => ({
      ...state,
      movies,
    }),
    [NETCHA_RANKING_MOVIES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_SCORE_MOVIES_SUCCESS]: (state, { payload: movies }) => ({
      ...state,
      movies,
    }),
    [LIST_SCORE_MOVIES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default movies;