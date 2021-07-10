import { SAVE, REMOVE } from "./types";

export const save = (payload) => (dispatch) => {
  dispatch({ type: SAVE, payload });
};

export const remove = () => (dispatch) => {
  //clearUser();
  dispatch({ type: REMOVE });
};
