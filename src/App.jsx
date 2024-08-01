("use strict");
import Groq, { NotFoundError } from "groq-sdk";
import { useState, useMemo, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import extractJSON from "./utils/extractJson";
import Header from "./components/pages/header/Header";
import HeroPage from "./components/pages/HeroPage";
import InputPage from "./components/pages/InputPage";
import ResultsPage from "./components/pages/ResultsPage";
import ScrollButton from "./components/UI/ScrollButton";
import Footer from "./components/pages/footer/Footer";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, //I'm not sure if this is bad practice
});

function App() {
  const [hexColor, setHexColor] = useState("#f00");
  const [rgbColor, setRgbColor] = useState({ r: 255, g: 0, b: 0 });
  const [hslColor, setHslColor] = useState({ h: 0, s: 100, l: 50 });
  const [usageEmpty, setUsageEmpty] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const formDataRef = useRef({
    usage: "Coordinate colors for my outfit",
    colorScheme: "complimentary",
  });
  const colorArrRef = useRef([]);
  const promptRef = useRef(formDataRef.current.usage);

  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [trigger]);
  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [formDataRef.current.usage]);
  const colors = useMemo(() => colorArrRef.current, [colorArrRef.current]);
  const prompt = useMemo(() => promptRef.current, [promptRef.current]);

  const handleClick = async () => {
    if (formDataRef.current.usage === "") {
      setUsageEmpty(true);
      return;
    }
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Provide a JSON Object that contains a color scheme of four colors generated from the hex code color ${hexColor}. The color scheme should help with ${formDataRef.current.colorScheme}. Provide details about why each color was picked. Ensure each color has a name and hex code and description with at least 30 characters. The color scheme must be used in reference of ${formDataRef.current.usage}. The JSON object is an array of objects that contain the following properties: name, hex, description.`,
          },
        ],
        model: "llama3-8b-8192",
      });
      const chatResponse = chatCompletion.choices[0]?.message?.content || ""; // This is the response from the chat model
      const schemeObj = extractJSON(chatResponse); // This extracts the JSON object from the response
      colorArrRef.current = schemeObj;
      setButtonClicked(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const setters = useMemo(
    () => ({
      onChangeColor(color) {
        setHexColor(color.hexString);
        setRgbColor(color.rgb);
        setHslColor(color.hsl);
      },
    }),
    []
  );
  const handleChange = (e) => {
    e.preventDefault?.();
    const changedField = e.target.name;
    const newValue = e.target.value;
    const breakingChars = /[^a-zA-Z0-9 ]/g;
    if (!breakingChars.test(newValue)) {
      formDataRef.current = {
        ...formDataRef.current,
        [changedField]: newValue,
      };
      setTrigger((prev) => !prev); // Changed to toggle boolean for simplicity
      setUsageEmpty(false);
    }
  };
  return (
    <>
      <div className='main-container translate-x-0'>
        <Header />
        <Routes>
          <Route path='/' element={<HeroPage />} />
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
            element={<ResultsPage colors={colors} prompt={prompt} />}
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
