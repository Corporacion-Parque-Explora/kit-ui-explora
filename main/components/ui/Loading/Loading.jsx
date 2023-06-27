import { Children } from "react";

import Icon1 from "public/assets/iconos/load-1.svg";
import Icon2 from "public/assets/iconos/load-2.svg";
import Icon3 from "public/assets/iconos/load-3.svg";

export default function Loading({ children }) {
  const arrayChildren = Children.toArray(children);

  return (
    <div className="loading-container">
      <Icon1 />
      <Icon2 />
      <Icon3 />
    </div>
  );
}
