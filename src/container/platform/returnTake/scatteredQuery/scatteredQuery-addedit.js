// 散取查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString, moneyFormat } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class ScatteredQueryAddedit extends DetailUtil {
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
      title: '订单编号',
      field: 'code'
    }, {
      title: '商户订单号',
      field: 'merchantOrderCode'
    }, {
      title: '取现金额',
      field: 'amountString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '矿工费',
      field: 'payFeeString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '公链',
      field: 'payCardInfo'
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '取现地址',
      field: 'payCardNo'
    }, {
      title: '散取地址',
      field: 'payUser'
    }, {
      title: '交易hash',
      field: 'hash'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'withdraw_status'
    }, {
      title: '创建时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '到账时间',
      field: 'payDatetime',
      type: 'datetime'
    }, {
      title: '推送状态',
      field: 'pushStatus',
      type: 'select',
      key: 'push_status'
    }, {
      title: '推送次数',
      field: 'pushTimes'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: '802756'
    });
  }
}

export default ScatteredQueryAddedit;
