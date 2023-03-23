
import { Level } from "../../helpers/imc";
import styles from './ItemGrid.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level;
};

export function ItemGrid({ item }: Props){
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.icon}>
                <img src={item.icon === "up" ? upImage : downImage} alt="" width={30}/>
            </div>
            <div className={styles.title}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }
            <div className={styles.info}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}