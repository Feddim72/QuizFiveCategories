import { ReactNode } from "react";
interface BackgroundWrapperProps {
  children: ReactNode;
  backgroundImage: string;
}
const BackgroundWrapper = ({
  children,
  backgroundImage,
}: BackgroundWrapperProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`bg-cover bg-center bg-no-repeat min-h-[100vh] flex justify-center text-white`}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
