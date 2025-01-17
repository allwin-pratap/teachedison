import StudentDashboard from '@/templates/StudentDashboard';
import data from '@/data/dashboard.json';

export const metadata = {
    title: 'Student',
    description: 'Dashboard',
};


export default async function Page() {
    return (
        <StudentDashboard data={data?.student?.dashboard} />
    );

}
