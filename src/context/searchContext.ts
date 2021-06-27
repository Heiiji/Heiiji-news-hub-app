import { createContext } from "react";

const defaultValue = {
  search: "",
};

const context = createContext(defaultValue);

export { defaultValue, context };
