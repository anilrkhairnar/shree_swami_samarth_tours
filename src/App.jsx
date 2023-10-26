import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Use setTimeout to hide the preloader after 2 seconds
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl text-red-400 font-bold">Tours</h1>
    </div>
  );
}

export default App;
