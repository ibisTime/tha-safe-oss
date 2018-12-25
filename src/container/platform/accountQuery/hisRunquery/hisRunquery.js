// 历史流水查询

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
} from '@redux/platform/accountQuery/hisRunquery';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.hisRunquery,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class HisRunquery extends React.Component {
  render() {
    const fields = [{
      title: '公司编号',
      field: 'companyCode',
      search: true
    }, {
        title: '地址',
        field: 'code'
    }, {
      title: '渠道',
      field: 'url'
    }, {
      title: '业务类型',
      field: 'remark'
    }, {
        title: '变动金额',
        field: 'code'
    }, {
      title: '变动前金额',
      field: 'url'
    }, {
      title: '变动后金额',
      field: 'remark'
    }, {
        title: '状态',
        field: 'code'
    }, {
      title: '备注',
      field: 'url'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802540
    });
  }
}

export default HisRunquery;
