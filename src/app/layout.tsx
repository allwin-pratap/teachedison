'use client';

import { Outfit } from 'next/font/google';
import { useThemeStore } from '@/store/themestore';
import ThemeToggle from '../components/ThemeToggle';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { AppSidebar } from '@/components/app-sidebar';
import { ReactNode, useEffect } from 'react';
import { NavActions } from "@/components/nav-actions"
import './globals.css';
import {
  Bell,
  LineChart,
  Settings2,
  CircleUserRound,
  LogOut
} from "lucide-react";

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '800'], // Choose the weights you need
  subsets: ['latin'], // Choose the character subsets you need
});

// Action groups for the first NavActions
const dataOne = [
  [
    {
      label: "Upcoming class on SDE 1",
      icon: LineChart,
    },
  ],
  [
    {
      label: "Assigment is pending on DSA 1",
      icon: LineChart,
    },
  ],
];

// Action groups for the second NavActions
const dataTwo = [
  [
    {
      label: "Profile",
      icon: CircleUserRound,
    },
    {
      label: "Settings",
      icon: Settings2,
    }
  ],
  [
    {
      label: "LogOut",
      icon: LogOut,
    },
  ],
];

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  // Sync Zustand state with localStorage on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme); // Update Zustand state based on localStorage
    } else {
      localStorage.setItem('theme', theme); // Initialize localStorage
    }
  }, [setTheme, theme]);

  // Apply theme class to the <html> element
  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark' : 'light';
  }, [theme]);

  const getInitialTheme = () => {
    if (typeof window === "undefined") {
      // Server-side: Default to light theme
      return "light";
    }

    // Client-side: Check localStorage or system preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme || (prefersDark ? "dark" : "light");
  };

  // Apply the initial theme dynamically
  const initialTheme = getInitialTheme();

  return (
    <html lang="en" className={initialTheme} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = storedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.className = theme;
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.className} bg-white dark:bg-gray-900 text-black dark:text-white`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-1 flex-col">
            <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-white dark:bg-gray-900 border-b border-[hsl(220,13%,91%)] z-10">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4 bg-[#e5e7eb]" />
                <p>Dashboard</p>
              </div>
              <div className="flex items-center gap-2 mr-4">
                <ThemeToggle />
                <NavActions data={dataOne} icon={Bell} />
                <NavActions data={dataTwo} icon={CircleUserRound} />
              </div>
            </header>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
