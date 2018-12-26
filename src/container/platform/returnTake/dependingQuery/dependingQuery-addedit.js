// 定存查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString, moneyFormat } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class DependingQueryAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '账号',
      field: 'accountNumber'
    }, {
      title: '公司编号',
      field: 'companyCode'
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
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: '802709'
    });
  }
}

export default DependingQueryAddedit;
