import { useState } from 'react';

const Home = () => {
  const [title, setTitle] = useState('Matchoudi');
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>
          I’m a
          {' '}
          <span className="job-container">
            Software Developer
            <span>|</span>
          </span>
          {' '}
          I can help you build a product , feature
          or website Look through some of my work and experience! If you like
          what you see and have a project you need coded, don’t hesitate to
          contact me.
        </p>
        <a href="#contact">LET’S CONNECT</a>
        <ul className="social_media">
          <li>
            <a href="https://twitter.com/Matchoudi1" target="_blank" rel="noopener noreferrer"><i aria-label="Twitter" className="fab fa-twitter" /></a>
          </li>
          <li>
            <a href="https://linkedin.com/in/matchoudi" target="_blank" rel="noopener noreferrer"><i aria-label="linkedin" className="fab fa-linkedin" /></a>
          </li>
          <li>
            <a href="https://medium.com/@matchoudiavlessi" target="_blank" rel="noopener noreferrer"><i aria-label="Medium" className="fab fa-medium-m" /></a>
          </li>
          <li>
            <a href="https://github.com/LionRouge1" target="_blank" rel="noopener noreferrer"><i aria-label="github" className="fab fa-github" /></a>
          </li>
          <li>
            <a href="https://angel.co/u/matchoudi" target="_blank" rel="noopener noreferrer"><i aria-label="angel" className="fab fa-angellist" /></a>
          </li>
        </ul>
      </div>
      <img src="https://media2.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif?cid=ecf05e47r26kcnl4e1lmq4l7ya03fsx9e4mvi7x6von95abr&rid=giphy.gif&ct=g" alt="Background" />
    </section>
  );
};

export default Home;
