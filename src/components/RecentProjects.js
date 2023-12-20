export const RecentProjects = () => {
  return (
    <div className="row">
      <div className="col-lg-9">
        <section className="resume-section experience-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Recent Projects</h2>

          <ul>
            <li>
              Created a front-end of new application standalone using react, immer, zod, zustand, styled-components,
              tailwind, i18n and other recenty libraries
            </li>
            <li>
              Built a aws architecture using (CloudFront, Route53, Certificate Manager, S3, EC2, ECS with ALB, ECR,
              RDS).
            </li>
            <li>Created a pipeline using actions from github.</li>
            <li>Built a architecture to using AWS S3 instead file system.</li>
            <li>Implemented a architecture of store using zustand instead redux</li>
            <li>Integration create/delete/update/list with salesforce.</li>
            <li>Create a strucuture to solve a issue using SQS.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
