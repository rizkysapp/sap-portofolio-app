import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="
      max-w-[2520px]
      mx-auto 
      xl:px-28
      lg:px-22 
      md:px-20 
      sm:px-8 px-6"
    >
      {children}
    </div>
  );
};

export default Container;
