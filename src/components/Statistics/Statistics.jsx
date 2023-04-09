import propTypes from 'prop-types';
import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsUnit,
  StatisticsItem,
  StatisticsLabel,
  StatisticsQuantity,
} from './Statistics.styled';

export default function Statistics({ items, title }) {
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsUnit>
        {items.map(item => {
          return (
            <StatisticsItem key={item.id}>
              <StatisticsLabel>{item.label}</StatisticsLabel>
              <StatisticsQuantity>{item.percentage}%</StatisticsQuantity>
            </StatisticsItem>
          );
        })}
      </StatisticsUnit>
    </StatisticsCard>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};
