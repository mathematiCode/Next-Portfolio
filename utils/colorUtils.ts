/**
 * Utility functions for color manipulation
 * All functions work with HSL format: { h: number, s: number, l: number }
 * where h = hue (0-360), s = saturation (0-100), l = lightness (0-100)
 */
interface hslType {
  h: number;
  s: number;
  l: number;
}

export const lightenColor = (hsl: hslType, amount: number) => {
  const newLightness = Math.min(100, hsl.l + (100 - hsl.l) * amount);
  return { ...hsl, l: newLightness };
};

export const darkenColor = (hsl: hslType, amount: number): hslType => {
  const newLightness = Math.max(0, hsl.l - hsl.l * amount);
  return { ...hsl, l: newLightness };
};

/**
 * Converts HSL to CSS hsl() string
 * @param {object} hsl - HSL color object { h: number, s: number, l: number }
 * @returns {string} - CSS hsl() string
 */
export const hslToCss = hsl => {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
};

/**
 * Converts HSL to CSS hsla() string with transparency
 * @param {object} hsl - HSL color object { h: number, s: number, l: number }
 * @param {number} alpha - Alpha value (0-1, where 0 = transparent, 1 = opaque)
 * @returns {string} - CSS hsla() string
 */
export const addTransparency = (hsl: hslType, alpha: number) => {
  return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${alpha})`;
};

/**
 * Adjusts the saturation of a color
 * @param {object} hsl - HSL color object { h: number, s: number, l: number }
 * @param {number} amount - Amount to adjust saturation (-1 to 1, where -1 = grayscale, 1 = max saturation)
 * @returns {object} - Adjusted HSL color object
 */
export const adjustSaturation = (hsl: hslType, amount: number) => {
  const newSaturation = Math.max(0, Math.min(100, hsl.s + amount * 100));
  return { ...hsl, s: newSaturation };
};

/**
 * Adjusts the hue of a color
 * @param {object} hsl - HSL color object { h: number, s: number, l: number }
 * @param {number} degrees - Degrees to shift hue (-360 to 360)
 * @returns {object} - Adjusted HSL color object
 */
export const adjustHue = (hsl: hslType, degrees: number) => {
  const newHue = (hsl.h + degrees + 360) % 360; // Ensure it stays within 0-360
  return { ...hsl, h: newHue };
};
