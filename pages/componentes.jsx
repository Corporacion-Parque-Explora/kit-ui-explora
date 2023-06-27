import CardGeneric from "@/main/components/modules/CardGeneric";
import CardsInfo from "@/main/components/modules/CardInfo";
import React from "react";
import { CardProgramate } from "@/main/components/modules/CardProgramate";
import MainLayout from "@/main/components/layouts/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <CardGeneric />
      <CardProgramate />
      <CardsInfo />
    </MainLayout>
  );
}
