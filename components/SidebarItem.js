"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

export default function SidebarItem({ item }) {
  //estado
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-dashed cursor-pointer">
      <p
        //diferente do que estiver false ou true
        onClick={() => setOpen(!open)}
        className="p-2 flex justify-between 
            hover:bg-zinc-800
            "
      >
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={item.icon} className="w-5" />
          {item.name}
        </span>
        <FontAwesomeIcon
          data-hidden={open}
          icon={faChevronDown}
          //mudando a seta para cima quando for clicado 
          className="w-4    data-[hidden=true]:rotate-180 transition-all" 
        />
      </p>
      {/* escondendo o menu usando a classe hidden */}
      <ul
        data-hidden={open}
        className="hidden 
    data-[hidden=true]:block
    "
      >
        {item.subMenu.map((subMenu) => {
          return (
            <li className="hover:bg-zinc-800 pl-6 py-1">
              - <Link href={subMenu.href}>{subMenu.name}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
