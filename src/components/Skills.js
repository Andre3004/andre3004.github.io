import { useState } from 'react';

export const Skills = () => {
  const [skills] = useState({
    Frontend: ['React.js', 'Typescript', 'Next.js', 'JavaScript/CSS/HTML', 'Flutter', 'Angular'],
    Backend: ['Nodejs', 'Strapi', 'Java', 'Spring', 'Hibernate', 'SQL', 'Junit', 'Oracle', 'PostgresSql', 'Serverless'],
    Devops: ['Git', 'AWS', 'Docker', 'Jira', 'GitLab', 'BitBucket', 'CI/CD Processes'],
  });
  return (
    <section className="resume-section skills-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
      <div className="resume-section-content">
        <div className="resume-skill-item">
          <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
          <ul className="list-unstyled mb-4">
            {skills['Frontend'].map((skill) => {
              return (
                <>
                  <li className="list-inline-item">
                    <span className="badge bg-secondary badge-pill">{skill}</span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="resume-skill-item">
          <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
          <ul className="list-unstyled mb-4">
            {skills['Backend'].map((skill) => {
              return (
                <>
                  <li className="list-inline-item">
                    <span className="badge bg-secondary badge-pill">{skill}</span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="resume-skill-item">
          <h4 className="resume-skills-cat font-weight-bold">Devops</h4>
          <ul className="list-unstyled mb-4">
            {skills['Devops'].map((skill) => {
              return (
                <>
                  <li className="list-inline-item">
                    <span className="badge bg-secondary badge-pill">{skill}</span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
