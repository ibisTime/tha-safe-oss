// 流水查询

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
} from '@redux/platform/addressQuery/usdRunQuery';
import { listWrapper } from 'common/js/build-list';
import { getQueryString, showWarnMsg, dateTimeFormat, moneyFormat } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.usdRunQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class UsdRunQuery extends React.Component {
  render() {
    var address = getQueryString('address', this.props.location.search) || '';
    var pageCode = getQueryString('pageCode', this.props.location.search) || '';
    var currency = getQueryString('currency', this.props.location.search) || '';
    const fields = [{
        title: '交易HASH',
        field: 'hash'
    }, {
        title: '交易金额',
        field: 'value',
        render(v, data) {
          return moneyFormat(v, '', currency);
        }
    }, {
        field: 'fromTo',
        title: '对方地址',
        render(v, data) {
          if(data.from === address) {
            return data.to;
          }else {
            return data.from;
          }
        }
    }, {
        title: 'gasLimit',
        field: 'gasLimit'
    }, {
        title: 'gas价格',
        field: 'gasPrice',
        render(v, data) {
            return moneyFormat(v, '', '', '1e9') + 'Gwei';
        }
    }, {
        title: '消耗gas',
        field: 'gasUsed'
    }, {
        title: '矿工费',
        field: 'gasFee',
        render(v, data) {
            return moneyFormat(v, '', currency);
        }
    }, {
        field: 'refNo',
        title: '关联订单号'
    }, {
        field: 'blockCreateDatetime',
        title: '网络记账时间',
        type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      searchParams: {
        address
      },
      pageCode,
      buttons: [{
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }, {
        code: 'runQuery',
        name: '详情',
        handler: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else{
            this.props.history.push(`/customer/customers/androdition/edit?code=${keys[0]}`);
          }
        }
      }, {
        code: 'export',
        name: '导出'
      }]
    });
  }
}

export default UsdRunQuery;
