import { useEffect, useRef, useState } from "react";

const SectionSeven = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (!ref.current) return;

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

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
