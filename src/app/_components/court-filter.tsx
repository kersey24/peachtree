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
