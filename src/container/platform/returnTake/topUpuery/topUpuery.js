// 充值查询

import React from 'react';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/platform/returnTake/topUpuery';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.topUpuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class TopUpuery extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'companyCode',
      search: true
    }, {
        title: '账号',
        field: 'accountNumber'
    }, {
      title: '类型',
      field: 'type'
    }, {
      title: '余额',
      field: 'url'
    }, {
      title: '创建时间',
      field: 'url'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802705
    });
  }
}

export default TopUpuery;
