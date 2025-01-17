import { NumberCards } from '@/components/NumberCards';
import { BarInteractiveChart } from '@/components/Charts/BarInteractiveChart'
import { UserManage } from '@/components/Tables/UserManage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AdminDashboard({ data }: any) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 max-w-[1280px] w-full mx-auto">
            {/* Displaying number cards */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                {data?.allList?.map((list: { title: string; value: number }, index: number) => (
                    <NumberCards key={index} title={list.title} value={list.value ?? 0} />
                ))}
            </div>
            <div className="grid">
                <BarInteractiveChart />
            </div>
            <div className="grid">
                <UserManage />
            </div>
        </div>
    );
}
