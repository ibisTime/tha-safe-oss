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
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.usdAddressQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class UsdAddressQuery extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'companyCode'
    }, {
        title: '类型',
        field: 'type',
        type: 'select',
        search: true
    }, {
      title: '地址',
      field: 'address'
    }, {
      title: '生成时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
        title: '状态',
        field: 'status',
        type: 'select',
        search: true
    }, {
      title: '当前余额',
      field: 'usdtBalance',
      coin: 'USDT',
      amount: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      key: 'id',
      pageCode: 802455,
      btnEvent: {
        runQuery: (keys, items) => {
          if (!keys || !keys.length) {
              showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
              showWarnMsg('请选择一条记录');
          } else {
            console.log(items);
            this.props.history.push(`/usdAddressQuery/usdRunQuery?address=${items[0].address}&pageCode=802470&currency=USDT`);
          }
        }
      }
    });
  }
}

export default UsdAddressQuery;
