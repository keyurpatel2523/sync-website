import { Metadata } from "next";
import Home from "./home/page";

export const metadata: Metadata = {
  title: "SYNC",
  description: "SYNC",
  // other metadata
};

export default function Page() {
  return (
    <Home />
  );
}
