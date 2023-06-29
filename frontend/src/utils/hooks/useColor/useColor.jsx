import { Globals } from "../../../styles/globals";

export default function useColor(color) {
  const baseColor = {
    // 키 컬러
    purple: Globals.palette.$color_purple,
    green: Globals.palette.$color_green,

    // 무채색
    gray: Globals.palette.$color_gray,
    black: Globals.palette.$color_black,
  };

  // const setColor = Object.keys(color) as (keyof useColorType)[];
  let setColor;
  let i;
  for (i in baseColor) {
    if (color == i) {
      setColor = baseColor[i];
    }
  }

  return setColor;
}
