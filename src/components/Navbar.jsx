
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const handleClick = (platform) => {
    if (platform === 'linkedin') {
      window.open("https://linkedin.com/in/pavan-k-3363a1250", );
    } else if (platform === 'github') {
      window.open("https://github.com/pavank250701?tab=repositories", );
    }
  };
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <FaLinkedin onClick={() => handleClick('linkedin')} style={{ cursor: 'pointer'}}/>
        <FaGithub onClick={() => handleClick('github')} style={{ cursor: 'pointer'}}/> 
      </div>
    </nav>
  );
};

export default Navbar;
