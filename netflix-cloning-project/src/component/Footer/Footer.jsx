import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="all-footer">
      <div className="footer">
        <div className="footer-icon">
          <ul>
            <li>
              <FacebookOutlinedIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>audio Description</li>
              <li>Inveseter Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms Of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        {/* footer data */}

        <div className="service-code">
          <p>Service code</p>
        </div>
        <div className="copy-right">
&copy;1997 -2024 Netflix, Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;
