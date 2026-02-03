import { useEffect, useRef, useState } from "react";

const SectionTwo = () => {
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (!imgRef.current) return;

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-two">
      <div className="inner-con">
        <div className="inner-left">
          <img
            ref={imgRef}
            className={`hawaii ${visible ? "appear" : ""}`}
            src="hawaii.webp"
            height={720}
            width={480}
            alt="hawaii landscape"
          />
        </div>
        <div className="inner-right">
          <h1>The best surfer out there is the one having the most fun.</h1>
          <p>
            Surfing isn’t about perfection. Reading the ocean, respecting its
            power, and embracing every ride, no matter how short. The sea
            teaches patience, resilience, and flow—lessons that follow you back
            to shore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
