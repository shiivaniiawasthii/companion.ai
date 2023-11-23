import { UserButton } from "@clerk/nextjs";
import React from "react";
import SearchInput from "@/components/searchInput";

function page() {
  return (
    <div className="h-full p-4 sapce-y-2">
      <SearchInput />
    </div>
  );
}

export default page;
