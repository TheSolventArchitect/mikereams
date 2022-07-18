import React from "react";

const Certifications = ({ data }) => {
  if (data) {
    var certs = data.certs.map(function (certs) {
      var certImage = "images/certs/" + certs.image;
      return (
        <div key={certs.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={certs.url} title={certs.title}>
              <img alt={certs.title} src={certImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{certs.title}</h5>
                  <p>{certs.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed nameOutline">
          <h1>My Recent Certifications</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {certs}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
