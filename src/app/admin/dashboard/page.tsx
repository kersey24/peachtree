import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function AdminDashboardPage() {
    return (
        <>
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-[60px] items-center border-b px-6 dark:border-gray-800">
                            <Link className="flex items-center gap-2 font-semibold" href="#">
                                <TennisRacketIcon className="h-12 w-12" />
                                <span className="ml-2">Admin Dashboard</span>
                            </Link>
                        </div>
                        <div className="flex-1 overflow-auto py-2">
                            <nav className="grid items-start px-4 text-sm font-medium">
                                <LinkMenuItem href="#" icon={<MembersIcon />} title="Members" />
                                <LinkMenuItem href="#" icon={<ScheduleIcon />} title="Court Scheduling" />
                                <LinkMenuItem href="#" icon={<CalendarIcon />} title="Events" />
                                <LinkMenuItem href="#" icon={<LessonIcon />} title="Lessons" />
                                <LinkMenuItem href="#" icon={<SettingsIcon />} title="Settings" />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-black">
                    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                        {/* Header Content */}
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                        <div className="flex items-center">
                            <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Cards showing stats like Active Members, Upcoming Events, etc. */}
                            <Card>
                                <CardContent className="flex flex-col items-center gap-2 p-4">
                                    <UsersIcon className="h-8 w-8 text-blue-500" />
                                    <h2 className="text-2xl font-bold">350</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Active Members</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center gap-2 p-4 align-middle">
                                    <CalendarIcon className="h-8 w-8 text-green-500" />
                                    <h2 className="text-2xl font-bold">15</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Upcoming Events</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center gap-2 p-4">
                                    <CreditCardIcon className="h-8 w-8 text-yellow-500" />
                                    <h2 className="text-2xl font-bold">$5,000</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Recent Payments</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center gap-2 p-4">
                                    <ClipboardIcon className="h-8 w-8 text-red-500" />
                                    <h2 className="text-2xl font-bold">8</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Pending Tasks</p>
                                </CardContent>
                            </Card>
                        </div>
                        <section className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
                            <h2 className="font-semibold text-lg md:text-2xl">Latest Activity</h2>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                                        <SmallCalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-lg font-bold">Seniors (65+) Tournament</div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">10:00 AM - 11:00 AM</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-sm font-medium">Today's Schedule</CardTitle>
                                        <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-lg font-bold">Ladies Night</div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">4:00 PM - 6:00 PM</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-sm font-medium">Recent Memberships</CardTitle>
                                        <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-lg font-bold">John Doe</div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Active Member</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                        <div className="flex flex-col gap-4">
                            <h2 className="font-semibold text-lg md:text-2xl">Quick Actions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Button className="h-14" variant="outline">Add New Member</Button>
                                <Button className="h-14" variant="outline">Schedule Court</Button>
                                <Button className="h-14" variant="outline">Plan Event</Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

interface LinkMenuItemProps {
    href: string;
    icon: React.ReactNode;
    title: string;
}

function LinkMenuItem({ href, icon, title }: LinkMenuItemProps) {
    return (
        <Link
            className="flex items-center gap-1 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={href}
        >
            {icon}
            <span>{title}</span>
        </Link>
    );
}

function MembersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            {/* SVG path for members icon */}
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function TennisRacketIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="16" cy="8" r="6" />
            <path d="M8 16l8-8" />
        </svg>
    );
}

function ScheduleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
        </svg>
    );
}

function SmallCalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
        </svg>
    )
}

function LessonIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M21 4v16H8" />
            <path d="M3 4v16h13" />
            <path d="M8 4v16" />
            <line x1="8" y1="12" x2="21" y2="12" />
        </svg>
    );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15l2.6 1.5-1 2.5-2.6-1.5" />
            <path d="M6.6 9l-2.6-1.5 1-2.5 2.6 1.5" />
            <path d="M20 12c0 1.2-.3 2.3-.8 3.2l1.8 1.1-1 2.5-2-1.2" />
            <path d="M4 12c0-1.2.3-2.3.8-3.2L3 7.7l1-2.5 2 1.2" />
            <path d="M12 4v2" />
            <path d="M12 20v-2" />
        </svg>
    );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
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

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
    )
}