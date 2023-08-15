import React from "react";

export default function Section({ children, name }) {
  return <section className={`py-10 ${name}`}>{children}</section>;
}
