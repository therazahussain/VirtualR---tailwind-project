import React from "react";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <div className="py-12 px-12 w-full flex flex-wrap items-center justify-between gap-6 bg-neutral-900 md:px-6 md:w-4/5 md:justify-evenly">
      <div className="flex flex-col gap-2 items-start justify-start">
        <p className="bold">Resources</p>
        {resourcesLinks.map((text, key) => (
          <div className="flex flex-col items-center justify-center">
            <a className="text-xs text-neutral-600" href={text.href}>
              {text.text}
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 items-start justify-start">
        <p className="bold">Community</p>
        {communityLinks.map((text, key) => (
          <div className="flex flex-col items-center justify-center">
            <a className="text-xs text-neutral-600" href={text.href}>
              {text.text}
            </a>
          </div>
        ))}
      </div>    
      <div className="flex flex-col gap-2 items-start justify-start">
        <p className="bold">Platform</p>
        {platformLinks.map((text, key) => (
          <div className="flex flex-col items-center justify-center">
            <a className="text-xs text-neutral-600" href={text.href}>
              {text.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
