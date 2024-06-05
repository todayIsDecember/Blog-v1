import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputToggleProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  theme: string
}