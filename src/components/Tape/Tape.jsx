import "./Tape.css";

export function Tape(props) {

  return (
      <div className="tape">
          <img src={props.img} alt="" className="fita"/>
          <img src={props.img} alt="" className="fita"/>
          <img src={props.img} alt="" className="fita"/>
      </div>
  );
}