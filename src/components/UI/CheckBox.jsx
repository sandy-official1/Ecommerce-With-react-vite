import classes from "./check-box.module.css";

export default function CheckBox({ ...rest }) {
  const handleCustomCheckboxClick = (event) => {
    const inputElement = event.currentTarget.previousSibling;
    inputElement.click();
  };

  return (
    <div className={classes.container}>
      <input type="checkbox" {...rest} />
      <span
        className={classes.commonCheckBox}
        onClick={handleCustomCheckboxClick}
      />
    </div>
  );
}
