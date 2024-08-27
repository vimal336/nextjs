"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function About() {
  const searchParams = useSearchParams();

  const paramValue = searchParams.get('paramName');

  return (
    <div>
      <p>Query Parameter Value: {paramValue}</p>
    </div>
  );
};