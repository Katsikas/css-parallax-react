const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="inner-con">
        <div className="inner-left">
          <img
            className="left"
            src="ryan.webp"
            height={480}
            width={250}
            alt="whave landscape"
          />
          <img
            className="right"
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
            className="pov-board"
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
