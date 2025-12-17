"use client";

import "./company-card.css";

interface CompanyCardProps {
  position?: string;
  company?: string;
  logoColors?: [string, string, string, string];
  shadowColor?: string;
  link?: string;
  onClick?: () => void;
}

const CompanyCard = ({
  position = "Co Founder",
  company = "RTX Software",
  logoColors = ["#f25022", "#7fba00", "#00a4ef", "#ffb900"],
  shadowColor = "#00a4ef",
  link,
  onClick,
}: CompanyCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
    onClick?.();
  };

  return (
    <button
      className="company-card flex justify-between"
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      onClick={handleClick}
    >
      <div className="company-card-logo">
        {logoColors.map((color, index) => (
          <div
            key={index}
            className="company-card-logo-square"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="company-card-text">
        <span>{position}</span>
        <span>{company}</span>
      </div>
    </button>
  );
};

export default CompanyCard;
