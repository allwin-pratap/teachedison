import AdminDashboard from '@/templates/AdminDashboard';
import data from '@/data/dashboard.json';

export const metadata = {
  title: 'Admin',
  description: 'Dashboard',
};


export default async function Page() {
  return (
    <AdminDashboard data={data?.admin?.dashboard} />
  );
}
