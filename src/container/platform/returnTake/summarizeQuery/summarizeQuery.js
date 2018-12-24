// 归集查询

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
} from '@redux/platform/returnTake/summarizeQuery';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.summarizeQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class SummarizeQuery extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'name',
      search: true
    }, {
        title: '充币人',
        field: 'code'
    }, {
      title: '金额',
      field: 'url'
    }, {
      title: '币种',
      field: 'url'
    }, {
      title: '状态',
      field: 'url'
    }, {
      title: '到账时间',
      field: 'url'
    }, {
      title: '对账人',
      field: 'url'
    }, {
      title: '到账时间',
      field: 'url'
    }];
    return this.props.buildList({ fields, pageCode: 805000, deleteCode: 805004 });
  }
}

export default SummarizeQuery;
