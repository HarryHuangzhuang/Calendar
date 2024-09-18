import './index.scss'
import BarChart from "../Home/components/BarChart"
const Home = () => {
  return <div className="home">
    <div>
      <BarChart title={'三大框架满意度'} />
      <BarChart title={'三大框架使用度'} />
    </div>
  </div>
}

export default Home