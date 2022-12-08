import "./button.css"

export default function Button({ buttonText, theme }) {
  return (
    <button className={`button ${theme}`}>{ buttonText }</button>
  );
}