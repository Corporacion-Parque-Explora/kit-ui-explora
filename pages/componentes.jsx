import CardGeneric from "@/main/components/modules/components/CardGeneric";
import CardsInfo from "@/main/components/modules/components/CardInfo";
import React from "react";
import { CardProgramate } from "@/main/components/modules/components/CardProgramate";
import MainLayout from "@/main/components/layouts/MainLayout";
import Navbar from "@/main/components/modules/components/Navbar";
import { CardProjects } from "@/main/components/modules/components/CardProjects";
import Banners from "@/main/components/modules/components/Banners";
export default function Home() {
  return (
    <MainLayout
      meta={{
        title: "Componentes | Kit UI Explora",
      }}
      navRoutes={[
        {
          name: "Banners",
          path: "#banners",
        },
        { name: "Navbar", path: "#navbar" },
        { name: "Cards", path: "#cards" },
      ]}
    >
      <Banners />
      <Navbar />
      <CardGeneric />
      <CardProgramate />
      <CardsInfo />
      <CardProjects />
    </MainLayout>
  );
}
