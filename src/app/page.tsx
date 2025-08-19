"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <div className="flex items-center flex-col  gap-5  justify-center min-h-screen">
      <h1>Welcome to the mini event manager app.</h1>
      <button
        className="border border-black p-2 rounded-full  cursor-pointer"
        onClick={() => {
          route.push("/events");
        }}
      >
        Add Your Events Now!
      </button>
    </div>
  );
}
