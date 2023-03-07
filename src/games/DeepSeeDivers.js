import React from "react";

import html from "./deepSeaDivers/index.html";


export default function DeepSeaDivers() {
  return (
    <div dangerouslySetInnerHTML={{__html: html}} />
  );
}
