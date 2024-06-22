"use client"; //this is very important to declare functions
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React, { useState } from "react";
import jsontext from '@/styles/globalstrings.json'
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { FcSerialTasks } from "react-icons/fc";
import { FcParallelTasks } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import { useRouter } from "next/navigation";
import { ThemeSwitch } from "@/components/theme-switch";

const AccountForm: React.FC =()=> {
  const enter_usn = jsontext.English.components.login.usernamePlaceholder;  //variables
  const enter_pass = jsontext.English.components.login.passwordPlaceholder; //variables

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const LoginHandle =()=>{
    alert(`your email: ${email}, your password: ${password}`)
    router.push('/home')
  }

  return (<>
    <div style={{maxWidth: 500}} className="mx-auto">
      <Card className="py-4 rounded-md w-126 max-w-126">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="text-large font-bold">{jsontext.English.globalTextEnglish.UtosLogo}</h3>
        </CardHeader>
        <CardBody className="pb-0 pt-2 px-4 flex-col items-start overflow-visible py-0">
         <div className="flex w-full mt-3 mb-3 flex-wrap md:flex-nowrap gap-2">
          <Input type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            label={enter_usn} />
          <Input type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}} 
            label={enter_pass} />
         </div>
         <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Button
              isExternal
              as={Link}
              onClick={LoginHandle}
              className="text-sm font-bold text-base text-default-600 bg-default-100"
              startContent={<FcParallelTasks className="text-danger" />}
              variant="flat">
            {jsontext.English.globalTextEnglish.Login}
          </Button>
          <Button
              isExternal
              as={Link}
              className="text-sm font-bold text-base text-default-600 bg-default-100"
              startContent={<FcSerialTasks className="text-danger" />}
              variant="flat">
            {jsontext.English.globalTextEnglish.Signup}
          </Button>

          <Button isIconOnly className="text-sm font-bold text-base text-default-600 bg-default-100">
            <ThemeSwitch />
          </Button>
        
         </div>
         <div style={{width: '100%'}} className="mt-3 mb-0 border-b-1 border-indigo" />
         

        <div className="mt-3 mb-0 flex w-full flex-wrap md:flex-nowrap gap-2">
             
            <Button 
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={jsontext.English.globalTextEnglish.Phinnovatech}
              startContent={<FaYoutube size={20} />}
              variant="flat">
              YouTube
            </Button>


            <Button 
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={jsontext.English.globalTextEnglish.Phinnovatech}
              startContent={<ImLinkedin size={20} />}
              variant="flat">
              LinkedIn Group
            </Button>

            <Button 
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={jsontext.English.globalTextEnglish.FBGroup}
              startContent={<FaFacebookSquare size={20} />}
              variant="flat">
              Facebook Group
            </Button>
            
        </div> 

        <div className="mt-3 text-base" style={{widows: '100%'}}>
          {jsontext.English.globalTextEnglish.GetStarted}
        </div>

        <div className="mt-0 text-sm" style={{widows: '100%', cursor:'pointer', fontWeight: 'bold'}}>
          Help us improve?
        </div>



        </CardBody>
      </Card>
    </div>
  </>);
}

export default AccountForm;