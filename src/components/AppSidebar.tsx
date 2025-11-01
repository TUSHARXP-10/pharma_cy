import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar-aceternity";
import {
  IconHome,
  IconInfoCircle,
  IconPackage,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AppSidebar = () => {
  const location = useLocation();
  
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className={cn(
          "h-5 w-5 shrink-0 transition-colors",
          location.pathname === "/" ? "text-primary" : "text-neutral-700 dark:text-neutral-200"
        )} />
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <IconInfoCircle className={cn(
          "h-5 w-5 shrink-0 transition-colors",
          location.pathname === "/about" ? "text-primary" : "text-neutral-700 dark:text-neutral-200"
        )} />
      ),
    },
    {
      label: "Products",
      href: "/products",
      icon: (
        <IconPackage className={cn(
          "h-5 w-5 shrink-0 transition-colors",
          location.pathname === "/products" ? "text-primary" : "text-neutral-700 dark:text-neutral-200"
        )} />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconMail className={cn(
          "h-5 w-5 shrink-0 transition-colors",
          location.pathname === "/contact" ? "text-primary" : "text-neutral-700 dark:text-neutral-200"
        )} />
      ),
    },
  ];
  
  const [open, setOpen] = useState(false);
  
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink 
                key={idx} 
                link={link}
                className={cn(
                  location.pathname === link.href && "bg-neutral-200 dark:bg-neutral-700 rounded-lg"
                )}
              />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "MedCare",
              href: "#",
              icon: (
                <div className="h-7 w-7 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  M
                </div>
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black dark:text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-primary" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        MedCare
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black dark:text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-primary" />
    </a>
  );
};
