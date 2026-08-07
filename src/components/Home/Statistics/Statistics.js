import "./Statistics.css";
import { useCounter } from "../../../hooks/useCounter";

const stats = [
  { end: 25, suffix: "+", label: "Years Experience" },
  { end: 500, suffix: "+", label: "Machines Installed" },
  { end: 100, suffix: "+", label: "Happy Clients" },
  { end: 50, suffix: "+", label: "Cities Served" },
];

function StatItem({ end, suffix, label }) {
  const [ref, value] = useCounter(end);
  return (
    <div className="stat-item" ref={ref}>
      <h3>
        {value}
        <span>{suffix}</span>
      </h3>
      <p>{label}</p>
    </div>
  );
}

function Statistics() {
  return (
    <section className="statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
