import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICardBlog } from "../../../interfaces/cardBlog.interface";

export interface CardBlogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blog: ICardBlog
}