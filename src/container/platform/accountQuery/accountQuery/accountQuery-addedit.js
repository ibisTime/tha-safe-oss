// 账户查询-详情
import React from 'react';
import { Form } from 'antd';
import { getQueryString, moneyFormat } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class AccountQueryAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '调用者平台ID',
      field: 'userId'
    }, {
      title: '公司编号',
      field: 'companyCode'
    }, {
      title: '账号',
      field: 'accountNumber'
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '类型',
      field: 'type'
    }, {
      title: '入金',
      field: 'inAmountString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '出金',
      field: 'outAmountString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '余额',
      field: 'amountString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '最新流水编号',
      field: 'lastOrder'
    }, {
      title: '状态',
      field: 'status'
    }, {
      title: '创建时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.buildDetail({
      fields,
      key: 'accountNumber',
      code: this.code,
      view: this.view,
      detailCode: '802501'
    });
  }
}

export default AccountQueryAddedit;
