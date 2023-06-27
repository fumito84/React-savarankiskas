import { useEffect } from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import "./Home.scss";

const Home = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/fumito84", "_blank");
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".home-container").classList.add("animate-in");
    }, 0.1);
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hey, i'm Tomas Vasiljevas</h1>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>

      <div className="icons-container">
        <FaLinkedin className="icon" onClick={handleLinkedInClick} />
        <FaFacebook className="icon" onClick={handleFacebookClick} />
        <FaGithub className="icon" onClick={handleGitHubClick} />
      </div>
    </div>
  );
};

export default Home;