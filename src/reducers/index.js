import { combineReducers } from 'redux';

const notes = (state = [], action) => {
  switch (action.type) {
    case 'NOTE_ADD': {
      return [action.payload.note, ...state];
    }
    case 'NOTE_REMOVE': {
      // console.log(action.payload);
      return state.filter((t) => t.id !== action.payload.note.id);
    }
    case 'NOTE_EDIT': {
      return state.filter((n) => n.id !== action.payload.currentNote.id); 
    }
    case 'NOTE_ADD_ARCHIVE': {
      return state.filter((t) => t.id !== action.payload.archiveNote.id);
   }
   case 'NOTE_UNARCHIVE': {
     return [action.payload.unarciveNote, ...state];
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
    case 'NOTE_UNARCHIVE': {
      return state.filter((t) => t.id !== action.payload.unarciveNote.id);
    }
    default:
      return state;
  }
};

const categories = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case 'NOTE_CATEGORY': {
      return action.payload.notes
        .reduce((acc, { category}) => acc.includes(category) ? acc : [...acc, category], state);
    }
    case 'NOTE_ADD': {
      return state.includes(action.payload.note.category) ? state : [...state, action.payload.note.category];
    }
    case 'NOTE_REMOVE': {
      const currentCategory = action.payload.note.category;
      return state.filter((c) => c !== currentCategory);
    }
    case 'NOTE_EDIT': {
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

const defaultValues = (state = {}, action) => {
  switch (action.type) {
    case 'NOTE_EDIT': {
      state = {};
      return { ...action.payload.currentNote, ...state };
    }
    case 'NOTE_ADD': {
      return {};
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
  defaultValues,
});
