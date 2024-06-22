"use client";

import { useState } from "react";
import AccountForm from "./uilib/AccountForm";
import AccountFormSignUp from "./uilib/AccountFormSignUp";
import { Navbar } from "@/components/navbar";
import { Button } from "@nextui-org/button";
import { FcParallelTasks } from "react-icons/fc";
import { FcSerialTasks } from "react-icons/fc";
import HomePage from "./home/page";

export default function Home() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <HomePage />
      </div>
    </>
  );
}
 