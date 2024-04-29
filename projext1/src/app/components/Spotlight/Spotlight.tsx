import React from "react";
import { cn } from "../../utils/cn.ts";
import { Spotlight } from "../../components/ui/Spotlight";

export function SpotlightPreview() {
  return (
      <Spotlight
        className="-top-40 left-60 md:left-60 md:-top-20"
        fill="white"
      />
      
  );
}
