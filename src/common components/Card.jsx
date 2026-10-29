function Card({
  title,
  children,
  className = "",
  onClick,
}) {
  return (
    <div
      className={`common-card ${className}`}
      onClick={onClick}
    >
      {title && <h2 className="card-title">{title}</h2>}

      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
