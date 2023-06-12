import "./Checkbox.css";

export function Checkbox(props) {
  return (
    <div id="wrapperCheckbox">
      <input type="checkbox" />
      <label>{props.title}</label>
      <span>R${props.price}</span>
    </div>
  );
}
