import React from 'react';

import styles from './Link.module.css';


interface ILinkProps {
    onCLick: Function
    children: React.ReactNode
}

const Link = (props: ILinkProps) => {
  return (
    <p onClick={() => props.onCLick()} className={styles.link}>
        { props.children }
    </p>
  )
}

export default Link;