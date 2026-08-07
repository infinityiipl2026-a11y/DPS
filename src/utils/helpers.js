/**
 * Generates a simple placeholder image as an inline SVG data URI.
 * Used anywhere a real product/brand photo is not yet available —
 * replace the corresponding <img src> with a real asset when ready.
 */
export function placeholderImage(label = "Image", w = 600, h = 400, bg = "#173E92") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="${bg}"/>
      <text x="50%" y="50%" fill="#ffffff" font-family="sans-serif" font-size="20"
        text-anchor="middle" dominant-baseline="middle" opacity="0.85">${label}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
