// 归集查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString, moneyFormat } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class SummarizeQueryAddedit extends DetailUtil {
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
      title: '金额',
      field: 'amountString',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '币种',
      field: 'currency'
    }, {
      title: '币种类型',
      field: 'coinType',
      type: 'select',
      key: 'coin_type'
    }, {
      title: '矿工费',
      field: 'txFee',
      formatter(v, data) {
        return moneyFormat(v, '', data.currency);
      }
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'collect_status'
    }, {
      title: '关联订单号',
      field: 'refNo'
    }, {
      title: '归集时间',
      field: 'confirmDatetime',
      type: 'datetime'
    }, {
      title: '被归集地址',
      field: 'fromAddress'
    }, {
      title: '归集地址',
      field: 'toAddress'
    }, {
      title: '交易hash',
      field: 'txHash'
    }, {
      title: '公司编号',
      field: 'companyCode'
    }, {
      title: '补给订单',
      field: 'supplyList',
      type: 'o2m',
      options: {
        fields: [{
          title: '币种',
          field: 'currency'
        }, {
          title: '补给地址',
          field: 'from'
        }, {
          title: '数量',
          field: 'amount',
          render(v, data) {
            return moneyFormat(v, '', data.currency);
          }
        }, {
          title: '交易hash',
          field: 'txHash'
        }, {
          title: '矿工费',
          field: 'txFee',
          render(v, data) {
            let antTableBody = document.querySelector('.ant-table-body');
            antTableBody.style.overflow = 'scroll';
            return moneyFormat(v, '', data.currency);
          }
        }, {
          title: '状态',
          field: 'status',
          type: 'select',
          key: 'supply_status'
        }, {
          title: '补给时间',
          field: 'createDatetime',
          type: 'datetime'
        }, {
          title: '备注',
          field: 'remark'
        }]
      },
      required: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: '802116'
    });
  }
}

export default SummarizeQueryAddedit;
