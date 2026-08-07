import "./Loader.css";

/**
 * Simple full-page / inline loading spinner.
 * fullscreen - true covers the viewport (initial app load)
 */
function Loader({ fullscreen = false }) {
  return (
    <div className={fullscreen ? "loader-overlay" : "loader-inline"}>
      <span className="loader-spinner" />
    </div>
  );
}

export default Loader;
