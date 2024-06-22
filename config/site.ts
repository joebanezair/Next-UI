export type SiteConfig = typeof siteConfig;
import jsontext from '@/styles/globalstrings.json'
export const siteConfig = {
  name: jsontext.English.globalTextEnglish.UtosLogo,
  description: "Being with Joe is the best experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Sign-in",
      href: "/login",
    },
    {
      label: "Sign-up",
      href: "/signup",
    }
  ],
  
  navMenuItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Discord",
      href: "/home",
    },
    {
      label: "Twitter",
      href: "/about",
    },
    {
      label: "Sign-in",
      href: "/login",
    },
    {
      label: "Sign-up",
      href: "/signup",
    }
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
