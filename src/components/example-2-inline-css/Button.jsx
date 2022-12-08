export default function Button({ buttonText, bgcolor }) {
//style values must be strings and get rid of semicolons for commas and two word properties must be camelCase
    const buttonStyle = {
        backgroundColor: bgcolor,
        borderRadius: "8px",
        color: "white",
        fontSize: "24px", //to change the value of a property just make it a prop and a variable
        padding: "15px 50px",
        width: "300px",

    }






    return <button style={buttonStyle}>{ buttonText }</button>; //style takes a {} data type

  }

  