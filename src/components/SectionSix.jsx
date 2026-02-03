import { useMultiReveal } from "../hooks/useMultiReveal";

const SectionSix = () => {
  const { visible, register } = useMultiReveal(["img1", "img2", "img3"]);

  return (
    <div className="section-six">
      <h2>Between Sets, Between Selves</h2>
      <div className="con-inner">
        <div className="left">
          <img
            ref={register("img1")}
            data-reveal="img1"
            className={visible.img1 ? "left-img circle" : "left-img"}
            src="sea.webp"
            height={480}
            width={250}
            alt="sea landscape with two surfers"
          />
          <img
            ref={register("img2")}
            data-reveal="img2"
            className={visible.img2 ? "right-img circle" : "right-img"}
            src="sam.webp"
            height={480}
            width={250}
            alt="surfers paddling"
          />
        </div>
        <div className="right light">
          <h2>Where Boards Become Compass Needles</h2>
          <p>
            There are days when the sea is messy and stubborn, and you ride
            anyway. Those sessions don’t make highlight reels, but they build a
            private kind of faith. You learn that joy isn’t only in perfect
            barrels; it’s in wax on fingers, sand in the car, and the stubborn
            decision to paddle back out.
          </p>
        </div>
      </div>
      <div className="con-inner">
        <div className="right light">
          <h2>The Geography of a Wave</h2>
          <p>
            A wave is born far from the beach, in weather you’ll never see. By
            the time it reaches you it has traveled more miles than most dreams,
            carrying wind stories in its spine. When it finally stands up, green
            and glassy, it isn’t asking for heroics. It’s asking for attention.
          </p>
        </div>
        <div className="left">
          <img
            ref={register("img3")}
            data-reveal="img3"
            className={visible.img3 ? "whave-img circle" : "whave-img"}
            src="whave_surf.webp"
            height={480}
            width={560}
            alt="surfer riding whave"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
