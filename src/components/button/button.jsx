import React from "react";
import styles from './button.module.css'
import cn from "classnames";

const Button = ({text, type, onClick}) => {
    return <input className={cn(styles.btn, type === 'active' ? styles.active : styles.inactive)}
                  type={type === 'active' ? 'submit' : 'reset'}
                  onSubmit={(e) => onClick(e)}
                  value={text}/>
}

export default Button
