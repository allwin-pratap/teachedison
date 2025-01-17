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
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"

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

  const router = useRouter();

  const handleRoleChange = (newRole: "student" | "admin" | "instructor") => {
    router.push(`/${newRole}`);
  }

  // const [role, setRole] = useState<string>(""); // Default role
  const pathname = usePathname(); // Safely get the current route
  // Update the role dynamically based on the current route
  const [role, setRole] = useState<string>(() => {
    const slug = pathname.split("/")[1];
    if (slug === "admin") return "Admin";
    if (slug === "instructor") return "Instructor";
    if (slug === "student") return "Student";
    return ""; // Default value if no match
  });

  useEffect(() => {
    const slug = pathname.split("/")[1];
    if (slug === "admin") setRole("Admin");
    else if (slug === "instructor") setRole("Instructor");
    else if (slug === "student") setRole("Student");
  }, [pathname]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">SR</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Switch Role</span>
                <span className="truncate text-xs">{role}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white dark:bg-gray-900"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem className="cursor-pointer" onClick={() => handleRoleChange("student")}>
              <Sparkles />
              Student
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => handleRoleChange("instructor")}>
              <Sparkles />
              Instructor
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
