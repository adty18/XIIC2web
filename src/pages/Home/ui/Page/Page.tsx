import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
        <div className="hero relative min-h-screen">
          <img
            src="/images/hero.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="images"
          />
          <div className="hero-overlay absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="hero-content relative z-10 text-center text-neutral-content">
            <div className="max-w-md px-4 md:px-0">
              <h1 className="mb-5 text-3xl font-bold text-white md:text-5xl">
                Welcome to XII-C2
              </h1>
              <p className="mb-5 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              {/* <button className="btn-primary btn">Get Started</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
