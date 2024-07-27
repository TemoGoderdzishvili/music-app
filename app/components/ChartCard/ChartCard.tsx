import Image from 'next/image';
import styles from './ChartCard.module.css';

interface ChartCardProps {
  bannerSrc: string;
  title: string;
  onClick: () => void;
}

const ChartCard: React.FC<ChartCardProps> = ({ bannerSrc, title, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={bannerSrc} alt={title} className={styles.banner} width={144} height={165} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default ChartCard;