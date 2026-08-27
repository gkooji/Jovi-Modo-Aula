function FeatureCard({ icon, iconClass, iconBg, title, children, dark = false }) {
  const cardStyle = dark
    ? { background: "var(--card-bg)", borderColor: "transparent" }
    : undefined;
  const titleStyle = dark ? { color: "white" } : undefined;
  const textStyle = dark ? { color: "var(--gray)" } : undefined;
  const iconStyle = iconBg ? { background: iconBg } : undefined;

  return (
    <article className="feature-card" style={cardStyle}>
      <div className={`feature-icon ${iconClass || ""}`} style={iconStyle}>
        {icon}
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={textStyle}>{children}</p>
    </article>
  );
}

export default FeatureCard;
