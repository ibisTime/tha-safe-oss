// 散取查询

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
} from '@redux/platform/returnTake/scatteredQuery';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, moneyFormat } from 'common/js/util';

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
      title: '充币人',
      field: 'name'
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
      title: '对账人',
      field: 'url'
    }, {
      title: '到账时间',
      field: 'confirmDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802755,
      btnEvent: {
        moneyRedio: (keys, items) => {
          if (!keys || !keys.length) {
              showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
              showWarnMsg('请选择一条记录');
          }else {
            this.props.history.push(`/returnTake/scatteredQuery/moneyRedio?code=${keys[0]}&v=1`);
          }
        }
      }
    });
  }
}

export default ScatteredQuery;
