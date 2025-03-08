 
const Foot = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="/">
            <i className="fa-brands fa-x"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-Linked in"></i>
          </a>
        </div>
        <div className="footerNav">
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
      <div className="footerBottom">
        <p>
          Copyright &copy;2024; Designed by{" "}
          <span className="designer">TopML research center</span>
        </p>
      </div>
    </footer>
  );
};
 
export default Foot;
 
 