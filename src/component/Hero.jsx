import backg from "../asset/HeroBackg.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        background: `url(${backg}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <h1>Hi ! I'm Zahidi</h1>
      <p>
        I am a front end web developer who specializes in creating beautiful and
        functional websites and applications.
      </p>
      <button>More About Me...</button>
    </section>
  );
};

export default Hero;
