import Texts from "@/app/components/modules/Texts";
import Fontweigth from "@/app/components/modules/Fontweight";
import Buttons from "@/app/components/modules/Buttons";
import CardGeneric from "@/app/components/modules/CardGeneric";
import Colors from "@/app/components/modules/Colors";
import React from "react";

export default function Home() {
  return (
    <div className="kit-ui">
      <div className="container">
        <Texts />
        <Colors />
        <Fontweigth />
        <Buttons />
        <CardGeneric />
      </div>
    </div>
  );
}
