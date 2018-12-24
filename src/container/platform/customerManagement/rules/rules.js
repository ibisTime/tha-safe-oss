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
      title: '公司编号',
      field: 'name',
      search: true
    }, {
        title: '规则名称',
        field: 'code'
    }, {
      title: '规则分类',
      field: 'url'
    }, {
      title: '数值',
      field: 'url'
    }, {
      title: '备注',
      field: 'url'
    }];
    return this.props.buildList({ fields, pageCode: 805000, deleteCode: 805004 });
  }
}

export default Rules;
