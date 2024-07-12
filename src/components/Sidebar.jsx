import { Link } from "react-router-dom"


function Sidebar(props) {
  return (
    <div className="sidebar">
      <Link to = "/" >Home</Link>
      <Link to = "/about" >About sparTech</Link>
    </div>
  )
}

export default Sidebar
