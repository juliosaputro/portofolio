import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import PortofolioImg from '../images/project.png';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Portofolio',
    desc: 'Portofolio menggunakan bahasa react',
    img: PortofolioImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc: 'ini hanya pemanis',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc: 'ini hanya pemanis',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc: 'ini hanya pemanis',
    img: ProjectImg,
  },
];

export default projects;
