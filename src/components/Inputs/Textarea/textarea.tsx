import React, { FC } from "react";

export type TextareaProps = {
  children: React.ReactNode;
};

export const Textarea: FC<TextareaProps> = ({ children }) => {
  return <textarea />;
};
