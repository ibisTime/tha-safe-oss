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
import { moneyFormat } from 'common/js/util';

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
      field: 'code',
      search: true
    }, {
        title: '充币人',
        field: 'name'
    }, {
      title: '金额',
      field: 'amount',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '状态',
      field: 'status'
    }, {
      title: '对账人',
      field: 'url'
    }, {
      title: '到账时间',
      field: 'confirmDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802115
    });
  }
}

export default SummarizeQuery;
