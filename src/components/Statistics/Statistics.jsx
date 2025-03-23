import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const icons = [
    { id: 'id-1', icon: <FaRegThumbsUp size={32} /> },
    { id: 'id-2', icon: <MdPeople size={32} /> },
    { id: 'id-3', icon: <MdOutlineProductionQuantityLimits size={32} /> },
    { id: 'id-4', icon: <GiTreeDoor size={32} /> },
  ];

  return (
    <div>
      <h3 className={style.title}>{title}</h3>

      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => {
          return (
            <li className={style.item} key={id}>
              <StatisticsItem
                title={title}
                total={total}
                icon={icons[index].icon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
