export const ExperienceSummary = () => {
  return (
    <section className="resume-section summary-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Experience Summary</h2>
      <div className="resume-section-content">
        <p className="text-reset text-link">
          {`I started my career ${
            new Date().getFullYear() - 2017
          } years ago, in the company of my coordinator at the college where I graduated,` +
            'and I was hired there because of my good performance at the university. The company was a software ' +
            'factory, where I had the opportunity to develop myself as a professional. I participated in projects ' +
            'for Itaipu Binacional (second most hydroelectric in the world), Brazilian Navy, etc. After that I ' +
            'worked at Intelltech, focusing on the development of SHMS and Geo Inspector products in the mining ' +
            'area of digital mines, providing services to clients such as Vale, Samarco, Las bambas, Light, ' +
            'Antamina, CSN, MRN, among others. Today I work at an outsourced company and I have already worked on ' +
            'two projects, the first is a project by the saga group (a reference in the car rental and sale market ' +
            'in Brazil) working in more than 200 units throughout Brazil, and for the Edwin group, company located ' +
            "in London focused on the Education area. I've always worked with java and angular, but also i've " +
            "worked with react and nodejs. I like challenges, as it motivates me to seek creative solutions. I'm " +
            'always looking for update myself in the new technologies that the market asks for, while reviewing the ' +
            'basis and good practices of architecture and design patterns. I incorporate the principles of SOLID ' +
            'and clean code into my implementations, implementing code that not only works, but is maintainable and ' +
            'scalable. Currently my studies are focused on architecture, design patterns and English.'}
        </p>
      </div>
    </section>
  );
};
