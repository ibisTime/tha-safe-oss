// 客户管理

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
} from '@redux/platform/customerManagement/customerManagement';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showMsgfirm, getUserName } from 'common/js/util';

let comList = []; // 公司编号列表查
fetch(802062).then(data => {
  comList = data;
});

@listWrapper(
  state => ({
    ...state.customerManagement,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class CustomerManagement extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'code',
      data: comList,
      keyName: 'code',
      valueName: 'code',
      type: 'select',
      search: true,
      render(v) {
        return v;
      }
    }, {
        title: '公司名称',
        field: 'name'
    }, {
      title: '联系人',
      field: 'charger'
    }, {
      title: '联系方式',
      field: 'chargerMobile'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'company_status'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802060,
      btnEvent: {
        cooEnd: (keys, items) => {
          function hzManagement() {
            fetch('802053', {
              code: keys[0],
              updater: getUserName()
            }).then(data => {
              if(data) {
                showWarnMsg('合作成功');
                setTimeout(() => {
                  window.location.reload();
                }, 1500);
              }
            });
          }
          function jsManagement() {
            fetch('802052', {
              code: keys[0],
              updater: getUserName()
            }).then(data => {
              if(data) {
                showWarnMsg('结束成功');
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
          } else {
            if(items[0].status === '1') {
              showMsgfirm('primary', '开始合作', '是否开始合作？', hzManagement);
            } else if(items[0].status === '0') {
              showMsgfirm('', '结束合作', '是否结束合作？', jsManagement);
            }
          }
        }
      }
    });
  }
}

export default CustomerManagement;
