import ExpandableList from "@/utils/expandableList/ExpandableList";
import Filter from "./Filter";
import SeriesGrid from "./SeriesGrid";
import GradientText from "@/utils/gradientText/GradientText";
import { useState } from "react";

const SeriesSection = ({ setSelectedSerie, selectedSerie }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="series" className="scroll-mt-20">
      <div className="flex justify-between items-end px-8 md:px-16 h-[50px]">
        <h1 className="flex justify-center items-end gap-2 ">
          <GradientText
            colors={["#072b51", "#00B3FA", "#072b51", "#00B3FA", "#00B3FA"]}
            animationSpeed={12}
            showBorder={false}
            className="font-Anton text-4xl md:text-5xl text-center "
          >
            SERIES
          </GradientText>
          <span className="text-[#aaa] font-medium ">{selectedSerie}</span>
        </h1>

        <ExpandableList
          title={"Categoria"}
          isOpen={open}
          onToggle={() => setOpen((state) => !state)}
          description={
            <Filter
              selectedTag={selectedSerie}
              setSelectedTag={setSelectedSerie}
              closeList={setOpen}
              role={"serie"}
            />
          }
        />
      </div>

      {/* Mostrar las series en una cuadrícula */}
      <SeriesGrid selectedSerie={selectedSerie} />
    </div>
  );
};

export default SeriesSection;
