// 本币行情

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
} from '@redux/platform/marketInformation/itsCurrency';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.itsCurrency,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ItsCurrency extends React.Component {
  render() {
    const fields = [{
      title: '日期',
      field: 'name',
      search: true
    }, {
        title: '1CNY',
        field: 'code'
    }, {
      title: 'CNY',
      field: 'url'
    }, {
      title: '类型',
      field: 'url'
    }];
    return this.props.buildList({ fields, pageCode: 805000, deleteCode: 805004 });
  }
}

export default ItsCurrency;
