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
import { dateTimeFormat, moneyFormat } from 'common/js/util';

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
      title: '户名',
      field: 'realName'
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '渠道',
      field: 'channelType',
      type: 'select',
      search: true
    }, {
      title: '业务类型',
      field: 'bizType',
      type: 'select',
      search: true
    }, {
      title: '变动金额',
      field: 'transAmountString',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '状态',
      field: 'status'
    }, {
      field: 'createDatetime',
      title: '创建时间',
      formatter: dateTimeFormat,
      field1: 'dateStart',
      title1: '创建时间',
      type: 'date',
      field2: 'dateEnd',
      type2: 'datetime',
      twoDate: true,
      search: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 802540
    });
  }
}

export default HisRunquery;
