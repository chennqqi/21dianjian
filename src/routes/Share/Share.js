import React from 'react';
import { connect } from 'dva';
import styles from './Share.css';
import MainLayout from '../../components/MainLayout/MainLayout';
import ShareComponent from '../../components/Share/Share';

function Share({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ShareComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Share);
