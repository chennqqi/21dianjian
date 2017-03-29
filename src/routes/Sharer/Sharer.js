import React from 'react';
import { connect } from 'dva';
import styles from './Sharer.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function Sharer({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        Route Component: Sharer
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Sharer);
