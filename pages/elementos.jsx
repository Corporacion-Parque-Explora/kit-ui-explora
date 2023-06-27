import Buttons from "@/main/components/modules/Buttons";
import SeparatorTitle from "@/main/components/modules/SeparatorTitle";
import React from "react";
import MainLayout from "@/main/components/layouts/MainLayout";
export default function Home() {
  const routes = [
    {
      name: "Botones ",
      path: "#botones",
    },
    {
      name: "Títulos",
      path: "#titulos",
    },
  ];
  return (
    <MainLayout
      navRoutes={routes}
      meta={{
        title: "Elementos | Kit UI Parque Explora",
      }}
    >
      <Buttons />
      <SeparatorTitle />
    </MainLayout>
  );
}
