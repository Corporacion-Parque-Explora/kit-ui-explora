import React from "react";
import MainLayout from "@/main/components/layouts/MainLayout";
import Containers from "@/main/components/modules/layout/Container";
export default function Home() {
  return (
    <MainLayout navRoutes={[{ name: "Contenedores", path: "#contenedores" }]}>
      <Containers></Containers>
    </MainLayout>
  );
}
