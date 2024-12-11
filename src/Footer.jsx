import "./Footer.css";

export const Footer = () => {
  const linkedIn = "https://www.linkedin.com/in/jaison-jeba-8328b6195/";
  const gitHub = "https://github.com/jaisonjeba";

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div className="footer">
      <p>©️ reserved by Jaison</p>
      <div className="social">
        <img
          onClick={() => handleClick(linkedIn)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="linkedin"
        />
        <label>Jaison Jeba</label>
        <img
          onClick={() => handleClick(gitHub)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="github"
        />
        <label>Jaison Jeba</label>
      </div>
    </div>
  );
};
