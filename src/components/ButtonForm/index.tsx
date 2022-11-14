import React from "react";
import style from "./style.module.scss";

class ButtonForm extends React.Component<{
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.buttonStyle}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonForm;
