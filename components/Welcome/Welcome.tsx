import * as React from 'react';

export default function Welcome() {
  return (
    <React.Fragment>
      <div className="page-footer" xyz="fade bottom ease-in-out delay-10">
        <div
          className="footer-logo xyz-nested"
          xyz="fade left ease-in-out delay-10"
        ></div>
        <div
          className="footer-right"
          xyz="fade up stagger ease-in-out delay-10"
        >
          <div className="footer-item xyz-nested"></div>
          <div className="footer-item xyz-nested"></div>
          <div className="footer-item xyz-nested"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
