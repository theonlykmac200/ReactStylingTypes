import './App.css';
import Button1 from "./components/example-1-normal-css/Button"
import Button2 from "./components/example-2-inline-css/Button"
import Button3 from "./components/example-3-css-in-js/Button"
import Button4 from "./components/example-4-styled-components/Button"
import Button5 from "./components/example-5-css-modules/Button"
import Button6 from "./components/example-6-sass/Button"

function App() {
  return (
    <div className="App">
      <Button1 theme="light" buttonText= "Don't Press This Button"/>
      <Button2 buttonText="Don't Press This Button" bgcolor="purple"/>
      <Button3 buttonText="Don't Press this Button" bld="150px" bgcolor="blue"/>
      <Button4 buttonText="Don't Press this Button"bgc="red" clr="yellow"/>    
      <Button5 buttonText="Don't Press this Button" />
      <Button6 buttonText="Don't Press this Button" />
    </div>
  );
}

export default App;
