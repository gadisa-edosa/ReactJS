import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        <br />
        web developer
        </h1>
        <h2>Fronend Developer / JavaScript Expert / YouTuber</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>

    </div>
  );
}

export default Home

// stopped here