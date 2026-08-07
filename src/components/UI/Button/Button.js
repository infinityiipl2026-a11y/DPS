import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Reusable Button component.
 * Renders as a router <Link> when `to` is provided,
 * an <a> when `href` is provided, otherwise a <button>.
 */
function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  icon,
  type = "button",
  className = "",
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}

export default Button;
