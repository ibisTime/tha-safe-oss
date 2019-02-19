// btc地址查询

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
} from '@redux/platform/addressQuery/btcAddressQuery';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';
import { CS_BTC_URL, ZS_BTC_URL } from 'common/js/config';

@listWrapper(
  state => ({
    ...state.btcAddressQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class BtcAddressQuery extends React.Component {
  render() {
    const fields = [{
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
      field: 'btcBalance',
      coin: 'BTC',
      amount: true
    }, {
      title: '公司编号',
      field: 'companyCode'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802485,
      buttons: [{
        code: 'btcRunQuery',
        name: '流水查询',
        handler: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else{
            window.open(CS_BTC_URL + items[0].address, '_blank'); // 测试
            // window.open(ZS_BTC_URL + items[0].address, '_blank'); // 正式
          }
        }
      }, {
        code: 'export',
        name: '导出'
      }]
    });
  }
}
// 测试：https://testnet.blockexplorer.com/address/mrHcs3QyGcEpQdujAZvF6sMjiS7f9JDAiL
// 正式：https://blockexplorer.com/address/14J5Q7ageKhM3miKd94DX44Kf6b7ko4BZe

export default BtcAddressQuery;
