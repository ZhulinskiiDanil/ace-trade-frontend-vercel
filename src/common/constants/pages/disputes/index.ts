import { createPage } from "@/shared/libs/pages-router";

export const disputes = [
  createPage("/disputes/[disputeId]", "disputeById")
]