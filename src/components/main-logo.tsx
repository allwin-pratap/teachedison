"use client"

import * as React from "react"
import Image from "next/image"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function MainLogo({
  logo,
}: {
  logo: {
    url: string
    alt: string
  }
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="max-w-[135px] dark:invert">
            <Image src={logo.url} width={230} height={50} priority={true} alt={logo.alt} />
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
