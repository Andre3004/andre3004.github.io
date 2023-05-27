export const Languages = () => {
  return (
    <section className="resume-section language-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
      <div className="resume-section-content">
        <ul className="list-unstyled resume-lang-list">
          <li className="mb-2">
            <span className="resume-lang-name font-weight-bold">English</span>
            <small className="text-muted font-weight-normal">(Advanced)</small>
          </li>
          <li className="mb-2 align-middle">
            <span className="resume-lang-name font-weight-bold">Portuguese</span>{' '}
            <small className="text-muted font-weight-normal">(Native)</small>
          </li>
        </ul>
      </div>
    </section>
  );
};
