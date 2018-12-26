// 充值查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString, moneyFormat } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class TopUpueryAddedit extends DetailUtil {
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
      title: '账号',
      field: 'accountNumber'
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '类型',
      field: 'type'
    }, {
      title: '余额',
      field: 'amountString',
      render(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: '802706'
    });
  }
}

export default TopUpueryAddedit;
