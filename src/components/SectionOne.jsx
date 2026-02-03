import { useEffect, useRef, useState } from "react";

const SectionOne = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();

  const [visible, setVisible] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible((prev) => ({
            ...prev,
            [entry.target.dataset.key]: true,
          }));

          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(img1Ref.current);
    observer.observe(img2Ref.current);
    observer.observe(img3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-one">
      <div className="inner-con">
        <div className="inner-left">
          <img
            ref={img1Ref}
            data-key="img1"
            className={visible.img1 ? "left slidefrombottom" : "left"}
            src="ryan.webp"
            height={480}
            width={250}
            alt="whave landscape"
          />
          <img
            ref={img2Ref}
            data-key="img2"
            className={visible.img2 ? "right slidefromtop" : "right"}
            src="palms.webp"
            height={480}
            width={250}
            alt="palm trees"
          />
        </div>
        <div className="inner-right">
          <h1>Surfing is not a sport, It’s a way of life.</h1>
          <p className="dark-p">
            Surfing is where time slows down. Out past the break, the noise
            fades, the mind clears, and all that matters is the rhythm of the
            ocean. Each wave is a reminder that control is an illusion—you don’t
            fight the sea, you move with it.
          </p>
          <img
            ref={img3Ref}
            data-key="img3"
            className={visible.img3 ? "pov-board spotlight" : "pov-board"}
            src="pov_board.webp"
            height={480}
            width={560}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
