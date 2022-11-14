import style from "./style.module.scss";


interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
}

function ButtonForm({onClick, type, text }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.buttonStyle}>
      {text}
    </button>
  );
}

export default ButtonForm;