// 规则查询

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
} from '@redux/platform/customerManagement/rules';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.rules,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Rules extends React.Component {
  render() {
    const fields = [{
      field: 'companyCode',
      title: '公司编号',
      search: true
    }, {
      field: 'remark',
      title: '参数名',
      search: true
    }, {
      field: 'cvalue',
      title: '参数值'
    }, {
        field: 'updateDatetime',
        title: '最近修改时间',
        type: 'datetime'
      }];
    return this.props.buildList({
      fields,
      pageCode: 660915,
      rowKey: 'id',
      searchParams: {
        rule: 'rule'
      }
    });
  }
}

export default Rules;
