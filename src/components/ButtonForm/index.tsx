import React from "react";
import style from "./style.module.scss";

class ButtonForm extends React.Component<{ text: string, type?: "button" | "submit" | "reset" | undefined }> {
  render() {
    const { type = "button" } = this.props
    return (
      <button type={ type } className={style.buttonStyle}>
        {this.props.text}
      </button>
    )
  }
}

export default ButtonForm;
