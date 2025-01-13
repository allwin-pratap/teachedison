"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function NumberCards(props: {title: string; value: number}) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="pb-3">
                <CardTitle>{props?.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="text-[35px]">
                {props?.value}
                </div>
            </CardContent>
        </Card>
    )
}
