import React from 'react';
import styles from './nextButton.module.scss';

const { s_nextButton } = styles;

interface Props {
  handleClickNextButton: () => void;
  isDisabled: boolean;
}

const NextButton = ({ handleClickNextButton, isDisabled }: Props) => {
  return (
    <button
      className={s_nextButton}
      type="button"
      onClick={handleClickNextButton}
      disabled={isDisabled}
    >
      다음
    </button>
  );
};

export default NextButton;
