import React from "react";
interface props {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ className, children }: props): JSX.Element => {
  return (
    <section className={`w-[80%] max-w-[1340px] mx-auto py-4 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
