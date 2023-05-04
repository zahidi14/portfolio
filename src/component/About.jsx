import bac from "../asset/AboutBack.svg";

const About = () => {
  return (
    <section
      id="about"
      style={{
        background: `url(${bac}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <div className="header">
        <h1>About Me</h1>
      </div>
      <p>
        Here you can write a brief introduction about yourself and your skills.
      </p>
    </section>
  );
};
export default About;
