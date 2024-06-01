import React from "react";
import styles from "@/styles/ResearcherCard.module.css";
// TODO: create a component that displays a single bakery item

interface Researcher {
  id: number;
  name: string;
  researchArea: string;
  description: string;
  email: string;
  imageUrl: string;
  phone: string;
  address: string;
}

interface ResearcherCardProps {
  researcher: Researcher;
  addToFavorites: (researcher: Researcher) => void; // replace any with the type of researcher
}

const ResearcherCard: React.FC<ResearcherCardProps> = (props) => {
  const handleClick = () => {
    props.addToFavorites(props.researcher); // Assuming addToCart requires the id of the item
  };

  return (
    <div className={styles.ResearcherCard}>
      <div className="w-[40%] items-center justify-center">
        <img className={styles.researcherImage} src={props.researcher.imageUrl} alt={props.researcher.name} />
      </div>
      <div className="border-l border-2 border-[#1a1919] border-opacity-50 h-[95%] self-center mr-4"></div>

      <div className="flex flex-col items-center my-4 w-[60%]">
        <h2>{props.researcher.name}</h2>
        <p>Area of research: {props.researcher.researchArea}</p>
        <p>{props.researcher.description}</p>
        <p>Email: {props.researcher.email}</p>
        <p>Phone: {props.researcher.phone}</p>
        <p>Address: {props.researcher.address}</p>
        <button onClick={handleClick}>Add to Favorites</button> {/* New code */}
      </div>
    </div>
  );
};

export default ResearcherCard;
