export const updateNewTaskText = (text) => ({
  type: 'TEXT_UPDATE',
  payload: {
    text,
  },
});

export const addNote= (note) => ({
  type: 'NOTE_ADD',
  payload: {
    note,
  },
});

export const removeNotes = (id) => ({
  type: 'NOTE_REMOVE',
  payload: {
    id,
  },
});

export const archiveNotes = (archiveNote) => ({
  type: 'NOTE_ADD_ARCHIVE',
  payload: {
    archiveNote,
  },
});

export const toggleForm = (formState) => ({
  type: 'FORM_OPEN',
  payload: {
    formState,
  },
});

export const addDefaultNote = (currentNote) => ({
  type: 'NOTE_EDIT',
  payload: {
    currentNote,
  },
});