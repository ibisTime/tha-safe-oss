// btc地址查询

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
} from '@redux/platform/addressQuery/btcAddressQuery';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.btcAddressQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class BtcAddressQuery extends React.Component {
  render() {
    const fields = [{
        title: '类型',
        field: 'type',
        type: 'select',
        search: true
    }, {
      title: '地址',
      field: 'address'
    }, {
      title: '生成时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
        title: '状态',
        field: 'status',
        search: true
    }, {
      title: '当前余额',
      field: 'btcBalance',
      coin: 'BTC',
      amount: true
    }, {
      title: '公司编号',
      field: 'companyCode'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802485
    });
  }
}

export default BtcAddressQuery;
