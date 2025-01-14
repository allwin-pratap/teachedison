"use client"

import { ChevronsUpDown, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useRoleStore } from "@/store/useRoleStore"  // Import the zustand store

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  const { role, setRole } = useRoleStore()  // Access the current role and setRole function from zustand

  const handleRoleChange = (newRole: "admin" | "student" | "instructor") => {
    setRole(newRole) // Update the role in zustand
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {
                role === 'student' ? (
                  <>
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">AP</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Allwin Pratap</span>
                      <span className="truncate text-xs">Student</span>
                    </div>
                  </>
                ) : role === 'instructor' ? (
                  <>
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">TP</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Tom Pratap</span>
                      <span className="truncate text-xs">Instructor</span>
                    </div>
                  </>
                ) : role === 'admin' ? (
                  <>
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">AD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Admin</span>
                      <span className="truncate text-xs">Admin</span>
                    </div>
                  </>
                ) : (
                  <div>No role selected</div>
                )
              }
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white dark:bg-gray-900"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {/* <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">AP</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem className="cursor-pointer" onClick={() => handleRoleChange("student")}>
              <Sparkles />
              Students
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => handleRoleChange("instructor")}>
              <Sparkles />
              Instructors
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => handleRoleChange("admin")}>
              <Sparkles />
              Admin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
