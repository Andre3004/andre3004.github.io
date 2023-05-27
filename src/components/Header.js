import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
  return (
    <header className="resume-header pt-4 pt-md-0">
      <div className="row">
        <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
          <img className="picture" src={'profile.jpg'} alt="" />
        </div>
        <div className="col">
          <div className="row p-4 justify-content-center justify-content-md-between">
            <div className="primary-info col-auto">
              <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">André Luiz Damasceno</h1>
              <div className="title mb-3">Full Stack Developer</div>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>
                  {'andreferreira.junior235@gmail.com'}
                </li>
                <li>
                  <i className="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>+55 (45) 98421-3676
                </li>
              </ul>
            </div>
            <div className="secondary-info col-auto mt-2">
              <ul className="resume-social list-unstyled">
                <li className="mb-3">
                  <a
                    className="text-link"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/andre-luiz-damasceno-bb1945138/"
                    target="_blank">
                    <span className="fa-container text-center me-2">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </span>
                    in/andre-damasceno
                  </a>
                </li>
                <li className="mb-3">
                  <a target="_blank" className="text-link" rel="noreferrer" href="https://github.com/andre3004">
                    <span className="fa-container text-center me-2">
                      <FontAwesomeIcon icon={faGithubAlt} />
                    </span>
                    github.com/Andre3004
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
