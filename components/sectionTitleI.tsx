import Image from "next/image";

interface SectionTitelProps {
  sectionName?: string;
}

const SectionTitel = ({ sectionName }: SectionTitelProps) => {
  return (
    <div
      className={`w-52 h-52  flex flex-col items-center justify-between p-7 bg-cover`}
    >
      <figure>
        <Image
          src={`/${sectionName}/ico/logoQuestionSection.webp`}
          width={65}
          height={65}
          alt="logoQ"
          quality={90}
        />
      </figure>
      <div className="border-t-2 border-[#f94ab3] w-full pt-3 text-center">
        <span className="uppercase text-white text-center">{sectionName}</span>
      </div>
    </div>
  );
};

export default SectionTitel;
