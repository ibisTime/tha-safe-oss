// wrc20地址查询

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
} from '@redux/platform/addressQuery/wrc20AddressQuery';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.wrc20AddressQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Wrc20AddressQuery extends React.Component {
  render() {
    const fields = [{
      title: '符号',
      field: 'symbol',
      search: true
    }, {
      title: '英文名称',
      field: 'ename'
    }, {
      title: '中文名称',
      field: 'cname'
    }, {
      title: '单位',
      field: 'unit'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'symbol',
      searchParams: {
        type: 'X'
      },
      pageCode: 802265,
      btnEvent: {
        distribution: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          }else {
            this.props.history.push(`/wrc20AddressQuery/wrcAddressQuery?symbol=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default Wrc20AddressQuery;
