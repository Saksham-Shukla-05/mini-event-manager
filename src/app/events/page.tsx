import React from "react";

function Page() {
  return (
    <div className="px-5 w-full border h-full min-h-screen flex items-start p-5 justify-center">
      <div className="flex flex-col items-center justify-between   ">
        <div>
          <input type="text" name="" id="" placeholder="what's the event" />
        </div>
        <div>
          <input type="datetime-local" name="" id="" />
        </div>
      </div>
    </div>
  );
}

export default Page;
