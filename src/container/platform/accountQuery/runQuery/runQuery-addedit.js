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
      field: 'companyCode'
    }, {
      title: '账户编号',
      field: 'accountNumber'
    }, {
      title: '流水编号',
      field: 'code',
      search: true
    }, {
      title: '商户订单号',
      field: 'refOrderCode'
    }, {
      title: '商户流水号',
      field: 'merchantJourCode'
    }, {
      title: '上一条商户流水编号',
      field: 'prevJourCode'
    }, {
      title: '交易序号',
      field: 'transOrderNo'
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '业务类型',
      field: 'bizType'
    }, {
      title: '业务说明',
      field: 'bizNote'
    }, {
      title: '变动金额',
      field: 'transAmountString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'jour_status'
    }, {
      field: 'transDatetime',
      title: '交易时间',
      type: 'datetime'
    }, {
      field: 'importDatetime',
      title: '导入时间',
      type: 'datetime'
    }, {
      title: '对账人',
      field: 'workUser'
    }, {
      field: 'workDatetime',
      title: '对账时间',
      type: 'datetime'
    }, {
      title: '对账说明',
      field: 'workNote'
    }, {
      title: '调账人',
      field: 'adjustUser'
    }, {
      field: 'adjustDatetime',
      title: '调账时间',
      type: 'datetime'
    }, {
      title: '调账说明',
      field: 'adjustNote'
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
