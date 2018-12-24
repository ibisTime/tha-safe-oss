// 币种查询

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
} from '@redux/platform/customerManagement/currency';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.securityMenu,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Currency extends React.Component {
  render() {
    const fields = [{
      title: '规则名',
      field: 'name',
      search: true
    }, {
        title: '规则分类',
        field: 'code'
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

export default Currency;
