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
      title: '账户名',
      field: 'name',
      search: true
    }, {
        title: '账号',
        field: 'code'
    }, {
      title: '类型',
      field: 'url'
    }, {
      title: '余额',
      field: 'remark'
    }, {
        title: '状态',
        field: 'code'
    }, {
      title: '创建时间',
      field: 'url'
    }];
    return this.props.buildList({ fields, pageCode: 805000, deleteCode: 805004 });
  }
}

export default AccountQuery;
