import "./Button.css";

export function Button(props) {

    

  return (  
    <>
        <button>{props.name}</button> {/* Utilizar o event.preventDefault() para cancelar o submit do botão */}
    </>
  );
}
