import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

export default function DashboardPage() {
    const slots: ReservationSlot[] = [ // mock data
        { date: 'January 1, 2021', timeSlot: '10:00 - 11:00', status: 'Available' },
        { date: 'January 1, 2021', timeSlot: '11:00 - 12:00', status: 'Reserved' },
        { date: 'January 1, 2021', timeSlot: '12:00 - 13:00', status: 'Available' },
        { date: 'January 1, 2021', timeSlot: '13:00 - 14:00', status: 'Reserved' },
        { date: 'January 1, 2021', timeSlot: '14:00 - 15:00', status: 'Available' },
    ]; // TODO: This should be fetched from the server instead

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-2xl p-4 space-y-6">
                <h1 className="text-2xl font-bold text-center dark:text-white">Peach Tree Racquet Club Court Reservation</h1>
                <CalendarButton />
                <ReservationTable slots={slots} />
            </div>
        </div>
    )
}

function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}

const CalendarButton = () => (
    <Popover>
        <PopoverTrigger asChild>
            <Button className="w-[300px] justify-start text-left font-normal" id="date" variant="outline">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                Pick a date
            </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
            <Calendar initialFocus mode="range" numberOfMonths={1} />
        </PopoverContent>
    </Popover>
);

interface ReservationSlot {
    date: string;
    timeSlot: string;
    status: 'Available' | 'Reserved';
}

interface ReservationTableProps {
    slots: ReservationSlot[];
}

const ReservationTable = ({ slots }: ReservationTableProps) => (
    <div className="border rounded-lg shadow-sm">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[120px]">Day</TableHead>
                    <TableHead className="w-[100px]">Time Slot</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                        Reserve
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {slots.map(slot => (
                    <TableRow key={slot.date + slot.timeSlot}>
                        <TableCell className="font-medium">{slot.date}</TableCell>
                        <TableCell className="font-medium">{slot.timeSlot}</TableCell>
                        <TableCell>{slot.status}</TableCell>
                        <TableCell className="text-right">
                            {slot.status === 'Available' ? (
                                <Link href="/reserve">
                                    <Button variant="outline">Reserve</Button>
                                </Link>
                            ) : (
                                <Button variant="outline" disabled={true}>Unavailable</Button>
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
);