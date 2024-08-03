import Dice from "./../assets/icon-dice.svg";
import Linea from "./../assets/pattern-divider-desktop.svg";

function Advice({ id, advice, newLoad }) {
  return (
    <div className="advice-div">
      <h2 className="advice-number">Advice #{id}</h2>

      <h3 className="advice-text">&quot;{advice}&quot;</h3>

      <img src={Linea} alt="Linea" />

      <div className="btn" onClick={() => newLoad()}>
        <img className="" src={Dice} alt="Dado" />
      </div>
    </div>
  );
}

export { Advice };
