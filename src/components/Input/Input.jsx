import "./Input.css";

export function Input(props) {
  return (
    <div className="wrapperInput">
      <label>{props.title}</label>
      <div className="input">
        <input type={props.type} placeholder={props.placeholder} />
        {props.icon}
      </div>
    </div>
  );
}
