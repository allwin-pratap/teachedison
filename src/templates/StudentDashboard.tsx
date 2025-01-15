import { RadialChart } from '@/components/Charts/RadialChart'
import { AreaWeeklyChart } from '@/components/Charts/AreaWeeklyChart'
import { CourseBarChart } from '@/components/Charts/CourseBarChart'
import { UpcomingCourse } from '@/components/UpcomingCourse'
import { MyCourse } from '@/components/MyCourse';
import { NumberCards } from '@/components/NumberCards';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StudentDashboard({ data }: any) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 max-w-[1280px] w-full mx-auto">
            {/* Displaying number cards */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                {data?.allList?.map((list: { title: string; value: number }, index: number) => (
                    <NumberCards key={index} title={list.title} value={list.value ?? 0} />
                ))}
            </div>


            {/* RadialChart and Upcoming Course */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
                <div className='md:col-span-2'>
                    <RadialChart score={data?.averageScore?.score ?? 0} />
                </div>
                <div className='md:col-span-3'>
                    <UpcomingCourse title={'Upcoming Course'} upcoming={data?.upcoming} />
                </div>
            </div>

            {/* Course Bar Chart and Weekly Area Chart */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <CourseBarChart courseAnalytics={data?.courseAnalytics} />
                <AreaWeeklyChart weeklyReport={data?.weeklyReport} />
            </div>

            {/* My Course Section */}
            <div className="grid gap-4 grid-cols-1">
                <MyCourse title={'My Course'} myCourse={data?.myCourse} />
            </div>
        </div>
    );
}
