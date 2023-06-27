import Texts from "@/main/components/modules/Texts";
import Fontweigth from "@/main/components/modules/Fontweight";
import Buttons from "@/main/components/modules/Buttons";
import CardGeneric from "@/main/components/modules/CardGeneric";
import Colors from "@/main/components/modules/Colors";
import SeparatorTitle from "@/main/components/modules/SeparatorTitle";
import CardsInfo from "@/main/components/modules/CardInfo";
import React from "react";
import { CardProgramate } from "@/main/components/modules/CardProgramate";
import { CardProjects } from "@/main/components/modules/CardProjects";
export default function Home() {
  return (
    <div className="kit-ui">
      <div className="container">
        <Texts />
        <Colors />
        <Fontweigth />
        <Buttons />
        <CardGeneric />
        <CardProgramate />
        <SeparatorTitle />
        <CardsInfo />
      </div>
    </div>
  );
}
