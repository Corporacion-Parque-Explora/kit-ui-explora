import Texts from "@/app/components/modules/Texts";
import Fontweigth from "@/app/components/modules/Fontweight";
import Buttons from "@/app/components/modules/Buttons";
import Cards from "@/app/components/modules/Cards";
import React from "react";

export default function Home() {
  return (
    <div className="kit-ui">
      <div className="container">
        <Texts />
        <Fontweigth />
        <Buttons />
      <Cards />
      </div>
    </div>
  );
}
