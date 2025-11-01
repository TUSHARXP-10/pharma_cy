import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import heroImage from "@/assets/hero-pharma.jpg";
export default function HeroScrollDemo() {
  return <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={<>
            <h1 className="text-4xl font-semibold text-foreground">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary glow-text-cyan">Scroll Anima</span>
            </h1>
          </>}>
        <img src={heroImage} alt="hero" height={720} width={1400} className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
      </ContainerScroll>
    </div>;
}