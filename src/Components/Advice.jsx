import Dice from "./../assets/icon-dice.svg";

function Advice({ id, advice, newLoad }) {
  return (
    <div className="advice-div">
      <h2 className="advice-number">Advice #{id}</h2>

      <h3 className="advice-text">&quot;{advice}&quot;</h3>

      <div className="btn" onClick={() => newLoad()}>
        <img className="" src={Dice} alt="Dado" />
      </div>
    </div>
  );
}

export { Advice };
