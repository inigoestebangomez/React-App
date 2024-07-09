import image1 from "../assets/logo.png"
import image2 from "../assets/icon_logo.png"

function Navbar() {
  return (
    <div className="navbar">
      <img id="logo" src={image1} alt="logo" />
      <img id="menu_icono" src={image2} alt="menu" />
    </div>
  )
}

export default Navbar
