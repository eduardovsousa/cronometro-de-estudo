import React from "react";
import style from "./style.module.scss";

class ButtonForm extends React.Component<{ text: string }> {
  render() {
    return (
      <button className={style.buttonStyle}>
        {this.props.text}
      </button>
    )
  }
}

export default ButtonForm;
