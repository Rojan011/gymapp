import { useEffect, useState } from "react";
import Navbar from "../src/scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/navbar/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    } else {
      setIsTopOfPage(false);
    }
    //This is required every time we use window functions jastai hamle window.scrollY haru use garem tesma yo kamlagxa
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

function handleScroll(this: Window, ev: Event) {
  throw new Error("Function not implemented.");
}
