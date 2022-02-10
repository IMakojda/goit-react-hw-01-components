import Section from 'components/Section/section';
import PropTypes from 'prop-types';
import s from './Statistic.module.css'
import {generateRandomColor} from "../utils/generatorColor"

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