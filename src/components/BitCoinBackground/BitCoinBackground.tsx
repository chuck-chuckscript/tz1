import {FC} from "react";
import style from './bitcoinbg.module.scss';

export  const BitCoinBackground : FC = () => {
    return (
        <div className={style.bg}>
            <img className={style.bitCoin} src={'/Bitcoin.svg'}/>
            <img className={style.litecoin} src={'/Litecoin.svg'}/>
            <img className={style.ethereum} src={'/Ethereum.svg'}/>
        </div>
    );
};

