export const getCharacters = async () => {
  const res = await fetch(`https://api.genshin.dev/characters/all`);
  return await res.json();
};

export const getCharacterNames = async () => {
  const res = await fetch(`https://api.genshin.dev/characters`);
  if (!res.ok) throw new Error(res.status);
  return await res.json();
};
