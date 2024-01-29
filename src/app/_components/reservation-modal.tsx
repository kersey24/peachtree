"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";

// export function ReservationModal({
//   courtNumber,
//   onClose,
// }: {
//   courtNumber: number;
//   onClose: () => void;
// }) {
//   const [reservationDate, setReservationDate] = useState("");
//   const [reservationTime, setReservationTime] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(
//       `Reserving Court ${courtNumber} on ${reservationDate} at ${reservationTime} for ${name} (${email})`,
//     );

//     // Here we make an API call to submit the reservation or server-action
//     // ...

//     onClose(); // Close modal after submission
//   };

//   return (
//     <div className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
//       <div className="relative mx-auto w-full max-w-md rounded-md border bg-white p-5 shadow-lg">
//         <div className="mb-4 text-lg font-bold">
//           Reserve Court {courtNumber}
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="mb-2 block text-sm font-bold text-gray-700"
//               htmlFor="date"
//             >
//               Date
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
//               value={reservationDate}
//               onChange={(e) => setReservationDate(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="mb-2 block text-sm font-bold text-gray-700"
//               htmlFor="time"
//             >
//               Time
//             </label>
//             <input
//               type="time"
//               id="time"
//               className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
//               value={reservationTime}
//               onChange={(e) => setReservationTime(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="mb-2 block text-sm font-bold text-gray-700"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="mb-2 block text-sm font-bold text-gray-700"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
//             >
//               Reserve
//             </button>
//             <button
//               onClick={onClose}
//               className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

export function ReservationModal({
  courtNumber,
  onClose,
}: {
  courtNumber: number;
  onClose: () => void;
}) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `Reserving Court ${courtNumber} on ${reservationDate} at ${reservationTime} for ${name} (${email})`,
    );

    // Here we make an API call to submit the reservation or server-action
    // ...

    onClose(); // Close modal after submission
  };

  return (
    <AlertDialog>
      <AlertDialogContent className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
        <div className="relative mx-auto w-full max-w-md rounded-md border bg-white p-5 shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Reserve Court {courtNumber}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <form onSubmit={handleSubmit}>
              {/* Form fields go here */}
              {/* ... */}

              <AlertDialogFooter className="flex items-center justify-between">
                <AlertDialogCancel asChild>
                  <Button
                    onClick={onClose}
                    className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                  >
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
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
