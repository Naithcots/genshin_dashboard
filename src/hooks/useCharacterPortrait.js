import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getCharacterNames } from "../queries/characters";

const useCharacterPortrait = () => {
  const [src, setSrc] = useState(null);

  const { isError, data } = useQuery("characterNames", getCharacterNames);

  useEffect(() => {
    if (isError) setSrc(`/assets/portrait/default.webp`);
    if (data) {
      const rIdx = Math.floor(Math.random() * (data.length - 1));
      const rName = data[rIdx];

      fetch(`https://api.genshin.dev/characters/${rName}/portrait`)
        .then((res) => {
          if (!res.ok) throw new Error(res.status);
          setSrc(res.url);
        })
        .catch((_) => {
          setSrc(`/assets/portrait/default.webp`);
        });
    }
  }, [data, isError]);

  return { src };
};
export default useCharacterPortrait;
