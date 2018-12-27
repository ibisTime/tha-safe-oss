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
      title: '业务类型',
      field: 'bizType'
    }, {
      title: '渠道',
      field: 'channel'
    }, {
      title: '公链',
      field: 'payCardInfo'
    }, {
      title: '推送状态',
      field: 'pushStatus'
    }, {
      title: '推送次数',
      field: 'pushTimes'
    }, {
      title: '交易hash',
      field: 'hash'
    }, {
      title: '余额',
      field: 'amountString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '充值时间',
      field: 'createDatetime'
    }, {
      title: '业务说明',
      field: 'bizNote'
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
