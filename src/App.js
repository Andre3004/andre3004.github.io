// import './App.css';
import { Header } from './components/Header';
import { ExperienceSummary } from './components/ExperienceSummary';
import { RecentProjects } from './components/RecentProjects';
import { WorkExperience } from './components/WorkExperience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Languages } from './components/Languages';

function App() {
  return (
    <>
      <article id="main" className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
          <Header />
          <div className="resume-body p-5">
            <ExperienceSummary />
            <RecentProjects />
            <div className="row">
              <WorkExperience />
              <div className="col-lg-3">
                <Skills />
                <Education />
                <Languages />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;
