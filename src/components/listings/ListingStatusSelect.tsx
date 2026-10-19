
"use client";

import type { ListingStatus } from "@/types/listing";

type ListingStatusSelectProps = {
  value: ListingStatus;
  onChange: (value: ListingStatus) => void;
  disabled?: boolean;
};

const statusOptions: { value: ListingStatus; label: string }[] = [
  { value: "PENDING", label: "Pending approval" },
  { value: "READY_TO_SELL", label: "Ready to Sell" },
  { value: "INACTIVE", label: "Inactive" },
  { value: "SOLD", label: "Sold" },
  { value: "REJECTED", label: "Rejected" },
];

export default function ListingStatusSelect({
  value,
  onChange,
  disabled = false,
}: ListingStatusSelectProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
      Listing status
      <select
        value={value}
        disabled={disabled}
        onChange={(event) =>
          onChange(event.target.value as ListingStatus)
        }
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100"
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
