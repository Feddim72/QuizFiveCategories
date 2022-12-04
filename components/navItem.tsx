import Image from "next/image";
import Link from "next/link";
export type sectionType =
  | "technology"
  | "culture"
  | "moto"
  | "program"
  | "history";
interface NavItemProps {
  sectionStyle?: string;
  sectionName: sectionType;
}

const NavItem = ({ sectionStyle = "program", sectionName }: NavItemProps) => {
  return (
    <>
      <style jsx>{`
        .container {
          background-image: url("/${sectionStyle}/ico/block.png");
        }
        .container:hover {
          background-image: url("/${sectionStyle}/ico/blockHover.png");
        }
      `}</style>
      <Link href={"/quiz/" + sectionName}>
        <div
          className={`container w-52 h-52 rounded-[20px] shadow-program flex flex-col items-start justify-between p-7 bg-cover `}
        >
          <figure className="mt-4">
            <Image
              src={`/${sectionName}/ico/logoQuestionSection.webp`}
              width={65}
              height={65}
              alt="logoQ"
              quality={90}
            />
          </figure>
          <div className="border-t-2 border-[#f94ab3] w-full pt-2">
            <span className="uppercase text-white">{sectionName}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NavItem;
