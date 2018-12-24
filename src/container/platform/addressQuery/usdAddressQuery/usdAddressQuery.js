// usdt地址查询

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
} from '@redux/platform/addressQuery/usdAddressQuery';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.securityMenu,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class UsdAddressQuery extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'name',
      search: true
    }, {
        title: '类型',
        field: 'code'
    }, {
      title: '地址',
      field: 'url'
    }, {
      title: '生成时间',
      field: 'remark'
    }, {
        title: '状态',
        field: 'code'
    }, {
      title: '本地使用次数',
      field: 'url'
    }, {
      title: '网络使用次数',
      field: 'url'
    }, {
      title: '初始金额',
      field: 'url'
    }, {
      title: '当前余额',
      field: 'url'
    }, {
      title: '备注',
      field: 'url'
    }];
    return this.props.buildList({ fields, pageCode: 805000, deleteCode: 805004 });
  }
}

export default UsdAddressQuery;
