import React from "react";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../stores/StoreContext";
import getString from "../../utils/getString";
import "./styles.css";

type Props = {
  category: string;
  title: string;
};

const ExploreButton: React.FC<Props> = ({ category, title }) => {
  const navigate = useNavigate();
  const {
    actions: { setSelectedCategory },
  } = useStoreContext();

  const handleClick = (category: string) => {
    setSelectedCategory(category);
    navigate("/category");
  };
  return (
    <div
      className="explore-button-container"
      onClick={() => handleClick(category)}
    >
      <div className="explore-button-title">{title}</div>
      <div className="explore-button-subtext">{getString("explore_all")}</div>
    </div>
  );
};

export default ExploreButton;
