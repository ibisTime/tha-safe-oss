// 资讯管理

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
} from '@redux/platform/marketInformation/marketInformation';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.securityMenu,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class MarketInformation extends React.Component {
  render() {
    const fields = [{
      title: '标题',
      field: 'name',
      search: true
    }, {
        title: '封面',
        field: 'code'
    }, {
      title: '作者',
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

export default MarketInformation;
