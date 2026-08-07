import "./NotFound.css";
import Button from "../../components/UI/Button/Button";

function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="not-found-code">404</span>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Button to="/" variant="secondary">Back to Home</Button>
      </div>
    </section>
  );
}

export default NotFound;
