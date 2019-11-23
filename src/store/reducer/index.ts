interface IComponentState {
  errorMessage: string;
  loading: boolean;
  movies: Array<object>;
}

interface IDispatchAction {
  error: string;
  payload: Array<object>;
  type: string;
}

export const initialState: IComponentState = {
  errorMessage: "",
  loading: true,
  movies: []
};

export const reducer = (state: object = initialState, action: IDispatchAction) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: ""
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
