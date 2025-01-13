
import { RadialChart } from '@/components/Charts/RadialChart'
import { AreaWeeklyChart } from '@/components/Charts/AreaWeeklyChart'
import { CourseBarChart } from '@/components/Charts/CourseBarChart'
import { UpcomingCourse } from '@/components/UpcomingCourse'
import { MyCourse } from '@/components/MyCourse';
import { NumberCards } from '@/components/NumberCards';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 max-w-[1280px] w-full mx-auto">
      <div className="grid auto-rows-min gap-4 grid-cols-2 sm:grid-cols-4">
        <NumberCards title={`Completed`} value={68} />
        <NumberCards title={`To do`} value={32} />
        <NumberCards title={`In Progress`} value={23} />
        <NumberCards title={`On Hold`} value={10} />
      </div>
      <div className="grid auto-rows-min gap-4 grid-cols-1 sm:grid-cols-2">
        <div>
          <RadialChart />
        </div>
        <div className="">
          <UpcomingCourse />
        </div>
      </div>
      <div className="grid auto-rows-min gap-4 grid-cols-1 sm:grid-cols-2">
        <CourseBarChart />
        <AreaWeeklyChart />
      </div>
      <div className="grid auto-rows-min gap-4 grid-cols-1">
        <MyCourse />
      </div>
    </div>
  )
}
