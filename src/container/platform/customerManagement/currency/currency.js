// 币种管理

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
} from '@redux/platform/customerManagement/currency';
import { moneyFormat, showWarnMsg, showConfirm } from 'common/js/util';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.currency,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Currency extends React.Component {
  render() {
    const fields = [{
      title: '符号',
      field: 'symbol',
      search: true
    }, {
      title: '英文名称',
      field: 'ename',
      search: true
    }, {
      title: '中文名称',
      field: 'cname',
      search: true
    }, {
      title: '类型',
      field: 'type',
      search: true
    }, {
        title: '单位',
        field: 'unit'
    }, {
      title: '归集阀值',
      field: 'collectStartString',
      render(v, data) {
        return moneyFormat(v, '', data.symbol);
      }
    }, {
        title: '状态',
        field: 'status'
    }, {
      title: '序号',
      field: 'orderNo'
    }, {
      title: '更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'symbol',
      pageCode: 802265,
      btnEvent: {
          // 修改
          edit: (keys, items) => {
              if (!keys || !keys.length) {
                  showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                  showWarnMsg('请选择一条记录');
              }else {
                this.props.history.push(`/customerManagement/currency-addedit?symbol=${keys[0]}&edit=1`);
              }
          },
          detail: (keys, items) => {
            if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
            } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
            } else {
              this.props.history.push(`/customerManagement/currency-addedit?symbol=${keys[0]}&v=1`);
            }
          },
          add: (keys, items) => {
            this.props.history.push(`/customerManagement/currency-addedit?add=1`);
          },
          remRelease: (keys, items) => {
            if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
            } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
            }else {
              if(items[0].status === '0') {
                showConfirm('', '');
              } else if(items[0].status === '1') {
                showConfirm('', '');
              }
            }
          }
      }
    });
  }
}

export default Currency;
