/** Formats a numeric string like "500" into "500+" for stat displays. */
export function formatStat(value, suffix = "+") {
  return `${value}${suffix}`;
}
