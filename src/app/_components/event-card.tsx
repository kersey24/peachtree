"use client";

import { differenceInSeconds } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface EventCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  date: string;
  description: string;
}

export function EventCard({
  href,
  imgSrc,
  imgAlt,
  title,
  date,
  description,
}: EventCardProps) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(date);
      const secondsLeft = differenceInSeconds(eventDate, now);

      const days = Math.floor(secondsLeft / 86400);
      const hours = Math.floor((secondsLeft % 86400) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const formattedTimeLeft = `${days} days ${hours} hours ${minutes} minutes`;

      setTimeLeft(formattedTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  // TODO: add event page
  const eventUrl = `https://domain.com${href}`;

  return (
    <div className="group relative overflow-hidden rounded-lg border-2 border-gray-200 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
      <img
        alt={imgAlt}
        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full lg:order-last"
        src={imgSrc}
        width={500}
        height={310}
      />
      <div className="flex items-center justify-between space-x-4 rounded-b-lg border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="py-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="pt-4 text-sm">{description}</p>
          <Link
            className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            href="/events/past"
          >
            {/* TODO: popup instead */}
            Learn more
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <SocialShare title={title} url={eventUrl} />
      </div>
      <div className="flex items-baseline justify-start space-y-2 bg-white bg-opacity-75 p-4">
        <p className="text-sm text-gray-500">Starts in: {timeLeft}</p>
      </div>
    </div>
  );
}

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
  );
}

interface SocialShareProps {
  title: string;
  url: string;
}

function SocialShare({ title, url }: SocialShareProps) {
  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);

    toast.success("Copied URL to clipboard");
  };

  return (
    // <div
    //   className="mr-10 flex h-32 w-32 cursor-pointer items-center justify-between rounded-full border-2 border-gray-200 px-2 py-1"
    //   onClick={copyUrl}
    // >
    //   <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600">
    //     <span className="sr-only">Copy URL</span>
    //     <LinkIcon className="h-5 w-5" />
    //     <span className="text-sm">Copy URL</span>
    //   </button>
    // </div>
    <>{/* <AlertDialog></AlertDialog> */}</>
  );
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className="text-gray-500 hover:text-gray-600"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L10.4142 11L13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L11.4142 12L13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071L8.29289 11.7071C7.90237 11.3166 7.90237 10.6834 8.29289 10.2929L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289Z"
      />
    </svg>
  );
}
