// 币种查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString, moneyFormat, getUserName, moneyParse } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class CurrencyAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.symbol = getQueryString('symbol', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.add = !!getQueryString('add', this.props.location.search);
    this.edit = !!getQueryString('edit', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '符号',
      field: 'symbol',
      required: true
    }, {
      title: '英文名称',
      field: 'ename',
      required: true
    }, {
      title: '中文名称',
      field: 'cname',
      required: true
    }, {
      title: '类型',
      field: 'type',
      type: 'select',
      key: 'coin_type'
    }, {
        title: '单位',
        field: 'unit',
        required: true
    }, {
      title: '图标',
      field: 'icon',
      required: true,
      single: true,
      type: 'img'
    }, {
      title: '钱包水印图标',
      field: 'pic1',
      required: true,
      single: true,
      type: 'img'
    }, {
      title: '流水加钱图标',
      field: 'pic2',
      required: true,
      single: true,
      type: 'img'
    }, {
        title: '流水减钱图标',
        field: 'pic3',
        required: true,
        single: true,
        type: 'img'
    }, {
      title: '归集阀值',
      field: 'collectStart',
      formatter: (v, data) => {
        if(this.add) {
          return '';
        }else {
          return moneyFormat(v, '', data.symbol);
        }
      },
      required: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'coin_status',
      hidden: this.add || this.edit
    }, {
      title: 'UI序号',
      field: 'orderNo',
      required: true
    }, {
      title: '取现手续费',
      field: 'withdrawFee',
      required: true
    }, {
        title: '合约地址',
        field: 'contractAddress',
        required: true
    }, {
      title: '合约ABI',
      field: 'contractABI',
      type: 'textarea',
      normalArea: true,
      required: true
    }, {
      title: '更新人',
      field: 'updater',
      hidden: this.add || this.edit,
      formatter: () => getUserName()
    }, {
      title: '更新时间',
      field: 'updateDatetime',
      type: 'datetime',
      hidden: this.add || this.edit
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      key: 'symbol',
      code: this.symbol,
      view: this.view,
      detailCode: this.add ? '' : '802266',
      editCode: '802252',
      addCode: '802250'
    });
  }
}

export default CurrencyAddedit;
