// src/utils/temperature.ts

/**
 * Formats a Celsius temperature with °C symbol.
 * @param temp Temperature in Celsius
 * @returns Formatted string, e.g., "22°C"
 */
export const formatCelsiusWithUnit = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};
