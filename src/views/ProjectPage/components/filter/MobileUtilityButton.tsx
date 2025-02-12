import { ReactComponent as MobileFilterBtn } from '@src/assets/icons/MobileFilterBtn.svg';
import styles from './mobile-utility-button.module.scss';

export function MobileUtilityButton({
  toggleModalState,
  prevState,
}: {
  prevState: boolean;
  toggleModalState: (arg: boolean) => void;
}) {
  const preventScroll = () => (document.body.style.overflow = 'hidden');
  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const handleFilterBtnClick = () => {
    if (prevState) ableScroll();
    else preventScroll();

    toggleModalState(!prevState);
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.filter} onClick={() => handleFilterBtnClick()}>
        <MobileFilterBtn />
      </button>
    </div>
  );
}
