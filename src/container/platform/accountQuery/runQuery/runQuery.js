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
      title: '户名',
      field: 'name',
      search: true
    }, {
        title: '地址',
        field: 'code'
    }, {
      title: '渠道',
      field: 'url'
    }, {
      title: '业务类型',
      field: 'remark'
    }, {
        title: '变动金额',
        field: 'code'
    }, {
      title: '变动前金额',
      field: 'url'
    }, {
      title: '变动后金额',
      field: 'remark'
    }, {
        title: '状态',
        field: 'code'
    }, {
      title: '备注',
      field: 'url'
    }];
    return this.props.buildList({ fields, pageCode: 805000, deleteCode: 805004 });
  }
}

export default RunQuery;
