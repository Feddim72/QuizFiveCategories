import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import SectionTitel from "./sectionTitleI";
interface HeaderProps {
  sectionName?: string;
  itemQuestion?: string;
  countStep?: number;
}
const Header = ({ sectionName, countStep, itemQuestion }: HeaderProps) => {
  const { push } = useRouter();
  const title = sectionName
    ? countStep != 0
      ? "Wyberz prawdziwa odpowiedz"
      : "wybrana kategoria:"
    : "10 PYTAŃ / 5 KATEGORII";
  return (
    <header>
      <div>
        <figure className="flex w-full justify-start mt-8">
          <Image
            src={"/buttons/forAll/logoQ.webp"}
            width={80}
            height={75}
            alt="logoQ"
          />
        </figure>

        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full text-white">
            <div className="mt-5 flex flex-row justify-center items-center w-full">
              <figure
                className={`w-full max-w-7xl flex justify-center ${
                  !!sectionName && (countStep == 0 ? "ml-[20px]" : "ml-[66px]")
                } mt-1`}
              >
                <Image
                  src={"/buttons/forAll/quizLogo.webp"}
                  width={210}
                  height={75}
                  alt="logoQ"
                />
              </figure>
              {!!sectionName && (
                <div className="flex justify-center items-center">
                  {countStep != 0 && (
                    <button>
                      <figure className="relative h-[30px] w-[34px] mt-1 mr-3 hover:scale-110 transition-all">
                        <Image
                          src={"/buttons/forAll/backArrow.png"}
                          sizes="100vw"
                          fill
                          alt={"back-arrow"}
                          quality={100}
                        />
                      </figure>
                    </button>
                  )}
                  <button onClick={() => push("/")}>
                    <figure className="relative h-[20px] w-[20px] hover:scale-110 transition-all">
                      <Image
                        src={"/buttons/forAll/close.png"}
                        sizes="100vw"
                        fill
                        alt={"close-ico"}
                      />
                    </figure>
                  </button>
                </div>
              )}
            </div>

            <div
              className={`flex flex-col ${
                itemQuestion ? "mt-[75px]" : "my-[75px]"
              } justify-center`}
            >
              <div>
                <h1
                  className="relative uppercase text-2xl bg-center h-16 min-w-[600px] flex justify-center items-center"
                  style={{
                    backgroundSize: "100%",
                    backgroundImage: `url(/${
                      sectionName ? sectionName : "program"
                    }/ico/shadowTitle.png)`,
                  }}
                >
                  {title}
                  {!!countStep && countStep > 0 && (
                    <figure className="absolute -top-[58px] -right-[125px]">
                      <Image
                        width={205}
                        height={205}
                        src={`/${sectionName}/ico/count@2x.png`}
                        alt="count"
                      />
                      <p className="absolute top-[35%] left-[31%] text-2xl text-white flex justify-center items-center">
                        {countStep} /
                        <span className="text-[#f849b3] ml-1">10</span>
                      </p>
                    </figure>
                  )}
                </h1>
              </div>
              {itemQuestion && (
                <h2 className="my-12 text-center text-lg uppercase">
                  {itemQuestion}
                </h2>
              )}
            </div>
            {!!sectionName && countStep == 0 && (
              <SectionTitel sectionName={sectionName} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
