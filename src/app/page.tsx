import Link from "next/link";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import Header from "./_components/header";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="https://i.pinimg.com/736x/a2/1f/3c/a21f3c4eef5d63314c9a5369b9f3a804.jpg"
              width="550"
            />
            <div className="flex max-w-full flex-col justify-center space-y-4">
              <div className="space-y-2">
                {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Schedule your next match with us
                </h1> */}
                <TextGenerateEffect words="Schedule your next match with us" />
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose from our selection of courts and book your next match
                  or event with us.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MatchesAndEvents />
      <CoachingAndTraining />
      <Facilities />
      <TennisPrograms />
    </main>
  );
}

export function TennisPrograms() {
  return (
    <div className="relative flex w-full items-center justify-center bg-gray-100 bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2]">
      <section className="w-full border-y border-gray-400 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg border border-gray-400 bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-50">
                Tennis Programs
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-3xl md:py-6 md:text-4xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Comprehensive Tennis Programs
              </h2>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/programs"
              >
                Join a Program
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg border border-gray-400 bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Club Activities
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Engage in a variety of club activities ranging from social
                matches to competitive tournaments.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/activities"
              >
                View Activities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MatchesAndEvents() {
  return (
    <div className="relative flex w-full items-center justify-center bg-gray-100 bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2]">
      <section className="md:py-18 w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Matches and Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Host Your Next Match or Event With Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Organize tournaments, coaching sessions, or social gatherings at
                our facilities with ease.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 p-6 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Premium Facilities</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Play on premium quality courts, suitable for both beginners and
                professionals.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Professional Coaching</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Benefit from expert coaching to improve your skills, whatever
                your level.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Flexible Reservations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Book your court at convenient times with our easy-to-use online
                reservation system.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Family Friendly</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enjoy a family-friendly environment with facilities and
                activities for all ages.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Tournaments and Events</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Participate in exciting tournaments and social events throughout
                the year.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Club Membership</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access a range of benefits and discounts with our club
                membership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Facilities() {
  return (
    <section className="w-full border-t py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Club Facilities
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-3xl md:py-6 md:text-4xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Get Access to Our Best in Region Facilities
            </h2>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/facilities"
            >
              Explore Facilities
            </Link>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Club Services
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              From racquet stringing to ball machine rentals, we offer a variety
              of services to enhance your experience.
            </p>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/services"
            >
              Discover Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachingAndTraining() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Elevate Your Game with Our Coaching and Training
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Experience high-quality courts, pro shops, and personalized coaching
            to improve your skills.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Explore Amenities
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Coaching Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full  items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>
  );
}
