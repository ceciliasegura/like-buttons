import { useState } from "react";

const colours = ["white", "blue", "green", "yellow", "purple"]

export default function LikeButton(){
    const [counter, setCounter] = useState(0);
    const [colour, setColour] = useState(colours[0]);

    // function sumCounter() {
    //     setCounter(counter + 1);
    // }

    //Usamos el setCounter para modificar el estado de la variable counter,
    //esto es así porque en react no se pueden modificar directamente los estados
    //en js normal podríamos haber definido el conter con un let y hacer counter = conter + 1
    //pero como es react usamos el setCounter(counter + 1)
    const sumCounter = () =>  {
        setCounter(counter + 1);
        setColour(colours[(counter + 1) % 5]);
    }

    return(
            //Para acceder a la variable usamos {counter}
            <button onClick={sumCounter} style={{backgroundColor: colour}}>Like {counter}</button>
    );
}


