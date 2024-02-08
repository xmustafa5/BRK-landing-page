import { logo, logoText } from "../assets/svg";
import { Email, Phone } from "../assets/svg/contact";
import { facebook, instagram, linkedin } from "../assets/svg/socialMedia";

const NavBar = () => {
  return (
    <div className="flex header flex-col ">
      <div className="bg-blue-120 w-full  flex justify-between items-center h-[80px]">
        <div className="flex  gap-3 ml-24 ">
          {logo} {logoText}
        </div>
        <div className="flex justify-center items-center mr-24 gap-4">
          <div className="flex justify-center items-center gap-4">
            {Email}
            <div className="text-white light text-md">
              <p>Email</p>
              <p>contact@brk-iq.com</p>
            </div>
          </div>
          <div className="flex justify-center light items-center gap-4">
            {Phone}
            <div className="text-white text-md">
              <p>Email</p>
              <p>contact@brk-iq.com</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default NavBar;
