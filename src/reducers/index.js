import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

const notes = (state = [], action) => {
  switch (action.type) {
    case 'NOTE_ADD': {
      return [action.payload.note, ...state];
    }
    case 'NOTE_REMOVE': {
      return state.filter((t) => t.id !== action.payload.id);
    }
    case 'NOTE_ADD_ARCHIVE': {
      return state.filter((t) => t.id !== action.payload.archiveNote.id);
    
    }
    default:
      return state;
  }
};

const archive  = (state = [], action) => {
  switch (action.type) {
    case 'NOTE_ADD_ARCHIVE': {
      return [ action.payload.archiveNote, ...state ];
    }
    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case 'NOTE_REMOVE': {
      return state;
    }
    case 'NOTE_ADD_ARCHIVE': {
      return state;
    }
    default:
      return state;
  }
};

const formState = (state = false, action) => {
  switch (action.type) {
    case 'FORM_OPEN': {
      return !action.payload.formState;
    }
    case 'FORM_CLOSE': {
      return action.payload.formState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  notes,
  archive,
  categories,
  formState,
  // form: formReducer,
});
