import React from "react";
 
const Foot = () => {
  return (
    <footer>
      <div class="footerContainer">
        <div class="socialIcons">
          <a href="/">
            <i class="fa-brands fa-x"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-Linked in"></i>
          </a>
        </div>
        <div class="footerNav">
          <ul>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">site terms</a>
            </li>
            <li>
              <a href="/">Privacy and Cookie Policy</a>
            </li>
            <li>
              <a href="/">Email@email.com</a>
            </li>
            <li>
              <a href="/">Address</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footerBottom">
        <p>
          Copyright &copy;2024; Designed by{" "}
          <span class="designer">TopML research center</span>
        </p>
      </div>
    </footer>
  );
};
 
export default Foot;
 
 