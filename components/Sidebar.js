"use client";
import React from "react";


import {
  faCartShopping,

  faMoneyBill,
  faTruckFast,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { useSession } from "next-auth/react";

export default function Sidebar() {

  const {data:session}=useSession();
  return (
 
    <aside className="bg-zinc-900 h-full p-4 w-[250px] text-white fixed">
           {/* fixed completa a largura*/}
      <Link href="/">
        <Image
          src="/image/logo-sistema-web-pro-max.png"
          width={150}
          height={150}
          className="block mx-auto"
        />
      </Link>
      {/* navbar contain icon  */}

      <nav className="mt-8">
        <ul>
          {items.map((item, i) => {
            //retornando condicionalmente
            if(session?.user.role !=="admin" && item.name=="Usuario"){
              return;
            } else{
              return (
                <SidebarItem item={item}/>
                );
            }
         
          
          })}
        </ul>
      </nav>
    </aside>
  );
}
//lista de items e submenu

const items = [
  {
    name: "Usuario",
    icon: faUsers,
    subMenu:[
        {
            name:'Criar Usuarios',
            href: '/users/create',
        },
        {
            name:'Listar Usuarios',
            href: '/users',
        },
    ],
  },
  {
    name: "Productos",
    icon: faCartShopping,
    subMenu:[
        {
            name:'Criar Producto',
            href: '/products/create',
        },
        {
            name:'Listar Produtctos ',
            href: '/products',
        },
    ],
  },
  {
    name: "Vendas",
    icon: faMoneyBill,
    subMenu:[
        {
            name:'Criar Usuarios',
            href: '/users/create',
        },
        {
            name:'Listar Usuarios',
            href: '/users',
        },
    ],
  },
  {
    name: "Fornecedores",
    icon: faTruckFast,
    subMenu:[
        {
            name:'Criar Usuarios',
            href: '/users/create',
        },
        {
            name:'Listar Usuarios',
            href: '/users',
        },
    ],
  },
  {
    name: "Armazens",
    icon: faWarehouse,
    subMenu:[
        {
            name:'Criar Usuarios',
            href: '/users/create',
        },
        {
            name:'Listar Usuarios',
            href: '/users',
        },
    ],
  },
];
