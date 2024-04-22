export const getRecipeTitleFromSearch = (name: string) => {
  return name.replaceAll('%20', ' ');
};
