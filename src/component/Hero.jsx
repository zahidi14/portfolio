import backg from "../asset/Night.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        background: `url(${backg}) no-repeat center center  fixed`,
        backgroundSize: "cover",
      }}
    >
      <div className="contain">
        <h1>Hi ! I'm Zahidi</h1>
        <p>
          I am a front end web developer who specializes in creating beautiful
          and functional websites and applications.
        </p>
        <button>More About Me...</button>
      </div>
    </section>
  );
};

export default Hero;
