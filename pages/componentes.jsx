import CardGeneric from "@/main/components/modules/components/CardGeneric";
import CardsInfo from "@/main/components/modules/components/CardInfo";
import React from "react";
import { CardProgramate } from "@/main/components/modules/components/CardProgramate";
import MainLayout from "@/main/components/layouts/MainLayout";
import Navbar from "@/main/components/modules/components/Navbar";
export default function Home() {
  return (
    <MainLayout
      meta={{
        title: "Componentes | Kit UI Explora",
      }}
      navRoutes={[
        { name: "Navbar", path: "#navbar" },
        { name: "Cards", path: "#cards" },
      ]}
    >
      <Navbar />
      <CardGeneric />
      <CardProgramate />
      <CardsInfo />
    </MainLayout>
  );
}
