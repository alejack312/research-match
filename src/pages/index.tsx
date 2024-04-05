import Image from "next/image";
import { Inter } from "next/font/google";
import researchers from "@/data/mockResearcher.json";
import BaptistHeader from "@/components/BaptistHeader";
import BaptistFooter from "@/components/BaptistFooter";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import ResearcherCard from "@/components/ResearcherCard";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

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

interface FavoritesProps {
  favorites: Researcher[];
  setFavorites: Dispatch<SetStateAction<Researcher[]>>;
  removeFromFavorites: (researcher: Researcher) => void;
}

const Feed = (props: FavoritesProps) => {
  const [data, setData] = useState(researchers);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const loadData = () => {
    setData(researchers);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(props.favorites);
  }, [props.favorites]);

  if (!data) return <div>Something went wrong...</div>;

  const addToFavorites = (researcher: Researcher) => {
    if (props.favorites.includes(researcher)) {
      return;
    } else {
      props.setFavorites([...props.favorites, researcher]);
    }
  };

  const sortResearchers = (researchers: Researcher[]) => {
    let sortedResearchers = [...researchers];

    if (sortOrder === "asc") {
      sortedResearchers.sort((a, b) =>
        a.researchArea.localeCompare(b.researchArea)
      );
    } else if (sortOrder === "desc") {
      sortedResearchers.sort((a, b) =>
        b.researchArea.localeCompare(a.researchArea)
      );
    }

    return sortedResearchers;
  };

  const filterByArea = (researchers: Researcher[]) => {
    if (selectedArea === null) {
      return researchers;
    }

    return researchers.filter(
      (researcher) => researcher.researchArea === selectedArea
    );
  };

  const resetFiltersAndSort = () => {
    setSortOrder(null);
    setSearchKeyword("");
    setSelectedArea(null);
  };

  const searchResearchers = (researchers: Researcher[]) => {
    if (searchKeyword === "") {
      return researchers;
    }

    return researchers.filter((researcher) =>
      researcher.description.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  };

  const buildElements = () => {
    const sortedResearchers = sortResearchers(researchers);
    const filteredResearchers = filterByArea(sortedResearchers);
    const searchedResearchers = searchResearchers(filteredResearchers);

    const list = searchedResearchers.map(
      (
        item,
        index // TODO: map bakeryData to BakeryItem components
      ) => (
        <ResearcherCard
          key={index}
          researcher={item}
          addToFavorites={addToFavorites}
        />
      )
    );

    return list;
  };

  return (
    /*Keys are a way that react uses to identify what should or shouldn't 
      be updated. Keep amount of time to render down slightly */

    <div className="container">
      <div className="flex flex-row items-center self-center justify-center">
        <div className="mx-4">
          <label>
            Research Area:
            <select
              className="border-2 border-[#1a1919]"
              value={selectedArea ?? ""}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option value="">All</option>
              {/* Replace 'Area1', 'Area2', etc. with your actual research areas */}
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Biomedical Engineering">
                Biomedical Engineering
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Environmental Science">
                Environmental Science
              </option>
            </select>
          </label>
        </div>
        <div className="mx-4">
          <label>
            Sort order:
            <select
              className="border-2 border-[#1a1919]"
              value={sortOrder ?? ""}
              onChange={(e) =>
                setSortOrder(e.target.value as "asc" | "desc" | null)
              }
            >
              <option value="">None</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
        <div className="mx-4">
          <label>
            Description Search:
            <input
              className="border-2 border-[#1a1919]"
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </label>
        </div>
        <button
          className="bg-[#2ea84a] rounded-xl mx-4 "
          onClick={resetFiltersAndSort}
        >
          Reset filters and sort
        </button>
      </div>
      <div className="menuItems">{buildElements()}</div>
    </div>
  );
};

const Favorites = (props: FavoritesProps) => {
  //Get the favorites list from the Feed component

  const showFavorites = () => {
    if (props.favorites.length === 0) {
      console.log("No favorites");
      return <p>Currently have no favorites</p>;
    }

    const jsxlist = props.favorites.map((researcher, index) => {
      const item = researchers[index];
      return (
        <div className="flex flex-col justify-center" key={index}>
          <p>
            {item.name} - {item.researchArea}
          </p>
          <button
            className="bg-[#2ea84a] rounded-xl mx-4"
            onClick={() => props.removeFromFavorites(researcher)}
          >
            Remove
          </button>
        </div>
      );
    });

    return jsxlist;
  };

  return (
    <div className={styles.favorites}>
      <h2>Favorites</h2>
      {showFavorites()}
    </div>
  );
};

export default function Home() {
  const [favorites, setFavorites] = useState<Researcher[]>([]);

  const addToFavorites = (researcher: Researcher) => {
    setFavorites([...favorites, researcher]);
  };

  const removeFromFavorites = (researcher: Researcher) => {
    setFavorites(favorites.filter((item) => item !== researcher));
  };

  return (
    <div>
      <BaptistHeader />
      <main className="flex flex-row">
        <Feed
          favorites={favorites}
          setFavorites={setFavorites}
          removeFromFavorites={removeFromFavorites}
        />
        <Favorites
          favorites={favorites}
          setFavorites={setFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </main>
      {/* <BaptistFooter /> */}
    </div>
  );
}
