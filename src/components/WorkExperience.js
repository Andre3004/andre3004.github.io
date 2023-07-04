import { useState } from 'react';

export const WorkExperience = () => {
  const [workExperiences] = useState([
    {
      title: 'Software Engineer - Senior',
      company: 'Simple Syntax (Remote)',
      duration: 'October 2020 to Present',
      location: 'São Paulo - Brazil / London - UK',
      summary: `Development and integrations in several projects of the saga group 
                acting in more than 200 units throughout Brazil and for the Edwin group, 
                company located in London focused on the Education area .`,
      activities: [
        'Development of new features using Reactjs, Nodejs, Java, Angular 12, JSF, Java EE, Spring, WildFly / Jboss, AWS.',
        'Integration between the systems that make up the group, and external integration, such as salesforce and the like.',
        'Troubleshooting',
        'Create UI from scratch',
        'Develop back-end and front-end',
        'Create integration tests and unit tests',
        'Gathering requirements from stakeholders.',
      ],
      tecnologies: [
        'Angular',
        'React',
        'Typescript',
        'Git',
        'Jira',
        'GitLab',
        'BitBucket',
        'CI/CD Processes',
        'Java',
        'Nodejs',
        'Spring',
        'WildFly',
        'AWS',
        'Spring',
        'Docker',
        'Kubernetes',
        'JavaScript',
        'Oracle',
        'PostgresSql',
        'Material Design',
      ],
    },
    {
      title: 'Mobile Developer - Freelancer',
      company: 'UDC (Remote)',
      duration: 'February 2021 - October 2021',
      location: 'Foz do Iguaçu - Brazil',
      summary: `Developing the UDC application responsible for several units. It was developed using Flutter, spring
                  boot, postgres, performing integrations with the ERP.`,
      activities: ['Architecture development.', 'Front-end and back-end implementation.', 'Creation of UI and UX.'],
      tecnologies: ['Flutter', 'Java', 'Spring', 'PostgresSql', 'Docker'],
    },
    {
      title: 'Software Engineer - Middle',
      company: 'Intelltech (Hybrid)',
      duration: 'January 2019 to October 2020',
      location: 'Foz do Iguaçu - Brazil',
      summary: ` Development of SHMS and Geo Inspector products focusing on the mining area of digital mines, providing
                  services to clients such as Vale, Samarco, Las Bambas, Light, Antamina, CSN, MRN, among others. In
                  this period I had the opportunity to develop myself with new challenges such as rebuilding a legacy
                  system to a new version using react and .net core, it was very challenging because the legacy was
                  being used in all clients, so it had to be a gradual change.. Among other projects I developed in
                  parallel.`,
      activities: [
        'Requirements gathering with the client.',
        'Use of scrum methodology.',
        'Troubleshooting',
        'Create UI from scratch',
        'Develop back-end and front-end',
        'Create integration tests and unit tests',
        'Software development using .Net core and framework, React.js, AngularJS, PIXI.js, Angular 8 ',
        'Using Microservices and Monolithic architecture.',
      ],
      tecnologies: [
        '.Net core and framework',
        'React.js',
        'AngularJS',
        'Angular',
        'Typescript',
        'Git',
        'BitBucket',
        'CI/CD Processes',
        'Docker',
        'PIXI.js',
        'RabbitMq',
        'SQL server',
      ],
    },
    {
      title: 'Software Engineer - Junior',
      company: 'Eits',
      duration: 'August 2017 to January 2019',
      location: 'Foz do Iguaçu - Brazil',
      summary: ` Development in several corporate projects for clients such as Itaipu Binacional, Força Marinha do
                  Brazil and Itaipu Technological Park. In this period I had the opportunity to develop large projects,
                  participate in decisions that would impact the project, give an opinion on the analysis part, develop
                  solutions with good practices.`,
      activities: [
        'Requirements gathering with the client.',
        'UML Modeling.',
        'Measurement of application size in FPA.',
        'Use of scrum methodology.',
        'Implementation of Hibernate, Spring Framework, Material Design and Angular 6 software.',
        'Implementation of REST webservice using Spring.',
        'Using Microservice and monolithic architecture.',
        'Troubleshooting',
        'Create UI from scratch',
        'Develop back-end and front-end',
        'Create integration tests and unit tests',
      ],
      tecnologies: ['Java', 'Spring', 'JavaScript', 'Oracle', 'PostgresSql', 'Angular', 'Material Design'],
    },
    {
      title: 'Developer - Intern',
      company: 'Eits',
      duration: 'February 2017 to August 2017',
      location: 'Foz do Iguaçu - Brazil',
      summary: ` I worked in support of development teams and studied the stacks of technologies used in the company…
                  My main activity was to develop a system starting from scratch, with just a few requirements, it was a
                  challenge to be hired, where the only help that I had was from the development teams, but I had to
                  make a system myself from scratch.`,
      activities: [
        'Studied the stacks of technologies used in the company.',
        'Support of development teams.',
        'Develop an application from scratch.',
      ],
      tecnologies: ['Java', 'Spring', 'JavaScript', 'Oracle', 'PostgresSql', 'Angular', 'Material Design'],
    },
  ]);

  const renderActivies = (workExperience) => {
    return workExperience.activities.map((activity, index) => {
      return <li key={index}>{activity}</li>;
    });
  };

  const renderTecnology = (workExperience) => {
    return workExperience.tecnologies.map((tecnology, index) => {
      return (
        <li key={index} className="list-inline-item">
          <span className="badge bg-secondary badge-pill">{tecnology}</span>
        </li>
      );
    });
  };

  return (
    <div className="col-lg-9">
      <section className="resume-section experience-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
        <div className="resume-section-content">
          <div className="resume-timeline position-relative">
            {workExperiences.map((workExperience, index) => (
              <article className="resume-timeline-item position-relative pb-5" key={index}>
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1">{workExperience.title}</h3>
                    <div className="resume-company-name ms-auto">{workExperience.company}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="resume-position-time">{workExperience.duration}</div>
                    <div className="resume-position-time">{workExperience.location}</div>
                  </div>
                </div>
                <div className="resume-timeline-item-desc">
                  <p>{workExperience.summary}</p>
                  <h4 className="resume-timeline-item-desc-heading font-weight-bold">Main activities:</h4>
                  <ul>{renderActivies(workExperience)}</ul>
                  <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                  <ul className="list-inline">{renderTecnology(workExperience)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
