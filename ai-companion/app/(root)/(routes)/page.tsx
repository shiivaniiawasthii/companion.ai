import { UserButton } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default page;
