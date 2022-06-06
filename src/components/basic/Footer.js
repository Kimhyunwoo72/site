import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_left">
        <h2>OnAndYou</h2>
      </div>
      <div className="footer_right">
        <div className="footer_list">
          <ul>
            <li>
              <Link>home</Link>
            </li>
            <li>
              <Link>about</Link>
            </li>
            <li>
              <Link>inside</Link>
            </li>
            <li>
              <Link>news</Link>
            </li>
          </ul>
        </div>
        <div className="footer_contact">
          <ul>
            <li>PLASTICS CO.,LTD.</li>
            <li>TEL 02-000-000</li>
            <li>FAX 0000-00-0000</li>
            <li>CONTACT US</li>
            <li className="icon">
              <Link>
                <img src="img/Facebook.svg" alt="아이콘" />
              </Link>
              <Link>
                <img src="img/Instagram.svg" alt="아이콘" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_info">
          <ul>
            <li>
              <Link>Catalog</Link>
            </li>
            <li>
              <Link>Download</Link>
            </li>
            <li>
              <Link>Company</Link>
            </li>
            <li>
              <Link>Privacy policy</Link>
            </li>
            <li>
              <Link>Privacy policy</Link>
            </li>
            <li>
              <Link>Cookie policy</Link>
            </li>
          </ul>
          <div className="footer_bottom">©︎ PLASTICS CO.,LTD.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
