import { useReveal } from "../hooks/useReveal";

const SectionSeven = () => {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className={`section-seven ${visible ? "circle" : ""}`}>
      <div className="con-inner">
        <div className="top-con">
          <img src="tiki.png" height={200} width={145} alt="tiki glass" />
          <h1 className="light-h">
            You can’t stop the waves, but you can learn to surf
          </h1>
        </div>
        <div className="bottom-con">
          <div className="image-wrapper">
            <img
              src="whave_jump.webp"
              height={720}
              width={1024}
              alt="Surfer jumping over a wave"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
