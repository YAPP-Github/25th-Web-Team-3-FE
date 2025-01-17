import Brazil from '@/assets/Icon/brazil.svg';
import { orginItem } from './OriginList.css';

interface OriginProps {
  origins: { id: number; origin: string }[];
}

const OriginList = ({ origins }: OriginProps) => {
  return (
    <ul>
      {origins.map((item) => (
        <li key={item.id} className={orginItem}>
          <Brazil />
          {item.origin}
        </li>
      ))}
    </ul>
  );
};

export default OriginList;
