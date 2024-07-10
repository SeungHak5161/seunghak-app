import { Inter } from "next/font/google";
import UseMeasure2 from "./hooks/useMeasure2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [ref, height] = UseMeasure2();
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 bg-white ${inter.className}`}
    // >
    //   {/* <FirstDay /> */}
    //   {/* <SecondDay /> */}
    // </main>
    <>
      <textarea className="w-48 h-48" ref={ref}></textarea>
      <span>height: {height}</span>
    </>
    // <SecondClone />
  );
}
