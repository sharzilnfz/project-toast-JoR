import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { useToasts } from '../../context/ToastProvider';

import { memo } from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, id }) {
  const { removeToast } = useToasts();
  const ICON = ICONS_BY_VARIANT[variant] || Info;
  console.log('redering toast');

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ICON size={24} />
      </div>
      <p className={styles.content}>{children || ''}</p>
      <button className={styles.closeButton} onClick={() => removeToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default memo(Toast);
