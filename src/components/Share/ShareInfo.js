import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './ShareInfo.css';
import MainLayout from '../MainLayout/MainLayout';

class ShareInfo extends Component {

  render() {
    const { record } = this.props.location.state;
    let audioText = '审核中';
    switch (record.audiotype) {
      case 0: audioText = '审核中'; break;
      case 1: audioText = '审核通过'; break;
      case 2: audioText = '审核拒绝'; break;
      default:audioText = '审核中';
    }

    return (
      <MainLayout location={this.props.location}>
        <div className={styles.normal}>
          <h4>直播详情</h4>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>直播标题：</Col>
            <Col span={15}>{record.title}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>分享者：</Col>
            <Col span={15}>{record.sharer.name}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>开始时间：</Col>
            <Col span={15}>{record.starttime}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>简介：</Col>
            <Col span={15}>{record.intro}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>友情价：</Col>
            <Col span={15}>{record.friendprice}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>赞赏价：</Col>
            <Col span={15}>{record.appreciateprice}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>心动价：</Col>
            <Col span={15}>{record.cardiacprice}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>审核结果：</Col>
            <Col span={15}>{audioText}</Col>
          </Row>
          <Row className={styles.infoRow}>
            <Col className={styles.infoCol} span={8}>直播海报：</Col>
            <Col span={15}> <img style={{ height: 100 }} src={record.posterimageurl} /></Col>
          </Row>
        </div>
      </MainLayout>
    );
  }
}

export default ShareInfo;
