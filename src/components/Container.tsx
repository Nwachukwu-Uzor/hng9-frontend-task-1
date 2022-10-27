import React from "react";
interface props {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ className, children }: props): JSX.Element => {
  return (
    <section className={`w-[90%] max-w-[1400px] mx-auto py-4 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
