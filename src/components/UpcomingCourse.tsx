'use client';
import * as React from "react"
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const upcoming = [
  {
    title: "Course1",
    type: "Bussiness Management",
    tag: "in live",
    icon: "/assets/img/monitor-recorder.png",
    icon_alt: "live",
    btn: "Register",
    btn_url: "/"
  },
  {
    title: "Course2",
    type: "Management",
    tag: "",
    icon: "/assets/img/lamp-on.png",
    icon_alt: "live",
    btn: "Register",
    btn_url: "/"
  },
  {
    title: "Course2",
    type: "Management",
    tag: "",
    icon: "/assets/img/lamp-on.png",
    icon_alt: "live",
    btn: "Register",
    btn_url: "/"
  },
  {
    title: "Course1",
    type: "Bussiness Management",
    tag: "in live",
    icon: "/assets/img/monitor-recorder.png",
    icon_alt: "live",
    btn: "Register",
    btn_url: "/"
  },
]

export function UpcomingCourse() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Upcoming Course</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="grid w-full items-center gap-4 min-h-[225px] max-h-[225px] overflow-y-scroll hide-scroll">
          {upcoming.map((item, index) => (
            <div key={index} className="flex justify-between md:flex-col lg:flex-row last:mb-[10px]">
              <div className="flex items-start">
                <div className="rounded-[5px] bg-[#F7F7F5] p-[10px]">
                  <Image src={item.icon} width={24} height={24} alt={item.icon_alt} />
                </div>
                <div className="pl-[10px]">
                  <p>{item.title}</p>
                  <p>{item.type}</p>
                </div>
              </div>
              <Button className="mr-[5px]" variant="outline">Register</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

