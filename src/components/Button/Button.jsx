import "./Button.css";

export function Button(props) {

  return (
   
      <button style={props.style}>{props.name}</button> /* Utilizar o event.preventDefault() para cancelar o submit do botão */
    
  )
}
