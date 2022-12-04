import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
interface SectionInputProps {
  setCurrentAnswer: Dispatch<SetStateAction<string | undefined>>;
  sectionName: string;
  answerText: string;
}
const SectionInput = ({
  sectionName,
  answerText,
  setCurrentAnswer,
}: SectionInputProps) => {
  return (
    <>
      <style jsx>{`
        label {
          background: url("/buttons/${sectionName}/play.png");
        }
        label:hover {
          background: url("/buttons/${sectionName}/playHover.png");
        }

        .target {
          transform: scale(0);
          transition: 300ms ease-in-out 0s;
        }

        label input[type="radio"]:checked ~ .target {
          color: green;
          transform: scale(1);
        }
      `}</style>
      <label className="uppercase w-[368px] h-[101px] pl-5  bg-cover flex flex-row justify-between items-center">
        <input
          className="hidden"
          type="radio"
          value={answerText}
          name={sectionName}
          onChange={(e) => setCurrentAnswer(e.target.value)}
        />
        <span className="ml-4 text-2xl">{answerText}</span>
        <figure className="target mt-2">
          <Image
            quality={100}
            src={`/buttons/${sectionName}/target.png`}
            height={90}
            width={90}
            alt="target"
          />
        </figure>
      </label>
    </>
  );
};

export default SectionInput;
