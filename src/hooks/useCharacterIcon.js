import { useState, useEffect } from "react";
//   Because the API is inconsistent, there is sometimes a need to obtain a local icon resource.

const useCharacterIcon = (name) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    fetch(`https://api.genshin.dev/characters/${name}/icon-big`)
      .then((res) => {
        if (!res.ok) throw new Error("404");
        setSrc(res.url);
      })
      .catch((_) => {
        setSrc(`/assets/icon-big/${name}.webp`);
      });
  }, []);

  return { src };
};
export default useCharacterIcon;
