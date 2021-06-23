import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
  }
}

export const darkTheme: DefaultTheme = {
  textColor: "#fff",
	primaryColor: "#38BCFF",
  secondaryColor: "#31313C",
  tertiaryColor: "#282834",
};