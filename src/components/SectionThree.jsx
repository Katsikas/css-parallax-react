import { useEffect, useRef, useState } from "react";

const SectionThree = () => {
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
