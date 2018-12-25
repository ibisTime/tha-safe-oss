// 资讯管理

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
} from '@redux/platform/marketInformation/marketInformation';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.marketInformation,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class MarketInformation extends React.Component {
  render() {
    const fields = [{
      title: '标题',
      field: 'name',
      search: true
    }, {
        title: '封面',
        field: 'code'
    }, {
      title: '作者',
      field: 'url'
    }, {
      title: '状态',
      field: 'url'
    }, {
      title: '备注',
      field: 'url'
    }];
    return this.props.buildList({
      fields,
      pageCode: 805000,
      btnEvent: {
        add: (keys, items) => {
          this.props.history.push(`/marketInformation/marketInformation-addedit?code=${keys[0]}`);
        },
        edit: (keys, items) => {
          if (!keys || !keys.length) {
              showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
              showWarnMsg('请选择一条记录');
          }else {
            this.props.history.push(`/marketInformation/marketInformation-addedit?code=${keys[0]}$edit=1`);
          }
        },
        detail: (keys, items) => {
          if (!keys || !keys.length) {
              showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
              showWarnMsg('请选择一条记录');
          }else {
            this.props.history.push(`/marketInformation/marketInformation-addedit?code=${keys[0]}v=1`);
          }
        }
      }
    });
  }
}

export default MarketInformation;
