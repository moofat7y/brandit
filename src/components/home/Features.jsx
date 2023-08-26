import React from "react";
import Section from "../Section";
import { storeFeatures } from "@/utils/helpers";

export default function Features() {
  return (
    <Section name={"features !py-12 border-t-[1px]"}>
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          {storeFeatures.map((feature, index) => {
            return (
              <div
                key={index}
                className="col-span-4 md:col-span-2 xl:col-span-1 flex flex-col md:flex-row gap-5"
              >
                <div className="text-3xl text-primary-500 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="text-center md:text-left">
                  <h6 className="font-semibold mb-1 text-sm text-primary-500">
                    {feature.title}
                  </h6>
                  <p className="text-[14px] text-gray-900">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
