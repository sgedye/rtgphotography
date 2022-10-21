import React, { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";

interface FancyboxProps {
  delegate?: string;
  options?: Record<string, unknown>
  children: React.ReactNode;
}

export const Fancybox = ({ delegate, options, children }: FancyboxProps) => {

  useEffect(() => {
    const opts = options || {};

    NativeFancybox.bind(delegate || "[data-fancybox]", opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default Fancybox;
