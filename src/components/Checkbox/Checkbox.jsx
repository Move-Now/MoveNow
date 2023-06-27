import "./Checkbox.css";

export function Checkbox(props) {
  return (
    <div id="wrapperCheckbox">
      <input type="checkbox" onClick={props.onClick}/>
      <label>{props.title}</label>
      <span>R$ {props.price}</span>
    </div>
  );
}
