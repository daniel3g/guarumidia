import styles from '../styles/components/Header.module.css';
import React from 'react'
import Image from 'next/image'

export function Header(){
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/logo-guarumidia.png" width={208} height={53} />
            </div>
        </div>
    );
}