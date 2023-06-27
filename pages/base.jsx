import Texts from "@/main/components/modules/base/Texts";
import Fontweigth from "@/main/components/modules/base/Fontweight";
import Colors from "@/main/components/modules/base/Colors";
import React from "react";
import MainLayout from "@/main/components/layouts/MainLayout";
export default function Home() {
  const routes = [
    {
      name: "Texto",
      path: "#texto",
    },
    {
      name: "Colores",
      path: "#colores",
    },
    {
      name: "Fuente",
      path: "#fuente",
    },
  ];

  return (
    <MainLayout
      navRoutes={routes}
      meta={{
        title: "Base | Kit UI Parque Explora",
      }}
    >
      <Texts />
      <Colors />
      <Fontweigth />
    </MainLayout>
  );
}
