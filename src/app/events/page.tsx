import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function EventsPage() {
    const events = [
        {
            href: "/events/event1",
            imgSrc: "/tennis-tournament.jpg",
            imgAlt: "Tennis Tournament",
            title: "Annual Club Championship",
            date: "May 15, 2024",
            description: "Join our premier tennis tournament, open to all skill levels.",
        },
        {
            href: "/events/event2",
            imgSrc: "/tennis-workshop.jpg",
            imgAlt: "Tennis Workshop",
            title: "Junior Tennis Workshop",
            date: "June 8, 2024",
            description: "A workshop for juniors to learn and improve their tennis skills.",
        },
        {
            href: "/events/event3",
            imgSrc: "/social-tennis.jpg",
            imgAlt: "Social Tennis Gathering",
            title: "Tennis Social Night",
            date: "July 20, 2024",
            description: "An evening of fun, social tennis games, and networking.",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <Header />
                    <SearchForm />
                </div>
                <EventsGrid events={events} />
            </div>
        </section>
    );
}

function Header() {
    return <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Upcoming Events
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore upcoming tournaments, workshops, and social gatherings happening at Peach Tree.
            </p>
        </div>
    </div>
}

// TODO: More rich search experience
// TODO: Add a filter dropdown to filter events by age group and/or skill level
// <Select>
//     <SelectTrigger className="w-[160px]">
//         <SelectValue placeholder="Filter by Age" />
//     </SelectTrigger>
//     <SelectContent>
//         <SelectItem value="all">All Ages</SelectItem>
//         <SelectItem value="kids">Kids</SelectItem>
//         <SelectItem value="teens">Teens</SelectItem>
//         <SelectItem value="adults">Adults</SelectItem>
//         <SelectItem value="seniors">Seniors</SelectItem>
//     </SelectContent>
// </Select>

function SearchForm() {
    return (
        <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Search events" type="search" />
                <Button type="submit">Search</Button>
            </form>
            <Link className="hover:underline text-sm text-gray-500 dark:text-gray-400" href="/events/past">
                View past events
            </Link>
        </div>
    );
}

interface EventCardProps {
    href: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
    date: string;
    description: string;
}

function EventCard({ href, imgSrc, imgAlt, title, date, description }: EventCardProps) {
    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-gray-200 dark:border-gray-800">
            <Link className="absolute inset-0 z-10" href={href}>
                <span className="sr-only">View Event</span>
            </Link>
            <img
                alt={imgAlt}
                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full lg:order-last"
                src={imgSrc}
                width={500}
                height={310}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-sm text-gray-500">{date}</p>
                <p className="text-sm pt-4">{description}</p>
                <Link className="mt-4 inline-flex items-center text-blue-600 hover:underline" href="#">
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}

const EventsGrid = ({ events }: { events: EventCardProps[] }) => (
    <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {events.map((event, index) => (
            <EventCard
                key={index}
                href={event.href}
                imgSrc={event.imgSrc}
                imgAlt={event.imgAlt}
                title={event.title}
                date={event.date}
                description={event.description}
            />
        ))}
    </div>
);

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}