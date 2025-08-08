import { memo } from 'react';
import { useToasts } from '../../context/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  console.log('rendering shelf');

  const { toasts } = useToasts();

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} id={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default memo(ToastShelf);
