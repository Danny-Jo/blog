import { NextFont } from "next/dist/compiled/@next/font";

export interface LinkData {
  github: string;
}

export type PathData = Path[];

type Path = {
  href: string;
  name: string;
};
