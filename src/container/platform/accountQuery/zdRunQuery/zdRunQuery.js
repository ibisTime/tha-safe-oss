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
} from '@redux/platform/accountQuery/zdRunQuery';
import { listWrapper } from 'common/js/build-list';
import { getQueryString, showWarnMsg, dateTimeFormat, moneyFormat } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.zdRunQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ZdRunQuery extends React.Component {
  render() {
    var accountNumber = getQueryString('accountNumber', this.props.location.search) || '';
    const fields = [{
      title: '公司编号',
      field: 'companyCode',
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
      field: 'bizNote'
    }, {
      title: '变动金额',
      field: 'transAmountString',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '状态',
      field: 'status'
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
      searchParams: {
        accountNumber
      },
      pageCode: 802520,
      buttons: [{
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }, {
        code: 'runQuery',
        name: '详情',
        handler: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else{
            this.props.history.push(`/runQuery/runQuery/addedit?code=${keys[0]}&v=1`);
          }
        }
      }, {
        code: 'export',
        name: '导出'
      }]
    });
  }
}

export default ZdRunQuery;
