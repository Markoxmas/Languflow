export default function createLexeme(data) {
  return {
    id: data.id,
    foreign: data.foreign,
    native: data.native,
  };
}
