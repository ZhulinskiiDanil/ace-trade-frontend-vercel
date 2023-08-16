import { createPage } from "@/shared/libs/pages-router";

export const products = [
  createPage("/products/[productId]", "productById")
]