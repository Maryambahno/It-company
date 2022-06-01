import{NavLink} from 'react-router-dom';
import vide from './videos/videos.mp4'
import './style.css'
const Home = () => {
  return (
    <div className='home'>
      <header className='header'>
      <video className='video' src={vide} autoPlay loop muted />
       <div className="content">
        <h1 className="title">Welcome to the It-Company </h1>
        <p className='desc'>Here you can se our list Of Jobs and all emplyees</p>
        <NavLink className="content-link" to="/contact">Contact us</NavLink>
      </div>
      </header>
     
    </div>
  )
}

export default Home