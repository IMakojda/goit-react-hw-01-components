import Section from 'components/Section/section';
import PropTypes from 'prop-types';
import s from './Statistic.module.css'

 function generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};
  
function StatisticList({ stats, title }) {
    
    return (
        <Section title={title}>
            <ul className={s.list}>
                {stats.map(stat=> 
                    <li className={s.item} key={stat.id} style={{
                        backgroundColor: generateRandomColor()
                    }}>           
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}%</span>
                    </li>
                )}     
            </ul>
        </Section>
    )
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  }))
}
    
export default StatisticList;