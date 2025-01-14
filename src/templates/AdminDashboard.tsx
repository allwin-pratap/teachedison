// import { RadialChart } from '@/components/Charts/RadialChart'
// import { AreaWeeklyChart } from '@/components/Charts/AreaWeeklyChart'
// import { CourseBarChart } from '@/components/Charts/CourseBarChart'
// import { UpcomingCourse } from '@/components/UpcomingCourse'
// import { MyCourse } from '@/components/MyCourse';
import { NumberCards } from '@/components/NumberCards';
import { BarInteractiveChart } from '@/components/Charts/BarInteractiveChart'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AdminDashboard({ data }: any) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 max-w-[1280px] w-full mx-auto">
            {/* Displaying number cards */}
            <div className="grid auto-rows-min gap-4 grid-cols-2 sm:grid-cols-4">
                {data?.allList?.map((list: { title: string; value: number }, index: number) => (
                    <NumberCards key={index} title={list.title} value={list.value ?? 0} />
                ))}
            </div>
            <div className="grid">
                <BarInteractiveChart />
            </div>
        </div>
    );
}
