import Buttons from "@/main/components/modules/elements/Buttons";
import Titles from "@/main/components/modules/elements/Titles";
import React from "react";
import MainLayout from "@/main/components/layouts/MainLayout";
import Separator from "@/main/components/modules/elements/Separator";
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
      <Titles />
      <Separator />
    </MainLayout>
  );
}
