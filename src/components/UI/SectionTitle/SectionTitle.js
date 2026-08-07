import "./SectionTitle.css";

/**
 * Reusable section heading used across the site.
 * eyebrow  - small uppercase label above the heading
 * title    - the main heading text
 * subtitle - optional supporting paragraph
 * align    - "center" (default) | "left"
 * light    - true renders in white/light colors for dark sections
 */
function SectionTitle({ eyebrow, title, subtitle, align = "center", light = false }) {
  return (
    <div className={`section-title align-${align} ${light ? "light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
