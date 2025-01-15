'use client';
import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type UpcomingItem = {
  title: string;
  type: string;
  tag: string;
  icon: string;
  icon_alt: string;
  days: string;
  btn: string;
  btn_url: string;
};

type UpComingProps = {
  upcoming?: UpcomingItem[];
  title?: string;
};

export function UpcomingCourse({ title, upcoming }: UpComingProps) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title ?? 'Upcoming'}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-6 sm:pt-0 pb-0">
        <div className="grid w-full items-center gap-4 min-h-[185px] max-h-[185px] overflow-y-scroll hide-scroll">
          {upcoming?.map((item, index) => (
            <div key={index} className="flex justify-between sm:flex-col md:flex-row lg:items-center last:mb-[10px]">
              <div className="flex items-start">
                <div className="rounded-[5px] bg-[#F7F7F5] p-[10px]">
                  <Image src={item.icon} width={24} height={24} alt={item.icon_alt} />
                </div>
                <div className="pl-[10px]">
                  <p className="text-[16px] font-semibold text-black dark:text-white">{item.title}</p>
                  <p className="text-[14px] text-black opacity-60 dark:text-white">{item.type}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:pt-[5px] md:pt-0 sm:flex-row-reverse md:flex-row gap-[10px] pl-[10px] sm:pl-0 md:pl-[10px]">
                <p className="text-[14px] text-black opacity-60 dark:text-white">{item.days} days to go</p>
                <Link className="text-[14px] text-black/60 hover:text-black transition-all duration-300 ease-in-out border border-black/60 hover:border-black/60 block rounded-[5px] py-1.5 px-2 dark:text-white dark:border-white" href={`/`}>{item.btn}</Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

