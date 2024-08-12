import classNames from "classnames";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div className={classNames(styles.logo, "absolute")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 494.54 173"
        className={styles.logo__svg}
      >
        <g>
          <line
            className={classNames(styles.line, styles["line--1"])}
            x1="2.65"
            y1="169.37"
            x2="166.33"
            y2="49.81"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="9"
          />
          <line
            className={classNames(styles.line, styles["line--2"])}
            x1="168.31"
            y1="45.52"
            x2="168.31"
            y2="127.78"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="12"
          />
          <line
            className={classNames(styles.line, styles["line--3"])}
            x1="171.26"
            y1="126.1"
            x2="244.65"
            y2="47.16"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="5"
          />
          <line
            className={classNames(styles.line, styles["line--4"])}
            x1="247.01"
            y1="45.52"
            x2="247.01"
            y2="127.78"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="12"
          />
          <line
            className={classNames(styles.line, styles["line--5"])}
            x1="250.72"
            y1="125.66"
            x2="324.11"
            y2="46.71"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="5"
          />
          <line
            className={classNames(styles.line, styles["line--6"])}
            x1="325.02"
            y1="45.06"
            x2="325.02"
            y2="127.32"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="12"
          />
          <line
            className={classNames(styles.line, styles["line--7"])}
            x1="328.21"
            y1="123.19"
            x2="491.89"
            y2="3.63"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="9"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
