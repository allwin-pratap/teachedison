import RoleDashboard from "@/templates/RoleDashboard";
import data from '../data/dashboard.json';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default async function Page() {

  return <RoleDashboard data={data} />;
  
}
