import "./Input.css";

export function Input(props) {
  return (
      <div className="wrapperInput">
        <label>{props.title}</label>
        <div className="input">
          <input type={props.type} placeholder={props.placeholder} value={props.value} id={props.id} onChange={props.onChange}  onKeyDown={props.onKeyDown} pattern={props.pattern} onClick={props.onClick}/>
          {props.icon} {props.icon2}
        </div>
      </div>
  );
}
