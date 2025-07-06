import React, { useRef, useEffect, useState } from 'react';
import Event from './Event';
import { TABS, TABS_KEYS } from './tabsData';
import IconCloudDrizzle from './icons/IconCloudDrizzle';
import styles from './Main.module.css';

export default function Main() {
  const ref = useRef();
  const initedRef = useRef(false);
  const [activeTab, setActiveTab] = useState('');
  const [hasRightScroll, setHasRightScroll] = useState(false);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab('all');
    }
  }, [activeTab]);

  const onSize = size => {
    setSizes(prev => [...prev, size]);
  };

  useEffect(() => {
    const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);
    if (ref.current) {
      const newHasRightScroll = sumWidth > ref.current.offsetWidth;
      if (newHasRightScroll !== hasRightScroll) {
        setHasRightScroll(newHasRightScroll);
      }
    }
  }, [sizes, hasRightScroll]);

  const onArrowClick = () => {
    const scroller = ref.current.querySelector('.section__panel:not(.section__panel_hidden)');
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className={styles.main}>
      <section className="section main__general">
        <h2 className="section__title section__title-header section__main-title">Главное</h2>
        <div className="hero-dashboard">
          <div className="hero-dashboard__primary">
            <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
            <p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
            <ul className="hero-dashboard__info">
              <li className="hero-dashboard__item">
                <div className="hero-dashboard__item-title">Дома</div>
                <div className="hero-dashboard__item-details">
                  +23
                  <span className="a11y-hidden">°</span>
                </div>
              </li>
              <li className="hero-dashboard__item">
                <div className="hero-dashboard__item-title">За окном</div>
                <div className="hero-dashboard__item-details">
                  +19
                  <span className="a11y-hidden">°</span>
                  <IconCloudDrizzle className={styles.heroDashboardIcon} aria-label="Дождь" />
                </div>
              </li>
            </ul>
          </div>
          <ul className="hero-dashboard__schedule">
            <Event icon="temp" iconLabel="Температура" title="Philips Cooler" subtitle="Начнет охлаждать в 16:30" />
            <Event icon="light" iconLabel="Освещение" title="Xiaomi Yeelight LED Smart Bulb" subtitle="Включится в 17:00" />
            <Event icon="light" iconLabel="Освещение" title="Xiaomi Yeelight LED Smart Bulb" subtitle="Включится в 17:00" />
          </ul>
        </div>
      </section>
      {/* Табы и события */}
      <section className="section main__devices">
        <div className="section__tabs">
          {TABS_KEYS.map(key => (
            <button
              key={key}
              className={`section__tab${activeTab === key ? ' section__tab_active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {TABS[key].title}
            </button>
          ))}
        </div>
        <div className="section__panel-wrapper" ref={ref}>
          <ul className="section__panel">
            {TABS[activeTab]?.items.map((item, idx) => (
              <Event key={idx} {...item} onSize={onSize} />
            ))}
          </ul>
          {hasRightScroll && (
            <button className="section__arrow" onClick={onArrowClick} aria-label="Прокрутить вправо"></button>
          )}
        </div>
      </section>
    </main>
  );
} 