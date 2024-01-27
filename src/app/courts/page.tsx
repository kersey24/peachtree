import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { CourtDetails } from "../_components/court-details";
import { CourtFilter } from "../_components/court-filter";

function getNextAvailableTime(courtNumber: number) {
  // TODO: replace w/ API call
  return "10:00 AM Feb 12 2024";
}

export default function CourtsPage() {
  const courts = [
    {
      number: 1,
      nextAvailableTime: "10:00 AM",
      isAvailable: true,
      surface: "Clay",
    },
    {
      number: 2,
      nextAvailableTime: "11:30 AM",
      isAvailable: false,
      surface: "Clay",
    },
    {
      number: 3,
      nextAvailableTime: "11:30 AM",
      isAvailable: false,
      surface: "Clay",
    },
    {
      number: 4,
      nextAvailableTime: "08:30 AM",
      isAvailable: false,
      surface: "Clay",
    },
    {
      number: 5,
      nextAvailableTime: "01:30 PM",
      isAvailable: false,
      surface: "Hard",
    },
    {
      number: 6,
      nextAvailableTime: "10:30 AM",
      isAvailable: false,
      surface: "Hard",
    },
  ];

  const faqs = [
    {
      question: "How long can a court be reserved?",
      answer:
        "A court can be reserved for 1 hour at a time. For longer reservations, please make multiple bookings.",
    },
    {
      question: "Do I need to be a member to reserve a court?",
      answer:
        "Yes, court reservations are for members only. Visit our membership page for more information.",
    },
    {
      question: "What are the court hours?",
      answer: "Courts are available from 8 AM to 6 PM seven days a week.",
    },
    // Add more FAQs as needed
  ];

  return (
    <main className="flex-1">
      {/* ... TODO: other sections ... */}

      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Our Courts
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-gray-500 dark:text-gray-400">
              Choose from our selection of 6 courts,{" "}
              <span className="font-semibold">4 clay </span>
              and
              <span className="font-semibold"> 2 hard</span>, to play a match
              with your friends or family.
            </p>
          </div>

          <div className="mt-10">
            <CourtFilter />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courts.map(
              ({ number, nextAvailableTime, isAvailable, surface }) => (
                <CourtDetails
                  key={number}
                  courtNumber={number}
                  nextAvailableTime={nextAvailableTime}
                  isAvailable={isAvailable}
                  surface={surface}
                />
              ),
            )}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold">Court Etiquette</h3>
            <p className="mx-auto mt-4 max-w-[800px] text-gray-500 dark:text-gray-400">
              Please be considerate of others and maintain a respectful
              environment while using the courts. Ensure proper attire, maintain
              noise levels, and follow all club rules.
            </p>
          </div>
        </div>
      </section>

      {/* ... TODO: other sections ... */}

      {/* FAQ Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-700">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq: { question: string; answer: string }, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
