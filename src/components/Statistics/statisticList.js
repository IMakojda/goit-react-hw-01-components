import Section from 'components/Section/section';
import PropTypes from 'prop-types';

function StatisticList({stats,title}) {
    return ( 
        <Section title={title}>
            <ul className="stat-list">
                {stats.map(stat=>    
                    <li className="item" key={stat.id}>           
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
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