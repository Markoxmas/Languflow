export default function createList(data) {
  return {
    foreign: data.foreign,
    native: data.native,
    lexemes: [],
    title: data.title || "",
    description: data.description || "",
  };
}
