import classes from "./card.module.css";
export default function Card({ children, title, ...rest }) {
  return (
    <div {...rest} className={classes.container}>
      {title && (
        <h4 style={{ marginBottom: "20px", marginTop: "15px" }}>{title}</h4>
      )}
      {children}
    </div>
  );
}
