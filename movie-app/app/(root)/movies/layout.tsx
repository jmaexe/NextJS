import React from "react";

const LayoutMoviePage = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid place-items-center p-6">{children}</div>;
};

export default LayoutMoviePage;
