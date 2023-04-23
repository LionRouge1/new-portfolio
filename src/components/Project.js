import PropTypes from 'prop-types';

const Project = ({ project, id }) => {
  const {
    featuredImage, name, description, technologie,
  } = project;
  return (
    <article key={id}>
      <div className={`snapshoot ${ord}`}>
        <img
          className="phone"
          src={featuredImage[0]}
          alt="Project card(mobile version)"
        />
        <img
          className="Dtop"
          src={featuredImage[1]}
          alt="Project card(desktop version)"
        />
      </div>
      <div className="left_block">
        <h2>
          $
          {name[0]}
        </h2>
        <div className="frame">
          <h3>
            $
            {name[1]}
          </h3>
          <div />
          <p>
            $
            {name[2]}
          </p>
          <div />
          <p>
            $
            {name[3]}
          </p>
        </div>
        <p className="text">
          $
          {description}
        </p>
        <ul className="lang">
          $
          {technologie.map((lang) => (lang === 'Ruby on rails' ? `<li className="ruby" key={${technologie.indexof(lang)}}> {${lang}}</li>` : `<li key={${technologie.indexof(lang)}}> {${lang}}</li>`))}
        </ul>
        <button className="btn" type="button">See Project</button>
      </div>
    </article>

  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Project;
