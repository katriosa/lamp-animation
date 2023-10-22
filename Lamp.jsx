import { useState } from "react";

export default function Lamp() {
  const [lampOn, setLampOn] = useState(false);

  const toggleLight = () => {
    setLampOn(!lampOn);
  };

  return (
    <>
      <div className={"lamp"}>
        <input
          className={lampOn ? `light on` : `light`}
          type="checkbox"
          checked={lampOn}
          onChange={toggleLight}
        />
      </div>
    </>
  );
}
