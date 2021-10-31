import React from 'react';
import styles from './complete.module.scss';
import SurveyComplete from '@/assets/complete.svg';

const { s_container, s_imgContainer } = styles;

const Complete = () => {
  return (
    <section className={s_container}>
      <div className={s_imgContainer}>
        <SurveyComplete />
      </div>
      <h2>운동하러 가볼까요?</h2>
      <button type="button">렛츠고!👉</button>
    </section>
  );
};

export default Complete;
