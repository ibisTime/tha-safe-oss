// 客户管理

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
} from '@redux/platform/customerManagement/customerManagement';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.customerManagement,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class CustomerManagement extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'name',
      search: true
    }, {
        title: '公司名称',
        field: 'code'
    }, {
      title: '联系人',
      field: 'url'
    }, {
      title: '联系方式',
      field: 'url'
    }, {
      title: '状态',
      field: 'url'
    }, {
      title: '备注',
      field: 'url'
    }];
    return this.props.buildList({ fields, pageCode: 805000, deleteCode: 805004 });
  }
}

export default CustomerManagement;
