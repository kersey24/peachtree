import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function ReservationSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <CheckCircleIcon className="h-12 w-12 text-green-500 dark:text-green-400" />
      <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
        Reservation Successful
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Your reservation has been confirmed. We look forward to seeing you!
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button className="mx-2 px-8 py-2" variant="outline">
            <HomeIcon className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link href="/profile/history">
          <Button className="mx-2 px-8 py-2" variant="outline">
            <HistoryIcon className="mr-2 h-4 w-4" />
            Past Matches
          </Button>
        </Link>
      </div>
    </div>
  );
}

function CheckCircleIcon(props: React.ComponentProps<"svg">) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function HistoryIcon(props: React.ComponentProps<"svg">) {
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
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

function HomeIcon(props: React.ComponentProps<"svg">) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
