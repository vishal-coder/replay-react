import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function Color() {
  const INITIAL_COLORLIST = ["deepskyblue", "yellow", "orange"];

  const [color, setColor] = useState("deepskyblue");
  const styles = {
    backgroundColor: color,
  };

  const [colorlist, setColorlist] = useState(INITIAL_COLORLIST);

  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
        placeholder="Enter your color"
        value={color}
      />
      <button onClick={() => setColorlist([...colorlist, color])}>
        Add Color
      </button>

      {colorlist.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
