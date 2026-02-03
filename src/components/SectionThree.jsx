import { useReveal } from "../hooks/useReveal";

const SectionThree = () => {
  const { ref, visible } = useReveal();

  return (
    <div className="section-three">
      <div className="con-inner">
        <h1 ref={ref} className={`title ${visible ? "fadein" : ""}`}>
          Let the sea set you free
        </h1>
        <img src="tiki.png" className="tiki" height={500} width={280} />
      </div>
    </div>
  );
};

export default SectionThree;
