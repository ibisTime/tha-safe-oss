// 账户查询

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
} from '@redux/platform/accountQuery/accountQuery';
import { listWrapper } from 'common/js/build-list';
import { moneyFormat, showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.accountQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class AccountQuery extends React.Component {
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
      field: 'amount',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
        title: '状态',
        field: 'status'
    }, {
      title: '创建时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'accountNumber',
      pageCode: 802500,
      btnEvent: {
        runQuery: (keys, items) => {
          if (!keys || !keys.length) {
              showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
              showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/zdRunQuery/zdRunQuery?accountNumber=${keys[0]}`);
          }
      }
      }
    });
  }
}

export default AccountQuery;
