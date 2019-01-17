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
import { getCoinList } from 'api/coin';
import fetch from 'common/js/fetch';

let comList = []; // 公司编号列表查
fetch(802062).then(data => {
  comList = data;
});
let coinData = [];
getCoinList().then(data => {
  coinData = data;
});
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
      data: comList,
      keyName: 'code',
      valueName: 'code',
      type: 'select',
      search: true,
      render(v) {
        return v;
      }
    }, {
        title: '账号',
        field: 'accountNumber'
    }, {
      title: '币种',
      field: 'currency',
      type: 'select',
      data: coinData,
      keyName: 'symbol',
      valueName: '{{symbol.DATA}}-{{cname.DATA}}',
      search: true
    }, {
      title: '打币地址',
      field: 'payCardNo'
    }, {
      title: '充值地址',
      field: 'chargeAddress'
    }, {
      title: '渠道',
      field: 'channel',
      type: 'select',
      key: 'charge_channel'
    }, {
      title: '类型',
      field: 'type',
      type: 'select',
      key: 'charge_type',
      search: true
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
      pageCode: 802705
    });
  }
}

export default TopUpuery;
