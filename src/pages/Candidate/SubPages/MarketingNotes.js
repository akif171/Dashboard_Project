import React, { useState } from "react";
import Note from "../../../components/Note";
import NewNote from "../../../components/NewNote";

const MarketingNotes = () => {
  const [isNewNote, setIsNewNote] = useState(false);

  return (
    <div className="">
      <div className="w-full   px-6 flex-col justify-start items-start gap-6 inline-flex font-normal mt-5">
        <div className="flex justify-end items-start gap-6 w-full">
          {isNewNote ? (
            <div className="py-2 px-6 cursor-not-allowed bg-neutral-50 text-text-muted rounded-full justify-center items-center gap-2 flex">
              <span className="text-2xl ">+</span>
              <button className="cursor-not-allowed text-base font-normal leading-normal">
                Add Note
              </button>
            </div>
          ) : (
            <div
              onClick={() => setIsNewNote(true)}
              className="py-2 px-6 bg-teal-600 rounded-full justify-center items-center gap-2 flex"
            >
              <span className="text-2xl text-white">+</span>
              <button className="text-white text-base font-normal leading-normal">
                Add Note
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full ">
          {isNewNote && (
            <NewNote isNewNote={isNewNote} setIsNewNote={setIsNewNote} />
          )}

          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  );
};

export default MarketingNotes;
