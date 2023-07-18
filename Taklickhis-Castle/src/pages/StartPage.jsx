const StartPage = ({ change }) => {
  const handleClick = () => {
    change("KnockKnock");
  };
  return (
    <div>
      <h1>Taklickhi's Castle</h1>
      <img src="image/TakeshisCastle.jpg" />
      <button onClick={handleClick}>Knock Knock!</button>
    </div>
  );
};

export default StartPage;
