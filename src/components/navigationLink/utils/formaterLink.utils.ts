export const formaterlink = (text: string) => {
  const regex = /\s/i;
  return text.replace(regex, '-').toLowerCase();
};
