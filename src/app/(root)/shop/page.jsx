import server from "@/utils/server";
import React from "react";

export default async function page() {
  const res = await fetch(`${server}/api/auth/signup`, {
    method: "GET",
    cache: "no-cache",
  });
  return <div>shop</div>;
}
