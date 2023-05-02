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
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am a web developer who specializes in creating beautiful and
        functional websites and applications.
      </p>
      <button>Contact Me</button>
    </section>
  );
};

export default Hero;
