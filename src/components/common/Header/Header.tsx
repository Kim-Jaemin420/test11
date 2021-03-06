import React from 'react';
import styles from './header.module.scss';
import Back from '@/assets/back.svg';

const { s_header, s_previousButton } = styles;

interface Props {
  handleClickBackButton: () => void;
}

function Header({ handleClickBackButton }: Props) {
  return (
    <header className={s_header}>
      <button type="button" className={s_previousButton} onClick={handleClickBackButton}>
        <Back />
      </button>
    </header>
  );
}

export default Header;
