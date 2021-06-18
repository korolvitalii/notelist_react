export const updateNewTaskText = (text) => ({
  type: 'TEXT_UPDATE',
  payload: {
    text,
  },
});

export const addTask = (task) => ({
  type: 'TASK_ADD',
  payload: {
    task,
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

