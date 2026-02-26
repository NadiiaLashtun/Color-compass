import { useState, useMemo, useEffect, useRef } from 'react';
import groq from '../api/groqClient';
import extractJSON from '../utils/extractJson';

export function useColorScheme(defaultHex = '#8E216E') {
  const [hexColor, setHexColor] = useState(defaultHex);
  const [rgbColor, setRgbColor] = useState({ r: 142, g: 33, b: 110 });
  const [hslColor, setHslColor] = useState({ h: 318, s: 62, l: 34 });
  const [usageEmpty, setUsageEmpty] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const formDataRef = useRef({
    usage: 'Coordinate colors for my outfit',
    colorScheme: 'complimentary',
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

  //Generate colors by API
  const handleClick = async () => {
    if (formDataRef.current.usage === '') {
      setUsageEmpty(true);
      return;
    }
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Provide a JSON Object that contains a color scheme of four colors generated from the hex code color ${hexColor}. The color scheme should help with ${formDataRef.current.colorScheme}. Provide details about why each color was picked. Ensure each color has a name and hex code and description with at least 30 characters. The color scheme must be used in reference of ${formDataRef.current.usage}. The JSON object is an array of objects that contain the following properties: name, hex, description.`,
          },
        ],
        model: 'llama-3.3-70b-versatile',
      });
      // This is the response from the chat model
      const chatResponse = chatCompletion.choices[0]?.message?.content || '';
      // This extracts the JSON object from the response
      const schemeObj = extractJSON(chatResponse);
      colorArrRef.current = schemeObj;
      setButtonClicked(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Function for change colors
  const setters = useMemo(
    () => ({
      onChangeColor(color) {
        setHexColor(color.hexString);
        setRgbColor(color.rgb);
        setHslColor(color.hsl);
      },
    }),
    [],
  );

  //Form changes
  const handleChange = (e) => {
    e.preventDefault();

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

  return {
    hexColor,
    rgbColor,
    hslColor,
    usageEmpty,
    buttonClicked,
    formDataRef,
    colors,
    prompt,
    setters,
    handleClick,
    handleChange,
  };
}
