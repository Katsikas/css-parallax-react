import { useReveal } from "../hooks/useReveal";

const SectionTwo = () => {
  const { ref, visible } = useReveal();

  return (
    <div className="section-two">
      <div className="inner-con">
        <div className="inner-left">
          <img
            ref={ref}
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
