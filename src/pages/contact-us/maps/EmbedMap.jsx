import React from "react";
import "./embed-map.scss"; // create this file



function EmbedMap() {
  return (
    <div className="connect-map">
      <div className="container">
        <div className="embed-map-responsive">
              <div className="embed-map-container">
                <iframe
                  className="embed-map-frame"
                  src="https://maps.google.com/maps?width=1320&height=550&hl=en&q=mohali&t=k&z=16&ie=UTF8&iwloc=B&output=embed"
                  title="Mohali Map"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  allowFullScreen
                />
                {/* Removed suspicious external credit link */}
              </div>
        </div>
      </div>
    </div>

  );
}

export default EmbedMap;