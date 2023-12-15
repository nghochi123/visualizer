import React from "react";

import * as styles from "./Bar.module.css";

const Bar = (props) => {
    const style = props.action;
    const text =
        parseInt(props.width) < 75 ? null : (
            <span className={styles.text}>{props.value}</span>
        );
    let stylename = styles.bar;
    switch (style) {
        case "comparing":
            stylename = styles.comparing;
            break;
        case "swapping":
            stylename = styles.swapping;
            break;
        case "sorted":
            stylename = styles.sorted;
            break;
        case "lowest":
            stylename = styles.lowest;
            break;
        case "pivot":
            stylename = styles.pivot;
            break;
        case "bar":
            stylename = styles.bar;
            break;
        case "bogo":
            let s = [
                styles.comparing,
                styles.sorted,
                styles.lowest,
                styles.pivot,
                styles.bar,
            ];
            let idx = Math.floor(Math.random() * s.length);
            stylename = s[idx];
            if (!stylename) {
                stylename = styles.comparing;
            }
            break;
        default:
            stylename = styles.bar;
            break;
    }
    return (
        <div
            className={stylename}
            style={{ height: props.height, width: props.width }}
        >
            {text}
        </div>
    );
};
export default Bar;
