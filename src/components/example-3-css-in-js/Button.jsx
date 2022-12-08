import { createUseStyles} from "react-jss";
export default function Button({ buttonText, bld, bgcolor }) {

  const styles = createUseStyles({
    button: {
      backgroundColor:  bgcolor,
      borderRadius: "8px",
      color: "#f7df1c",
      fontSize: "24px", 
      padding: "15px 50px",
      width: "300px",
      height: bld,

    },
      
  });

  const classes = styles()





    return <button className={classes.button}>{ buttonText }</button>;
  }