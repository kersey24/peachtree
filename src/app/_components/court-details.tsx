"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ReservationModal } from "./reservation-modal";

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
  const [showModal, setShowModal] = useState(false);

  const handleReserveClick = () => {
    setShowModal(true);
  };

  return (
    <div className="transform rounded-lg border bg-white p-4 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-700">
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
      <p className="text-sm text-gray-500 dark:text-gray-300">8 AM - 6 PM</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Surface: <span className="font-semibold">{surface}</span>
      </p>
      <p className="my-4 text-sm text-gray-600 dark:text-gray-400">
        Next available time:{" "}
        <span className="font-semibold">{nextAvailableTime}</span>
      </p>
      <Button
        onClick={handleReserveClick}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white shadow transition duration-300 ease-linear hover:bg-blue-600"
      >
        Reserve
      </Button>
      {showModal && (
        <ReservationModal
          courtNumber={courtNumber}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

function onReserve(courtNumber: number) {
  console.log(`Court ${courtNumber} reserved`);
}
