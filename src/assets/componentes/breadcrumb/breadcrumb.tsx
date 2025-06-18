import styles from './breadcrumb.module.css';
import { PiHouseLineLight } from "react-icons/pi";
import { GoChevronRight } from "react-icons/go";


function Breadcrumb(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.home}>
                        <PiHouseLineLight fontSize={13}/> 
                        <span>Home</span>
                    </div>
                    <GoChevronRight />
                    <span>Universal</span>
                    <GoChevronRight />
                    <span>Molas a Gás</span>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb;