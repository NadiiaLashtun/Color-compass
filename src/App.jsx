("use strict");
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/pages/header/Header";
import HeroPage from "./components/pages/HeroPage";
import InputPage from "./components/pages/InputPage";
import ResultsPage from "./components/pages/ResultsPage";
import ScrollButton from "./components/UI/ScrollButton";
import Footer from "./components/pages/footer/Footer";
import { useColorScheme } from "./hooks/useColorSchemes";

function App() {
  const {
    hexColor,
    rgbColor,
    hslColor,
    usageEmpty,
    buttonClicked,
    colors,
    setters,
    handleClick,
    handleChange,
    formDataRef,
    prompt,
  } = useColorScheme();

  return (
    <>
      <div className='main-container translate-x-0'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<HeroPage />}
          />
          <Route
            path='/input'
            element={
              <InputPage
                setters={setters}
                handleChange={handleChange}
                handleClick={handleClick}
                formData={formDataRef.current}
                hexColor={hexColor}
                rgbColor={rgbColor}
                hslColor={hslColor}
                usageEmpty={usageEmpty}
              />
            }
          />
          <Route
            path='/result'
            element={
              <ResultsPage
                colors={colors}
                prompt={prompt}
              />
            }
          />
        </Routes>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}
{
  /*buttonClicked && (*/
}
export default App;
