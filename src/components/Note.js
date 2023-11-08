import React from "react";

const Note = () => {
  return (
    <div className="w-full h-32 border border-zinc-100 flex-col justify-start items-start inline-flex">
      <div className="h-3 opacity-0 bg-white bg-opacity-0 flex-col justify-start items-start flex">
        <div className="self-stretch bg-fuchsia-300 justify-center items-center inline-flex">
          <div className="w-px flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-px bg-fuchsia-300" />
            <div className="self-stretch h-px bg-fuchsia-300" />
          </div>
          <div className="grow shrink basis-0 self-stretch bg-fuchsia-300 justify-center items-center gap-0.5 flex">
            <div className="w-px h-3 relative">
              <div className="w-2 h-3 left-[-3px] top-0 absolute bg-fuchsia-300 shadow-inner" />
            </div>
            <div className="text-fuchsia-700 text-xs font-bold font-['Roboto Mono'] leading-3">
              sm
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="h-4 opacity-0 bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
            <div className="w-2 grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center flex">
              <div className="h-px justify-start items-start gap-2 inline-flex">
                <div className="w-px self-stretch bg-sky-950" />
                <div className="w-px self-stretch bg-sky-950" />
              </div>
              <div className="self-stretch grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center gap-0.5 flex">
                <div className="text-fuchsia-700 text-xs font-bold font-['Roboto Mono'] leading-3">
                  x<br />s
                </div>
                <div className="w-2 h-px relative">
                  <div className="w-2 h-2 left-0 top-[-3px] absolute bg-fuchsia-300 shadow-inner" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-4 h-4 relative" />
          <div className="text-black text-xs font-normal font-['Poppins'] leading-none">
            Notes
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            by
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            Babu Vasa
          </div>
        </div>
        <div className="justify-start items-start gap-2 flex">
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            23,
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            {" "}
            July
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            2023
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            at
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            1:06
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            AM
          </div>
          <div className="text-neutral-500 text-xs font-normal font-['Poppins'] leading-none">
            CDT
          </div>
          <div className="h-4 opacity-0 bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
            <div className="w-2 grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center flex">
              <div className="h-px justify-start items-start gap-2 inline-flex">
                <div className="w-px self-stretch bg-sky-950" />
                <div className="w-px self-stretch bg-sky-950" />
              </div>
              <div className="self-stretch grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center gap-0.5 flex">
                <div className="text-fuchsia-700 text-xs font-bold font-['Roboto Mono'] leading-3">
                  x<br />s
                </div>
                <div className="w-2 h-px relative">
                  <div className="w-2 h-2 left-0 top-[-3px] absolute bg-fuchsia-300 shadow-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 opacity-0 bg-white bg-opacity-0 flex-col justify-start items-start flex">
        <div className="self-stretch bg-fuchsia-300 justify-center items-center inline-flex">
          <div className="w-px flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-px bg-fuchsia-300" />
            <div className="self-stretch h-px bg-fuchsia-300" />
          </div>
          <div className="grow shrink basis-0 self-stretch bg-fuchsia-300 justify-center items-center gap-0.5 flex">
            <div className="w-px h-4 relative">
              <div className="w-2 h-4 left-[-3px] top-0 absolute bg-fuchsia-300 shadow-inner" />
            </div>
            <div className="text-fuchsia-700 text-xs font-bold font-['Roboto Mono'] leading-3">
              md
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white shadow-inner justify-start items-start inline-flex">
        <div className="h-16 opacity-0 bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
          <div className="w-8 grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center flex">
            <div className="h-px justify-start items-start gap-8 inline-flex">
              <div className="w-px self-stretch bg-sky-950" />
              <div className="w-px self-stretch bg-sky-950" />
            </div>
            <div className="self-stretch grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center gap-0.5 flex">
              <div className="text-fuchsia-700 text-xs font-bold font-['Roboto Mono'] leading-3">
                2xl
              </div>
              <div className="w-8 h-px relative">
                <div className="w-8 h-2 left-0 top-[-3px] absolute bg-fuchsia-300 shadow-inner" />
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch text-zinc-800 text-base font-normal leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate ante eu odio ultrices laoreet. Vivamus placerat eros in
          justo vestibulum, ac mollis ex aliquam. Donec efficitur felis eget
          nunc congue viverra. Duis condimentum risus sit amet tellus gravida,
          eget tincidunt nisi aliquam. Nunc posuere nunc urna, eget finibus
          tellus finibus lobortis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc vulputate ante eu odio ultrices laoreet. Vivamus
          placerat eros in justo vestibulum, ac mollis ex aliquam. Donec
          efficitur felis eget nunc congue viverra. Duis condimentum risus sit
          amet tellus gravida, eget tincidunt nisi aliquam. Nunc posuere nunc
          urna, eget finibus tellus finibus lobortis.
        </div>
        <div className="h-16 opacity-0 bg-white bg-opacity-0 flex-col justify-start items-start inline-flex">
          <div className="w-8 grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center flex">
            <div className="h-px justify-start items-start gap-8 inline-flex">
              <div className="w-px self-stretch bg-sky-950" />
              <div className="w-px self-stretch bg-sky-950" />
            </div>
            <div className="self-stretch grow shrink basis-0 bg-fuchsia-300 flex-col justify-center items-center gap-0.5 flex">
              <div className="text-fuchsia-700 text-xs font-bold font-['Roboto Mono'] leading-3">
                2xl
              </div>
              <div className="w-8 h-px relative">
                <div className="w-8 h-2 left-0 top-[-3px] absolute bg-fuchsia-300 shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 opacity-0 bg-white bg-opacity-0 flex-col justify-start items-start flex">
        <div className="self-stretch bg-fuchsia-300 justify-center items-center inline-flex">
          <div className="w-px flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-px bg-fuchsia-300" />
            <div className="self-stretch h-px bg-fuchsia-300" />
          </div>
          <div className="grow shrink basis-0 self-stretch bg-fuchsia-300 justify-center items-center gap-0.5 flex">
            <div className="w-px h-4 relative">
              <div className="w-2 h-4 left-[-3px] top-0 absolute bg-fuchsia-300 shadow-inner" />
            </div>
            <div className="text-fuchsia-700 text-xs font-bold font-['Roboto Mono'] leading-3">
              md
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
