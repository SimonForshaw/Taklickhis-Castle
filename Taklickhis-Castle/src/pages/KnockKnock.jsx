import { useState } from "react";
import _ from "lodash";
import "./knockKnock.css";

const KnockKnock = ({ change }) => {
  const level1 = [false, false, true, true, true];
  const level2 = [false, false, false, true, true];
  const level3 = [false, false, false, false, true];

  const [level, setLevel] = useState(level1);
  const [levelNum, setLevelNum] = useState(0);
  const [modalMsg, setModalMsg] = useState("");

  const modal = document.querySelector("dialog");

  const setDoors = () => {
    const doors = _.shuffle(level);
    return doors.map((door) => (
      <button className="doors" onClick={() => doorChoice(door)}>
        <img src="image/Door.png" />
      </button>
    ));
  };

  const doorChoice = (door) => {
    if (door && levelNum === 0) {
      setLevel(level2);
      setLevelNum(1);
    } else if (door && levelNum === 1) {
      setLevel(level3);
      setLevelNum(2);
    } else if (door && levelNum === 2) {
      setModalMsg("You Win!");
      modal.showModal();
    } else {
      setLevel(level1);
      setLevelNum(0);
      setModalMsg("You Lose!");
      modal.showModal();
    }
  };

  const handleKnock = () => {
    change("StartPage");
  };

  return (
    <div>
      <h1>Knock Knock</h1>
      <h2>Level {levelNum + 1}</h2>
      <div className="knockKnock__WallWithDoors">
        <img className="wall" src="image/BringOnTheWallV2.png" />
        {setDoors()}
      </div>
      <dialog modal>
        <p>{modalMsg}</p>
        <button onClick={() => modal.close()}>Try Again</button>
        <button onClick={handleKnock}>Home</button>
      </dialog>
    </div>
  );
};

export default KnockKnock;
