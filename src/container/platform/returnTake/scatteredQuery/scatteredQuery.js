// 散取查询

import React from 'react';
import fetch from 'common/js/fetch';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/platform/returnTake/scatteredQuery';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, moneyFormat, showMsgfirm } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.scatteredQuery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ScatteredQuery extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code',
      search: true
    }, {
      title: '金额',
      field: 'amountString',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '矿工费',
      field: 'payFeeString',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'withdraw_status'
    }, {
      title: '到账时间',
      field: 'payDatetime',
      type: 'datetime'
    }, {
      title: '公司编号',
      field: 'companyCode',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 802755,
      btnEvent: {
        moneyRedio: (keys, items) => {
          console.log(keys[0], items);
          function gbScatterFn() {
            fetch('802750', {
              code: keys[0]
            }).then(data => {
              if(data) {
                showWarnMsg('操作成功');
                setTimeout(() => {
                  window.location.reload();
                }, 1500);
              }
            });
          }
          if (!keys || !keys.length) {
              showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
              showWarnMsg('请选择一条记录');
          }else {
            if(items[0].status === '3') {
              showMsgfirm('primary', '重新广播', '确定重新发起广播？', gbScatterFn);
            }else {
              showWarnMsg('该状态下不可发起广播');
            }
          }
        }
      }
    });
  }
}

export default ScatteredQuery;
