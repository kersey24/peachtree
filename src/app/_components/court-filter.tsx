"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

// TODO: State management here

export function CourtFilter() {
  const [surface, setSurface] = useState("");
  const [availability, setAvailability] = useState<boolean | null>(null);

  //   const handleSurfaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSurface(e.target.value);
  //     onFilterChange({ surface: e.target.value, availability });
  //   };

  //   const handleAvailabilityChange = (
  //     e: React.ChangeEvent<HTMLSelectElement>,
  //   ) => {
  //     const value =
  //       e.target.value === "any" ? null : e.target.value === "available";
  //     setAvailability(value);
  //     onFilterChange({ surface, availability: value });
  //   };

  //   return (
  //     <div className="flex space-x-4">
  //       <select
  //         className="rounded border p-2"
  //         // onChange={handleSurfaceChange}
  //         value={surface}
  //       >
  //         <option value="">All Surfaces</option>
  //         <option value="Clay">Clay</option>
  //         <option value="Hard">Hard</option>
  //       </select>
  //       <select
  //         className="rounded border p-2"
  //         // onChange={handleAvailabilityChange}
  //         value={
  //           availability === null
  //             ? "any"
  //             : availability
  //               ? "available"
  //               : "not-available"
  //         }
  //       >
  //         <option value="any">Any Availability</option>
  //         <option value="available">Available</option>
  //         <option value="not-available">Not Available</option>
  //       </select>
  //     </div>
  //   );

  {
    /* <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>; */
  }

  return (
    <div className="flex space-x-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Surfaces" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Clay">Clay</SelectItem>
          <SelectItem value="Hard">Hard</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Any Availability" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="available">Available</SelectItem>
          <SelectItem value="not-available">Not Available</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
