import InstructorDashboard from '@/templates/InstructorDashboard';
import data from '@/data/dashboard.json';

export const metadata = {
    title: 'Instructor',
    description: 'Dashboard',
};


export default async function Page() {
    return (
        <InstructorDashboard data={data?.instructor?.dashboard} />
    );

}
