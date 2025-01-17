"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Page() {

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Redirect only if the current path is the root
    if (pathname === "/") {
      router.push("/student");
    }
  }, [pathname, router]);

  return null; // No UI needed
}
