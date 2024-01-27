import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { EventCard, EventCardProps } from "../_components/event-card";

export default function EventsPage() {
  const events = [
    {
      href: "/events/event1",
      imgSrc: "/tennis-tournament.jpg",
      imgAlt: "Tennis Tournament",
      title: "Annual Club Championship",
      date: "May 15, 2024",
      description:
        "Join our premier tennis tournament, open to all skill levels.",
    },
    {
      href: "/events/event2",
      imgSrc: "/tennis-workshop.jpg",
      imgAlt: "Tennis Workshop",
      title: "Junior Tennis Workshop",
      date: "June 8, 2024",
      description:
        "A workshop for juniors to learn and improve their tennis skills.",
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
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Upcoming Events
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Explore upcoming tournaments, workshops, and social gatherings
          happening at Peach Tree.
        </p>
      </div>
    </div>
  );
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
        <Input
          className="max-w-lg flex-1"
          placeholder="Search events"
          type="search"
        />
        <Button type="submit">Search</Button>
      </form>
      <Link
        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
        href="/events/past"
      >
        View past events
      </Link>
    </div>
  );
}

const EventsGrid = ({ events }: { events: EventCardProps[] }) => (
  <div className="mt-8 grid gap-8 lg:grid-cols-3">
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
