export const searchInputChange = (e: React.FormEvent<HTMLInputElement>) => ({
  type: "INPUT_CHANGE",
  searchInputValue: e.currentTarget.value,
});
