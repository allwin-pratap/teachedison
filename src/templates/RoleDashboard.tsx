"use client";

import React from "react";
import StudentDashboard from "./StudentDashboard";
import InstructorDashboard from "./InstructorDashboard";
import AdminDashboard from "./AdminDashboard";
import { useRoleStore } from "@/store/useRoleStore";

type StudentDashboardType = {
    totalUsers?: number;
    reports?: number;
    coursesCreated?: number;
    studentsTaught?: number;
    allList?: Array<{ title: string; value: number }>;
    averageScore?: { score: number };
    courseAnalytics?: {
        completed: number;
        toDo: number;
        progress: number;
        hold: number;
    };
    weeklyReport?: Array<{ week: string; percentage: number }>;
    upcoming?: Array<{
        title: string;
        type: string;
        tag: string;
        icon: string;
        icon_alt: string;
        btn: string;
        btn_url: string;
    }>;
    myCourse?: Array<{
        title: string;
        type: string;
        tag: string;
        duration: string;
        date: string;
        icon: string;
        icon_alt: string;
        btn: string;
        btn_url: string;
    }>;
};

interface DashboardData {
    student?: {
        dashboard?: StudentDashboardType;
    };
    instructor?: {
        dashboard: unknown;
    };
    admin?: {
        dashboard: unknown;
    };
}

export default function RoleDashboard({ data }: { data: DashboardData }) {
    const { role } = useRoleStore();

    return (
        <>
            {
                role === 'student' ? (
                    <StudentDashboard data={data?.student?.dashboard} />
                ) : role === 'instructor' ? (
                    <InstructorDashboard data={data?.instructor?.dashboard} />
                ) : role === 'admin' ? (
                    <AdminDashboard data={data?.admin?.dashboard} />
                ) : (
                    <div className="p-[50px] md:p-[200px]">No role selected</div>
                )
            }
        </>
    );
}
