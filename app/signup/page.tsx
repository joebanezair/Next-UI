"use client";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import AccountFormSignUp from "../uilib/AccountFormSignUp";

export default function SignUp() {

  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
       <AccountFormSignUp />
      </div>
    </>
  );
}
 