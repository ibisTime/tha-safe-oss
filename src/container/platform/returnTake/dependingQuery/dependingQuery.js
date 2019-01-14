// 定存查询

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
} from '@redux/platform/returnTake/dependingQuery';
import { listWrapper } from 'common/js/build-list';
import { moneyFormat } from 'common/js/util';
import fetch from 'common/js/fetch';

let comList = []; // 公司编号列表查
fetch(802062).then(data => {
  comList = data;
});

@listWrapper(
  state => ({
    ...state.dependingQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class DependingQuery extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'companyCode',
      type: 'select',
      data: comList,
      keyName: 'code',
      valueName: 'code',
      render: (v) => {
        return v;
      },
      search: true
    }, {
      title: '账号',
      field: 'accountNumber'
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '打币地址',
      field: 'payCardNo'
    }, {
      title: '充值地址',
      field: 'changeAddress'
    }, {
      title: '渠道',
      field: 'channel',
      type: 'select',
      key: 'charge_channel'
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
    }];
    return this.props.buildList({
      fields,
      pageCode: 802708
    });
  }
}

export default DependingQuery;
