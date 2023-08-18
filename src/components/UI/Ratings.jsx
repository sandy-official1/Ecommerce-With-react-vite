import classes from "./ratings.module.css";
import { AiFillStar } from "react-icons/ai";

const Ratings = ({ rating, ratingCount, ...rest }) => {
  return (
    <div {...rest} className={classes.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Math.round((rating + Number.EPSILON) * 100) / 100}{" "}
        <AiFillStar style={{ marginTop: "1px", color: "#ee5f73" }} />
      </div>
      <div className={classes.seperator}>|</div>
      <div className={classes.ratingCount}>
        {ratingCount?.toString()?.length > 3
          ? ratingCount?.toString()[0] + "k"
          : ratingCount}{" "}
            Ratings
      </div>
    </div>
  );
};

export default Ratings;
