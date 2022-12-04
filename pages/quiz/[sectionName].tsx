import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackgroundWrapper from "../../components/backgroundWrapper";
import Header from "../../components/header";
import { sectionType } from "../../components/navItem";
import SectionButton from "../../components/sectionButton";
import SectionInput from "../../components/sectionInput";
import store from "../../components/store.json";
import styles from "../../styles/Home.module.css";

const StartQuiz = () => {
  const { query } = useRouter();
  const [countStep, setCountStep] = useState(0);
  const sectionName = query.sectionName as sectionType;
  const [itemsAnswer, setItemsAnswer] = useState<JSX.Element[]>();
  const [itemQuestion, setItemQuestion] = useState<string>();
  const [selectAnswer, setSelectAnswer] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  console.log(selectAnswer);
  console.log(countStep);
  useEffect(() => {
    if (!!sectionName && countStep != 0 && countStep <= 10) {
      console.log(store[sectionName].question[countStep - 1]);
      setItemsAnswer(
        store[sectionName].question[countStep - 1].answer.map((item, index) => {
          return (
            <SectionInput
              setCurrentAnswer={setCurrentAnswer}
              answerText={item.text}
              key={item.text + index}
              sectionName={sectionName}
            />
          );
        })
      );

      setItemQuestion(
        store[sectionName].question[countStep - 1].selectQuestion
      );
    }

    if (countStep <= 11) {
      !!currentAnswer &&
        setSelectAnswer((prevState) => [...prevState, currentAnswer]);
      setCurrentAnswer(undefined);
    }
  }, [sectionName, countStep]);

  const handelSubmit = () => {
    if (currentAnswer != undefined) {
      setCountStep((prev) => prev + 1);
    }
    if (currentAnswer == undefined && countStep == 0) {
      setCountStep((prev) => prev + 1);
    }
    if (currentAnswer == undefined && countStep > 0) {
      alert("wyberz odpowiedz");
    }
  };
  return (
    <>
      <BackgroundWrapper backgroundImage={`/${sectionName}/canvasStart.png`}>
        <div className={styles.container}>
          <Header
            itemQuestion={itemQuestion}
            countStep={countStep}
            sectionName={sectionName}
          />
          <div className="w-full flex justify-center mt-10">
            <div className="flex flex-wrap max-w-7xl justify-center gap-8">
              {itemsAnswer}
              <SectionButton
                textButton={countStep == 0 ? "rozpoczni" : "NASTĘPNE PYTANIE"}
                handelSubmit={handelSubmit}
                sectionName={sectionName}
              />
            </div>
          </div>
        </div>
      </BackgroundWrapper>
    </>
  );
};

export default StartQuiz;
