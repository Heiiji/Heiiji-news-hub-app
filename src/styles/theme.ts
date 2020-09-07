import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    primaryColor: string;
    secondaryColor: string;
  }
}

export const darkTheme: DefaultTheme = {
    textColor: "#fff",
	primaryColor: "#38BCFF",
	secondaryColor: "#cacaca",
};