import { useState } from 'react';

export const Skills = () => {
  const [skills] = useState({
    Frontend: [
      'Angular 12',
      'Typescript',
      'JavaScript/CSS/HTML',
      'Material Design',
      'Fluent Design',
      'Ant Design',
      'React.js',
      'AngularJS',
      'PIXI.js',
      'Flutter',
    ],
    Backend: [
      'Java',
      'Nodejs',
      'Spring',
      '.Net core and framework',
      'Hibernate',
      'SQL',
      'Junit',
      'Oracle',
      'PostgresSql',
      'SQL server',
    ],
    Devops: [
      'Git',
      'WildFly',
      'AWS',
      'Docker',
      'Kubernetes',
      'RabbitMq',
      'Jira',
      'GitLab',
      'BitBucket',
      'CI/CD Processes',
    ],
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
