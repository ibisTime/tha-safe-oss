// wan地址查询

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
} from '@redux/platform/addressQuery/wanAddressQuery';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.wanAddressQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class WanAddressQuery extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'companyCode'
    }, {
      title: '类型',
      field: 'type',
      type: 'select',
      key: 'address_type',
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
      key: 'address_status',
      search: true
    }, {
      title: '当前余额',
      field: 'wanBalance',
      coin: 'WAN',
      amount: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802355,
      btnEvent: {
        runQuery: (keys, items) => {
          if (!keys || !keys.length) {
              showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
              showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/usdAddressQuery/usdRunQuery?address=${items[0].address}&pageCode=802357&currency=WAN`);
          }
        }
      }
    });
  }
}

export default WanAddressQuery;
