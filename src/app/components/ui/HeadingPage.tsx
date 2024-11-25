import React from "react";

interface Props {
  children: React.ReactNode | string;
}

const HeadingPageH1: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex-start">
      <h1 className="font-josefin sm:text-5xl text-3xl font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">{children}</h1>
    </div>
  );
};

const HeadingPageH2: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1 className="font-josefin font-bold sm:text-3xl text-2xl">{children}</h1>
    </div>
  );
};

export { HeadingPageH1, HeadingPageH2 };
