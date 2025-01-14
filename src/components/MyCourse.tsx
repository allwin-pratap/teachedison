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

type CourseItem = {
  title: string;
  type: string;
  tag: string;
  duration: string;
  date: string;
  icon: string;
  icon_alt: string;
  btn: string;
  btn_url: string;
};

type MyCourseProps = {
  myCourse?: CourseItem[];
  title?: string;
};

export function MyCourse({ title, myCourse }: MyCourseProps) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title ?? 'Courses'}</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="grid w-full items-center gap-4">
          {myCourse?.map((item, index) => (
            <div key={index} className="flex justify-between last:mb-[10px]">
              <div className="flex items-start">
                <div className="rounded-[5px] bg-[#F7F7F5] p-[10px]">
                  <Image src={item?.icon} width={24} height={24} alt={item?.icon_alt} />
                </div>
                <div className="pl-[10px]">
                  <p>{item.title}</p>
                  <div className="flex gap-[5px] flex-wrap">
                    <p className="flex gap-[5px] items-center">
                      <svg width="16" height="16" className="dark:invert" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6666 11.16V3.1133C14.6666 2.3133 14.0133 1.71996 13.22 1.78663H13.18C11.78 1.90663 9.65331 2.61996 8.46665 3.36663L8.35331 3.43996C8.15998 3.55996 7.83998 3.55996 7.64665 3.43996L7.47998 3.33996C6.29331 2.59996 4.17331 1.8933 2.77331 1.77996C1.97998 1.7133 1.33331 2.3133 1.33331 3.10663V11.16C1.33331 11.8 1.85331 12.4 2.49331 12.48L2.68665 12.5066C4.13331 12.7 6.36665 13.4333 7.64665 14.1333L7.67331 14.1466C7.85331 14.2466 8.13998 14.2466 8.31331 14.1466C9.59331 13.44 11.8333 12.7 13.2866 12.5066L13.5066 12.48C14.1466 12.4 14.6666 11.8 14.6666 11.16Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 3.66V13.66" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.16669 5.66H3.66669" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.66669 7.66H3.66669" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item.type}
                    </p>
                    <p className="flex gap-[5px] items-center">
                      <svg width="16" height="16" className="dark:invert" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6666 8.00001C14.6666 11.68 11.68 14.6667 7.99998 14.6667C4.31998 14.6667 1.33331 11.68 1.33331 8.00001C1.33331 4.32001 4.31998 1.33334 7.99998 1.33334C11.68 1.33334 14.6666 4.32001 14.6666 8.00001Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.4734 10.1198L8.40669 8.8865C8.04669 8.67317 7.75336 8.15983 7.75336 7.73983V5.0065" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item.duration}
                    </p>
                    <p className="flex gap-[5px] items-center">
                      <svg width="16" height="16" className="dark:invert" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2.125H11.375V1.5C11.375 1.40054 11.3355 1.30516 11.2652 1.23483C11.1948 1.16451 11.0995 1.125 11 1.125C10.9005 1.125 10.8052 1.16451 10.7348 1.23483C10.6645 1.30516 10.625 1.40054 10.625 1.5V2.125H5.375V1.5C5.375 1.40054 5.33549 1.30516 5.26516 1.23483C5.19484 1.16451 5.09946 1.125 5 1.125C4.90054 1.125 4.80516 1.16451 4.73484 1.23483C4.66451 1.30516 4.625 1.40054 4.625 1.5V2.125H3C2.76794 2.125 2.54538 2.21719 2.38128 2.38128C2.21719 2.54538 2.125 2.76794 2.125 3V13C2.125 13.2321 2.21719 13.4546 2.38128 13.6187C2.54538 13.7828 2.76794 13.875 3 13.875H13C13.2321 13.875 13.4546 13.7828 13.6187 13.6187C13.7828 13.4546 13.875 13.2321 13.875 13V3C13.875 2.76794 13.7828 2.54538 13.6187 2.38128C13.4546 2.21719 13.2321 2.125 13 2.125ZM3 2.875H4.625V3.5C4.625 3.59946 4.66451 3.69484 4.73484 3.76517C4.80516 3.83549 4.90054 3.875 5 3.875C5.09946 3.875 5.19484 3.83549 5.26516 3.76517C5.33549 3.69484 5.375 3.59946 5.375 3.5V2.875H10.625V3.5C10.625 3.59946 10.6645 3.69484 10.7348 3.76517C10.8052 3.83549 10.9005 3.875 11 3.875C11.0995 3.875 11.1948 3.83549 11.2652 3.76517C11.3355 3.69484 11.375 3.59946 11.375 3.5V2.875H13C13.0332 2.875 13.0649 2.88817 13.0884 2.91161C13.1118 2.93505 13.125 2.96685 13.125 3V5.125H2.875V3C2.875 2.96685 2.88817 2.93505 2.91161 2.91161C2.93505 2.88817 2.96685 2.875 3 2.875ZM13 13.125H3C2.96685 13.125 2.93505 13.1118 2.91161 13.0884C2.88817 13.0649 2.875 13.0332 2.875 13V5.875H13.125V13C13.125 13.0332 13.1118 13.0649 13.0884 13.0884C13.0649 13.1118 13.0332 13.125 13 13.125ZM8.875 9.5C8.875 9.67306 8.82368 9.84223 8.72754 9.98612C8.63139 10.13 8.49473 10.2422 8.33485 10.3084C8.17496 10.3746 7.99903 10.3919 7.8293 10.3582C7.65956 10.3244 7.50365 10.2411 7.38128 10.1187C7.25891 9.99635 7.17557 9.84044 7.14181 9.6707C7.10805 9.50097 7.12538 9.32504 7.19161 9.16515C7.25783 9.00527 7.36998 8.86861 7.51388 8.77246C7.65777 8.67632 7.82694 8.625 8 8.625C8.23206 8.625 8.45462 8.71719 8.61872 8.88128C8.78281 9.04538 8.875 9.26794 8.875 9.5Z" fill="black" />
                      </svg>
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mr-[5px]" variant="outline">View</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

