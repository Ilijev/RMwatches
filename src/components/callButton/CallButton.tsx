import React from "react";
import styles from "./callButton.module.css";

export default function CallButton() {
  const handleClick = () => {
    const url = `https://wa.me/+491738971063`;
    window.open(url);
  };

  return <div onClick={handleClick} className={styles.callButton}></div>;
  //   return (
  //     <a
  //       className="side_fix wab"
  //       href="https://api.whatsapp.com/send?phone=+491738971063"
  //     >
  //       <div className="icon"></div>
  //       <span className="text">Info, vendi e permuta</span>
  //       <span className="name">Whatsapp</span>
  //     </a>
  //   );
}
