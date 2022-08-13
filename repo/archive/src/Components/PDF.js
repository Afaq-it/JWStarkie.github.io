import React from "react";
import PDF from "../Jo_Starkie_CV.pdf";

const pdf = () => (
  <embed
    className="pdflayout"
    src={PDF + "#toolbar=1"}
    type="application/pdf"
  />
);

export default pdf;
