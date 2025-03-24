"use client";

import BackButton from "@/components/back-button";

export default function Navbar() {
  return (
    <div className="grid grid-cols-4 items-center py-3">
      <div>
        <BackButton />
      </div>

      <span className="col-span-2 text-center text-sm">Create Hive</span>
    </div>
  );
}
