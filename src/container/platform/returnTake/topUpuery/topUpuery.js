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
import { moneyFormat } from 'common/js/util';

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
        title: '账号',
        field: 'accountNumber'
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '渠道',
      field: 'channel'
    }, {
      title: '类型',
      field: 'type',
      type: 'select',
      key: 'charge_type'
    }, {
      title: '推送状态',
      field: 'pushStatus',
      type: 'select',
      key: 'push_status'
    }, {
      title: '余额',
      field: 'amountString',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '公司编号',
      field: 'companyCode',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 802705
    });
  }
}

export default TopUpuery;
