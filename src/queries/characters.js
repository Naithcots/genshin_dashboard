export const getCharacters = async () => {
  const res = await fetch(`https://api.genshin.dev/characters/all`);
  return await res.json();
};
