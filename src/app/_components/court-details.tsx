"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

const CourtReservation = z.object({
  email: z
    .string({
      required_error: "Please enter your email address",
    })
    .email(),
  name: z.string({
    required_error: "Please enter your name",
  }),
  date: z.string({
    required_error: "Please enter a date",
  }),
  time: z.string({
    required_error: "Please enter a time",
  }),
});

export function CourtDetails({
  courtNumber,
  nextAvailableTime,
  isAvailable,
  surface,
}: {
  courtNumber: number;
  nextAvailableTime: string;
  isAvailable: boolean;
  surface: string;
}) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // TODO: Handle form submission here
    console.log("Form submitted");
  }

  const [showModal, setShowModal] = useState(false);

  const form = useForm<z.infer<typeof CourtReservation>>({
    resolver: zodResolver(CourtReservation),
  });

  function handleNotifyClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    // TODO: Handle notifications here
    alert("You will be notified when this court becomes available.");
  }

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="transform rounded-lg border bg-white p-4 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-2 hover:border-gray-200 hover:bg-gray-100 hover:shadow-2xl dark:bg-gray-700 hover:dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Court {courtNumber}</h3>
            <span
              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                isAvailable
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {isAvailable ? "Available" : "Booked"}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            8 AM - 6 PM
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Surface: <span className="font-semibold">{surface}</span>
          </p>
          <p className="my-4 text-sm text-gray-600 dark:text-gray-400">
            Next available time:{" "}
            <span className="font-semibold">{nextAvailableTime}</span>
          </p>

          <AlertDialog>
            <div className="flex w-full items-center justify-between space-y-4">
              <AlertDialogTrigger>
                <Button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white shadow transition duration-300 ease-linear hover:bg-blue-600">
                  Reserve
                </Button>
              </AlertDialogTrigger>
              {!isAvailable && (
                <Button
                  onClick={handleNotifyClick}
                  className="mt-2 rounded bg-yellow-500 px-4 py-2 text-white shadow transition duration-300 ease-linear hover:bg-yellow-600"
                >
                  Notify Me
                </Button>
              )}
            </div>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reserve Court {courtNumber}</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <form onSubmit={handleSubmit}>
                  {/* Form fields go here */}
                  {/* ... */}

                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={reservationDate}
                      onChange={(e) => setReservationDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="time"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={reservationTime}
                      onChange={(e) => setReservationTime(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <AlertDialogFooter className="flex items-center justify-between">
                    <AlertDialogCancel asChild>
                      <Button className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800">
                        Cancel
                      </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button
                        type="submit"
                        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                      >
                        Reserve
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogDescription>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src={`/courts/${courtNumber}.png`}
              alt={`Court ${courtNumber}`}
            />
            <AvatarFallback className="h-24 w-24">
              Court {courtNumber}
            </AvatarFallback>
          </Avatar>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function onReserve(courtNumber: number) {
  console.log(`Court ${courtNumber} reserved`);
}
