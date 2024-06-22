import { FcSerialTasks } from "react-icons/fc";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { FcParallelTasks } from "react-icons/fc";
import { title, subtitle } from "@/components/primitives";
import jsontext from '@/styles/globalstrings.json'
import './home.css'
import { useAuth } from "../authfirebase/AuthContext";

export default function HomePage() {
  const { currentUser } = useAuth();
  return (
    <div>
      <div>
        {currentUser ? <div>logged</div>:<div>!logged</div>}
      </div>
    <section id="home-back-image" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({color: "blue"})}>{jsontext.English.advertisement.with}&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>{jsontext.English.globalTextEnglish.UtosLogo}&nbsp;</h1>
        <br />
        <h1 className={title()}>
          {jsontext.English.advertisement.getAjob}
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          {jsontext.English.advertisement.weProvide}
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={'/login'}>
          <FcParallelTasks size={20} />
          {jsontext.English.globalTextEnglish.Login}
        </Link>
        
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={'/signup'}>
          <FcSerialTasks size={20} />
          {jsontext.English.globalTextEnglish.Signup}
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by <Code color="primary">Creating an Account</Code>
          </span>
        </Snippet>
      </div>
    </section>
    </div>
  );
}
