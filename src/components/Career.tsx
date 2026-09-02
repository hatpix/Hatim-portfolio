import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Design Master Ltd · Kuwait</h5>
              </div>
              <h3>2022–NOW</h3>
            </div>
            <p>
              IT & Conference Management Company. Design UI screens and layouts for app/website
              products in Figma, create branding and marketing graphics for IT/conference
              campaigns, and partner with developers to streamline design handoff.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>TOC Tours Pvt Ltd · India</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Travel & Tourism Company. Designed social media creatives and website banners for
              tour packages, built and maintained the company website on Wix, and designed logos
              and illustrations approved on first review.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Graphic Designer</h4>
                <h5>Saevah · India</h5>
              </div>
              <h3>2020–21</h3>
            </div>
            <p>
              Digital Marketing Company. Designed promotional banners and ad creatives for client
              campaigns, produced product mockups in Photoshop/Illustrator, and managed ongoing
              website content updates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Graphic Designer</h4>
                <h5>Soor Technologies · Kuwait</h5>
              </div>
              <h3>2018–19</h3>
            </div>
            <p>
              IT Company (Freelance). Designed social media graphics and campaign visuals,
              sketching multiple concept directions per brief to reduce client revisions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Green Cap Media · India</h5>
              </div>
              <h3>2017–18</h3>
            </div>
            <p>
              Digital Marketing & Event Management. Designed print-ready brochures, banners, and
              signage for events, plus social posts aligned with client brand guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
