import { useState } from "react";
import _ from "lodash";

const SkippingStones = ({ change }) => {
  const row1 = [false, false, true, true, true];
  const row2 = [false, false, false, true, true];
  const row3 = [false, false, false, false, true];

  const [row, setRow] = useState(row1);
  const [rowNum, setRowNum] = useState(0);
  const [modalMsg, setModalMsg] = useState("");

  const handleSkip = () => {
    change("StartPage");
  };

  return (
    <div>
      <h1>Skipping Stones</h1>
      <h2>Level {levelNum + 1}</h2>
      <div className="">
        <img className="Stones" src="image/BringOnTheWallV2.png" />
        {setStones()}
      </div>
      <dialog modal>
        <p>{modalMsg}</p>
        <button onClick={() => modal.close()}>Try Again</button>
        <button onClick={handleSkip}>Home</button>
      </dialog>
    </div>
  );
};

export default SkippingStones;
