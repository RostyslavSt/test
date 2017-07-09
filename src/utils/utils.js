export function searchItem (item, searchValue) {
  const result = item.name.toLowerCase().includes(searchValue);

  return result;
}
