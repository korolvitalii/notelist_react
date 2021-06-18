export const counterCategoriesType = (typeCategory, notes) => {
  return notes.filter(({ category }) => category === typeCategory).length;
};