/* src/PageProvider.tsx */
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import theme from "./theme";
interface PageProviderProps {
  children: ReactNode;
}
const PageProvider = ({ children }: PageProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default PageProvider;