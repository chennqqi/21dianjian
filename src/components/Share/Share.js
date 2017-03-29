import React from 'react';
import styles from './Share.css';
import { connect } from 'dva';
import { Table, Button, Pagination } from 'antd';
import { Link, routerRedux } from 'dva/router';
import AuditModal from './AuditModal';
import { PAGE_SIZE } from '../../constants';

function Share({ dispatch, list: dataSource, loading, total, page: current }) {
  function auditHandler(id, values) {
    dispatch({
      type: 'share/audit',
      payload: { id, values },
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/share',
      query: { page },
    }));
  }

  const columns = [
    {
      title: '直播标题',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <Link to={{ pathname: '/share/info', state: { record } }}>{text}</Link>,
    },
    {
      title: '分享者',
      dataIndex: 'sharerid',
      key: 'sharerid',
      render: (text, record) => (
        <span>{ record.sharer.name }</span>
      ),
    },
    {
      title: '简介',
      dataIndex: 'intro',
      key: 'intro',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
    {
      title: '审核状态',
      dataIndex: 'audiotype',
      render: (text) => {
        let showText = '审核中';
        switch (text) {
          case 0: showText = '审核中'; break;
          case 1: showText = '审核通过'; break;
          case 2: showText = '审核拒绝'; break;
          default : showText = '审核中';
        }
        return (<span>{showText}</span>);
      },
    },
    {
      title: '操作',
      render: record => (
        <AuditModal record={record} onOk={auditHandler.bind(null, record.id)}><Button type="primary">审核</Button></AuditModal>
      ),
    },
  ];
  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={PAGE_SIZE}
        onChange={pageChangeHandler}
      />
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.share;
  return {
    loading: state.loading.models.share,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Share);
