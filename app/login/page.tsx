"use client";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import AccountForm from "../uilib/AccountForm";

export default function Login() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
       <AccountForm />
      </div>
    </>
  );
}
 