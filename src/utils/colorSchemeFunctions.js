function hslToHex({ h, s, l }) {
  s /= 100;
  l /= 100;

  const f = (n) => {
    const k = (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(color * 255)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}

// Комплементарный цвет (берем HSL и просто меняем угол на 180 градусов)
export function getComplementaryHSL(hsl) {
  return hslToHex({ ...hsl, h: (hsl.h + 180) % 360 });
}

// Аналоговые цвета (±30 градусов по HSL)
export function getAnalogousHSL(hsl) {
  return [
    hslToHex({ ...hsl, h: (hsl.h + 30) % 360 }),
    hslToHex({ ...hsl, h: (hsl.h + 330) % 360 }), // -30 градусов
  ];
}

// Триадные цвета (±120 градусов по HSL)
export function getTriadicHSL(hsl) {
  return [
    hslToHex({ ...hsl, h: (hsl.h + 120) % 360 }),
    hslToHex({ ...hsl, h: (hsl.h + 240) % 360 }),
  ];
}
