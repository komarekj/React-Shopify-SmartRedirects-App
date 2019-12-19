/* eslint-disable no-underscore-dangle */
import {
  REDIRECT_REQUEST_LOADING,
  REDIRECT_REQUEST_ERROR,
  REDIRECT_REQUEST_FINISHED,
  REDIRECT_TOGGLE_ERROR_MESSAGE,
  REDIRECT_REMOVE,
  REDIRECT_UPDATE,
  REDIRECT_CREATE,
  REDIRECT_UPDATE_NEW_ITEM,
} from './redirectActionTypes';

import { REDIRECT_SIMPLE, REDIRECT_DYNAMIC } from './redirectTypes';

const initialState = {
  [REDIRECT_SIMPLE]: {
    items: [],
    count: 0,
    loaded: false,
    loading: false,
    error: false,
  },
  [REDIRECT_DYNAMIC]: {
    items: [],
    count: 0,
    loadedloaded: false,
    loading: false,
    error: false,
  },
  errorMessage: {
    show: false,
    message: null,
  },
};

const redirectReducer = (state = initialState, action) => {
  const { redirectType } = action;

  switch (action.type) {
    case REDIRECT_REQUEST_LOADING: {
      return {
        ...state,
        [redirectType]: {
          ...state[redirectType],
          loading: true,
        },
      };
    }

    case REDIRECT_REQUEST_FINISHED: {
      const { items, count } = action;
      return {
        ...state,
        [redirectType]: {
          ...state[redirectType],
          loading: false,
          loaded: true,
          items,
          count,
        },
      };
    }

    case REDIRECT_UPDATE_NEW_ITEM: {
      const { temporaryId, item } = action;
      return {
        ...state,
        [redirectType]: {
          ...state[redirectType],
          items: state[redirectType].items.map(listItem =>
            listItem.temporaryId === temporaryId ? item : listItem
          ),
        },
      };
    }

    case REDIRECT_REQUEST_ERROR: {
      return {
        ...state,
        [redirectType]: {
          ...state[redirectType],
          loading: false,
          loaded: false,
          error: true,
        },
      };
    }

    case REDIRECT_REMOVE: {
      const { _id } = action;
      return {
        ...state,
        [redirectType]: {
          ...state[redirectType],
          items: state[redirectType].items.filter(item => item._id !== _id),
        },
      };
    }

    case REDIRECT_UPDATE: {
      const { item } = action;
      const newItems = [...state[redirectType].items];
      const updateIndex = newItems.findIndex(
        listitem => listitem._id === item._id
      );
      newItems[updateIndex] = item;

      return {
        ...state,
        [redirectType]: {
          ...state[redirectType],
          items: newItems,
        },
      };
    }

    case REDIRECT_CREATE: {
      const { item } = action;
      return {
        ...state,
        [redirectType]: {
          ...state[redirectType],
          items: [item, ...state[redirectType].items],
        },
      };
    }

    case REDIRECT_TOGGLE_ERROR_MESSAGE: {
      const { show, message } = action;
      return {
        ...state,
        errorMessage: {
          show,
          message,
        },
      };
    }

    default:
      return state;
  }
};

export default redirectReducer;
