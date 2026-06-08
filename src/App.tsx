import { Body } from "./Layout/Body";
import { Navbar } from "./Layout/Navbar";

export function App() {
  return (
    <div className="dark:bg-[#111111] bg-gray-100 dark:text-white text-black flex flex-col lg:flex-row justify-center font-sans">
      <Navbar />
      <Body />
    </div>
  );
}
