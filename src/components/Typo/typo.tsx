import React, { FC, ReactNode } from "react";

export enum TypographyType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  p = "p",
}

export type TypoProps = {
  type: TypographyType;
  children: ReactNode;
};

export const Typography: FC<TypoProps> = ({ type, children }) => (
  <>
    {type === TypographyType.h1 ? (
      <h1>{children}</h1>
    ) : type === TypographyType.h2 ? (
      <h2>{children}</h2>
    ) : type === TypographyType.h3 ? (
      <h3>{children}</h3>
    ) : type === TypographyType.h4 ? (
      <h4>{children}</h4>
    ) : type === TypographyType.p ? (
      <p>{children}</p>
    ) : null}
    <h1 className="text-slate-600">Überschrift H1</h1>
    <h2 className="text-slate-600">Überschrift H2</h2>
    <h3 className="text-slate-600">Überschrift H3</h3>
    <h4 className="text-slate-600">Überschrift H4</h4>
    <p className="text-lg text-slate-600">
      Paragraph L – Quia aut et aut. Sunt et eligendi similique enim qui quo
      minus. Aut aut error velit voluptatum optio sed quis cumque error magni.
    </p>
    <p className="text-slate-600">
      Paragraph M – Quia aut et aut. Sunt et eligendi similique enim qui quo
      minus. Aut aut error velit voluptatum optio sed quis cumque error magni.
      Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae
      quos excepturi ut deleniti ut repellat magni. M
    </p>
    <p className="text-xs text-slate-300">Placeholder</p>
  </>
);
