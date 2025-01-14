import { AreaWeeklyChart } from '@/components/Charts/AreaWeeklyChart'
import { UpcomingCourse } from '@/components/UpcomingCourse'
import { MyCourse } from '@/components/MyCourse';
import { NumberCards } from '@/components/NumberCards';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function InstructorDashboard({ data }: any) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 max-w-[1280px] w-full mx-auto">
            {/* Displaying number cards */}
            <div className="grid auto-rows-min gap-4 grid-cols-2 sm:grid-cols-4">
                {data?.allList?.map((list: { title: string; value: number }, index: number) => (
                    <NumberCards key={index} title={list.title} value={list.value ?? 0} />
                ))}
            </div>


            {/* WeeklyChart and Upcoming Course */}
            <div className="grid auto-rows-min gap-4 grid-cols-1 sm:grid-cols-2">
                <UpcomingCourse title={`Upcoming Batch`} upcoming={data?.upcoming} />
                <AreaWeeklyChart weeklyReport={data?.weeklyReport} />
            </div>

            {/* My Course Section */}
            <div className="grid auto-rows-min gap-4 grid-cols-1">
                <MyCourse title={`My Batch`} myCourse={data?.myCourse} />
            </div>
        </div>
    );
}
