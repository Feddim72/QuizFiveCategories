import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
interface SectionButtonProps {
  handelSubmit: () => void;
  sectionName: string;
  textButton: string;
}
const SectionButton = ({
  sectionName,
  textButton,
  handelSubmit,
}: SectionButtonProps) => {
  return (
    <>
      <style jsx>{`
        button {
          background: url("/buttons/${sectionName}/play.png");
        }
        button:hover {
          background: url("/buttons/${sectionName}/playHover.png");
        }
      `}</style>
      <button
        onClick={() => handelSubmit()}
        className={`uppercase w-[368px] h-[101px] px-5 bg-cover flex flex-row justify-between items-center`}
      >
        <span className="ml-4 text-2xl">{textButton}</span>
        <figure className="mt-2 min-w-[90px]">
          <Image
            quality={100}
            src={`/buttons/${sectionName}/arrowPlay.png`}
            width={90}
            height={90}
            alt="arrowPlay"
          />
        </figure>
      </button>
    </>
  );
};

export default SectionButton;
