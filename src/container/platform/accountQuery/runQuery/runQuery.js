// 流水查询

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
} from '@redux/platform/accountQuery/runQuery';
import { listWrapper } from 'common/js/build-list';
import { moneyFormat, dateTimeFormat } from 'common/js/util';
import fetch from 'common/js/fetch';

let comList = []; // 公司编号列表查
fetch(802062).then(data => {
  comList = data;
});

@listWrapper(
  state => ({
    ...state.runQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class RunQuery extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'companyCode',
      data: comList,
      keyName: 'code',
      valueName: 'code',
      type: 'select',
      search: true
    }, {
      title: '账户编号',
      field: 'accountNumber',
      search: true
    }, {
      title: '商户流水号',
      field: 'merchantJourCode',
      search: true
    }, {
        title: '币种',
        field: 'currency'
    }, {
      title: '业务类型',
      field: 'bizType'
    }, {
        title: '变动金额',
        field: 'transAmountString',
        render(v, data) {
          return moneyFormat(v, '', data.currency);
        }
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'jour_status'
    }, {
        field: 'transDatetime',
        title: '交易时间',
        type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802520
    });
  }
}

export default RunQuery;
