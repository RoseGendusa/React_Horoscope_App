import './Main.scss';
import Card from './Card'


const Main = ({signs}) => {
  return (
   <div className="card-container">
    {signs.map((item)=> <Card sign={item} key={item.id}/> )}
   </div>
  )
}

export default Main