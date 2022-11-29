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
    
    NativeFancybox.bind(".react-photo-gallery--gallery img", {
      ...options,
      groupAll: true
    });

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default Fancybox;
