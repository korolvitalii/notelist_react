export const counterCategoriesType = (typeCategory, notes) => {
  return notes.filter(({ category }) => category === typeCategory).length;
};

export const generateDate = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  return month  + ' ' + day  + ',' + year;  
};

export const currentNote = (notes, id) => notes.filter((note) => note.id === id)[0];