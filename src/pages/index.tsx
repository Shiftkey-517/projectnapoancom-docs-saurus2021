import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="general.title">ナポアンのマイクラMD</Translate>
        </h1>
        <div className={styles.buttons}>
          <Link className="button button--info button--lg" to="/docs/intro">
            <Translate id="general.intro">イントロダクション</Translate>
          </Link>
        </div>
        <div className="alert alert--success" role="alert">
          <Translate id="general.message">
            このDocsは自由に編集可能です。各ページの編集ボタンを押してください!
          </Translate>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
