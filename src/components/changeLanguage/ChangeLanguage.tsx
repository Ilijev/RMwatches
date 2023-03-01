import React from "react";

type Props = {};

export default function ChangeLanguage({}: Props) {
  return (
    <div >
      <button className="btn text-white p-2 hover-underline-animation">EN</button>
      <button className="btn text-white p-2 hover-underline-animation ">DE</button>
    </div>
  );
}
