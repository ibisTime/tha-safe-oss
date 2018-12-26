// 流水查询-详情
import React from 'react';
import { Form } from 'antd';
import { getQueryString, dateTimeFormat, moneyFormat } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class RunQueryAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
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
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: '802522'
    });
  }
}

export default RunQueryAddedit;
