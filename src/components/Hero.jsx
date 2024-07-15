import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div>
        <div>
          <div></div>
          <div></div>
        </div>

        <div>
          <h1>Hi, I&apos;m <span>Rishi</span></h1>
          <p>
            Innovative Web Developer | <br />
            Expert in Modern Web Technologies
          </p>
        </div>
      </div>

      {/* Removed ComputersCanvas component */}

      <div>
        <a href="#about">
          <div>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;