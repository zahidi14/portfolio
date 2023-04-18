import backg from "../asset/HeroBackg.svg";

const Hero = () => {

    return (
        <div className="hero" style={{ background: `url(${backg}) no-repeat center center fixed`, 
        backgroundSize: 'cover'  }}>
            <section id="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>I am a web developer who specializes in creating beautiful and functional websites and applications.</p>
                <button>Contact Me</button>
            </section>
        </div>
    )
}

export default Hero;