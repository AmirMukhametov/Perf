import React, { useRef, useEffect } from 'react';
import IconTemperature from './icons/IconTemperature';
import IconTemperature2 from './icons/IconTemperature2';
import IconSun from './icons/IconSun';
import IconSun2 from './icons/IconSun2';
import IconScheduled from './icons/IconScheduled';
import styles from './Event.module.css';

const ICONS = {
  temp: IconTemperature,
  temp2: IconTemperature2,
  light: IconSun,
  light2: IconSun2,
  schedule: IconScheduled,
};

export default function Event({ icon, iconLabel, title, subtitle, slim, onSize }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && onSize) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      onSize({ width, height });
    }
  });

  const Icon = ICONS[icon];

  return (
    <li ref={ref} className={`${styles.event}${slim ? ' ' + styles.eventSlim : ''}`}>
      <button className={styles.eventButton}>
        {Icon && <Icon aria-label={iconLabel} className={styles.eventIcon} />}
        <h4 className={styles.eventTitle}>{title}</h4>
        {subtitle && <span className={styles.eventSubtitle}>{subtitle}</span>}
      </button>
    </li>
  );
} 