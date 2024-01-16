'use client'

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Editor({id}: {id: string}) {
  console.log("id",id);
  
  return (
    <div className="w-full flex flex-col gap-3">
      <Textarea
        onChange={(event) => {
          event.target.style.height = "inherit";
          event.target.style.height = `${event.target.scrollHeight}px`;
        }}
        placeholder="Type your message here."
      />
      <Textarea
        onChange={(event) => {
          event.target.style.height = "inherit";
          event.target.style.height = `${event.target.scrollHeight}px`;
        }}
        placeholder="Type your Propmt here."
      />
      <div className="flex justify-end space-x-2">
        <Button variant="default">Enter</Button>
        <Button variant="destructive">Cancel</Button>
      </div>
    </div>
  );
}
