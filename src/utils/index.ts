export const sanitizeTitle = (text?: string) => {
  if (!text) {
    return text;
  }
  return text[0].toUpperCase() + text.slice(1);
};
