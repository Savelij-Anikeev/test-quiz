import React from 'react';

import styles from './HeaderText.module.css';

interface IHeaderTextProps {
    children: React.ReactNode
}


const HeaderText = (props: IHeaderTextProps) => {
  return (
    <h2 className={styles.headerText}>{ props.children }</h2>
  )
}

export default HeaderText;