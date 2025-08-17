import ExpandableList from "@/utils/expandableList/ExpandableList";
import Filter from "./Filter";
import MovieGrid from "./MovieGrid";
import GradientText from "@/utils/gradientText/GradientText";
import { useState } from "react";

const MoviesSection = ({ setSelectedMovie, selectedMovie }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="peliculas" className="scroll-mt-20  ">
      <div className="flex justify-between items-end px-8 md:px-16 h-[50px] mb-4">
        <h1 className="flex justify-center items-end gap-2">
          <GradientText
            colors={["#072b51", "#00B3FA", "#072b51", "#00B3FA", "#00B3FA"]}
            animationSpeed={12}
            showBorder={false}
            className="font-Anton text-4xl md:text-5xl text-center "
          >
            PELICULAS
          </GradientText>
          <span className="text-[#aaa] font-medium text-1xl">
            {selectedMovie}
          </span>
        </h1>

        <ExpandableList
          title={"Categoria"}
          isOpen={open}
          onToggle={() => setOpen((state) => !state)}
          description={
            <Filter
              selectedTag={selectedMovie}
              setSelectedTag={setSelectedMovie}
              closeList={setOpen}
              role={"movie"}
            />
          }
        />
      </div>

      {/* Mostrar las películas en una cuadrícula */}
      <MovieGrid selectedMovie={selectedMovie} />
    </div>
  );
};

export default MoviesSection;
