"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Menu() {
    const open = () => {
        document.querySelector("nav")?.classList.add(styles.open);
    };
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.item}>
                    <li>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li>
                        <Link href="/members">メンバー</Link>
                    </li>
                    <li>
                        <Link href="/contact">お問合わせ</Link>
                    </li>
                </ul>
            </nav>
            <button className={styles.button}>
                <Image  src="/menu.svg" alt="メニュー" width={24} height={24}/>
            </button>
        </div>
    );
}
