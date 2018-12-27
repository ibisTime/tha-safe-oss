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
} from '@redux/security/dataDictionary';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.dataDictionary,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class DataDictionary extends React.Component {
  render() {
    const fields = [{
        title: '参数键',
        field: 'dkey',
        search: true
    }, {
      title: '参数值',
      field: 'dvalue'
    }, {
      field: 'remark',
      title: '备注'
    }];
    return this.props.buildList({
      fields,
      pageCode: 660905,
      rowKey: 'id'
    });
  }
}

export default DataDictionary;
