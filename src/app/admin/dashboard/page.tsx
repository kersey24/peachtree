import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

export default function AdminDashboard() {
    const users: UserDetails[] = [ // mock data
        { name: 'John Doe', lastPlayedOn: '2024-01-17', status: 'Last active 8 days ago' },
        { name: 'Jane Smith', lastPlayedOn: '2024-01-16', status: 'Active' },
        { name: 'Robert Johnson', lastPlayedOn: '2024-01-15', status: 'Last active 3 hours ago' },
        { name: 'Emily Davis', lastPlayedOn: '2024-01-14', status: 'Last active yesterday' },
        { name: 'Michael Brown', lastPlayedOn: '2024-01-13', status: 'Active' },
    ]; // TODO: This should be fetched from the server instead

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <AdminSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6 py-8">
                        <UsersTable users={users} />
                    </div>
                </main>
            </div>
        </div>
    )
}

function Header() {
    return (
        <header className="flex items-center justify-between px-10 py-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Manage Users</h2>
            <div className="flex items-center space-x-1">
                <Button size="sm" variant="outline">
                    Add New User
                </Button>
            </div>
        </header>
    )
}

function AdminSidebar() {
    return <div className="flex flex-col w-64 border-r dark:border-gray-800 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-center shadow-md p-3">
            <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Peach Tree Racquet Club Admin</span>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
                <li>
                    <Link
                        className="flex items-center px-5 py-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <LinkIcon className="w-5 h-5" />
                        <span className="ml-2 text-sm font-semibold">Manage Users</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center px-5 py-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <CourtIcon className="w-5 h-5" />
                        <span className="ml-2 text-sm font-semibold">Update Availability</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center px-5 py-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <BarChartIcon className="w-5 h-5" />
                        <span className="ml-2 text-sm font-semibold">View Analytics</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center px-5 py-2 text-gray-600 dark:text-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <UserIcon className="w-5 h-5" />
                        <span className="ml-2 text-sm font-semibold">Account Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    )
}

function CourtIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm1 0v10h14V5H3zm7 7a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}

// export function UsersTable() {
//     return (
//         <div className="border rounded-lg w-full">
//             <div className="relative w-full overflow-auto">
//                 <Table>
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead className="w-[32px]">
//                                 <Checkbox id="select-all" />
//                             </TableHead>
//                             <TableHead className="w-[100px]">Name</TableHead>
//                             <TableHead>Last Played On</TableHead>
//                             <TableHead>Status</TableHead>
//                             <TableHead className="w-[100px]">Actions</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         <TableRow>
//                             <TableCell>
//                                 <Checkbox id="select-1" />
//                             </TableCell>
//                             <TableCell className="font-medium">John Doe</TableCell>
//                             <TableCell>2024-01-17</TableCell>
//                             <TableCell>Active</TableCell>
//                             <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <a className="text-indigo-600 hover:text-indigo-900" href="#">
//                                     Edit
//                                 </a>
//                             </TableCell>
//                         </TableRow>
//                         <TableRow>
//                             <TableCell>
//                                 <Checkbox id="select-2" />
//                             </TableCell>
//                             <TableCell className="font-medium">Jane Smith</TableCell>
//                             <TableCell>2024-01-16</TableCell>
//                             <TableCell>Inactive</TableCell>
//                             <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <a className="text-indigo-600 hover:text-indigo-900" href="#">
//                                     Edit
//                                 </a>
//                             </TableCell>
//                         </TableRow>
//                         <TableRow>
//                             <TableCell>
//                                 <Checkbox id="select-3" />
//                             </TableCell>
//                             <TableCell className="font-medium">Robert Johnson</TableCell>
//                             <TableCell>2024-01-15</TableCell>
//                             <TableCell>Active</TableCell>
//                             <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <a className="text-indigo-600 hover:text-indigo-900" href="#">
//                                     Edit
//                                 </a>
//                             </TableCell>
//                         </TableRow>
//                         <TableRow>
//                             <TableCell>
//                                 <Checkbox id="select-4" />
//                             </TableCell>
//                             <TableCell className="font-medium">Emily Davis</TableCell>
//                             <TableCell>2024-01-14</TableCell>
//                             <TableCell>Inactive</TableCell>
//                             <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <a className="text-indigo-600 hover:text-indigo-900" href="#">
//                                     Edit
//                                 </a>
//                             </TableCell>
//                         </TableRow>
//                         <TableRow>
//                             <TableCell>
//                                 <Checkbox id="select-5" />
//                             </TableCell>
//                             <TableCell className="font-medium">Michael Brown</TableCell>
//                             <TableCell>2024-01-13</TableCell>
//                             <TableCell>Active</TableCell>
//                             <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <a className="text-indigo-600 hover:text-indigo-900" href="#">
//                                     Edit
//                                 </a>
//                             </TableCell>
//                         </TableRow>
//                     </TableBody>
//                 </Table>
//             </div>
//         </div>
//     )
// }
export const UsersTable = ({ users }: { users: UserDetails[] }) => (
    <div className="border rounded-lg w-full">
        <div className="relative w-full overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[32px]">
                            <Checkbox id="select-all" />
                        </TableHead>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Last Played On</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map(user => <UserRow key={user.name} {...user} />)}
                </TableBody>
            </Table>
        </div>
    </div>
);

interface UserDetails {
    name: string;
    lastPlayedOn: string;
    status: string;
}

const UserRow = ({ name, lastPlayedOn, status }: UserDetails) => (
    <TableRow>
        <TableCell>
            <Checkbox id={`select-${name}`} />
        </TableCell>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell>{lastPlayedOn}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a className="text-indigo-600 hover:text-indigo-900" href="#">
                Edit
            </a>
        </TableCell>
    </TableRow>
);