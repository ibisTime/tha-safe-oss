// erc20地址查询

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
} from '@redux/platform/addressQuery/ercAddressQuery';
import { listWrapper } from 'common/js/build-list';
import { getQueryString, showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ercAddressQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class AddressQuery extends React.Component {
  render() {
    var symbol = getQueryString('symbol', this.props.location.search);
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
      field: 'balance',
      coin: symbol,
      amount: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802105,
      searchParams: {
        currency: symbol
      },
      buttons: [{
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }, {
        code: 'runQuery',
        name: '流水查询',
        handler: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else{
            this.props.history.push(`/usdAddressQuery/usdRunQuery?address=${items[0].address}&pageCode=802108&currency=${symbol}`);
          }
        }
      }, {
        code: 'export',
        name: '导出'
      }]
    });
  }
}

export default AddressQuery;
