import { useMultiReveal } from "../hooks/useMultiReveal";

const SectionOne = () => {
  const { visible, register } = useMultiReveal(["img1", "img2", "img3"]);

  return (
    <div className="section-one">
      <div className="inner-con">
        <div className="inner-left">
          <img
            ref={register("img1")}
            data-reveal="img1"
            className={visible.img1 ? "left slidefrombottom" : "left"}
            src="ryan.webp"
            height={480}
            width={250}
            alt="whave landscape"
          />
          <img
            ref={register("img2")}
            data-reveal="img2"
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
            ref={register("img3")}
            data-reveal="img3"
            className={visible.img3 ? "pov-board spotlight" : "pov-board"}
            src="pov_board.webp"
            height={480}
            width={560}
            alt="POV surfboard"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
