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
      title: '被归集地址',
      field: 'fromAddress'
    }, {
      title: '归集地址',
      field: 'toAddress'
    }, {
      title: '金额',
      field: 'amountString',
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
      title: '归集时间',
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
