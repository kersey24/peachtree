/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "src/styles/Calendar.css";
import { add, format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

export default function Calendar() {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: 9, minutes: 0, seconds: 0 });
    const end: Date = add(justDate, { hours: 17, minutes: 0, seconds: 0 });
    const interval = 30;

    const times: Date[] = [];
    for (let i: Date = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div className="flex h-screen items-center justify-center border-2 border-red-500">
      <div className="w-2/3 justify-center border-2 align-middle">
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR mx-auto h-full border-2 border-pink-500 p-2"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      </div>
      {date.justDate ? (
        <div className="flex h-screen w-1/3 flex-col items-center justify-center border-2 border-blue-500 bg-slate-300">
          <h2 className="text-lg font-bold">Reserve a Time</h2>
          <div className="flex gap-5">
            <div className="mb-4 rounded border bg-white p-2 text-sm">
              Date: {format(date.justDate, "P")}
            </div>
            <div className="relative flex gap-2">
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent className="absolute left-1/2 top-1/2 max-h-[300px] -translate-y-1/2 transform">
                  <SelectGroup>
                    {times?.map((time, i) => (
                      <SelectItem
                        disabled={time < new Date()}
                        key={`time-${i}`}
                        value={format(time, "hh:mm a")}
                      >
                        {format(time, "hh:mm a")}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent className="absolute left-1/2 top-1/2 -translate-y-1/2 transform">
                  <SelectGroup>
                    {times?.map((time, i) => (
                      <SelectItem
                        key={`time-${i}`}
                        value={format(time, "hh:mm a")}
                      >
                        {format(time, "hh:mm a")}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <button>Submit</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
