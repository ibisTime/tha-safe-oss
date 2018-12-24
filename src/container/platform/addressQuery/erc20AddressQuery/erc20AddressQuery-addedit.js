// erc20地址查询--详情
import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class Erc20AddressQueryAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
		const fields = [{
      title: '公司编号',
      field: 'name'
    }, {
        title: '类型',
        field: 'code'
    }, {
      title: '地址',
      field: 'url'
    }, {
      title: '生成时间',
      field: 'remark'
    }, {
        title: '状态',
        field: 'code'
    }, {
      title: '本地使用次数',
      field: 'url'
    }, {
      title: '网络使用次数',
      field: 'url'
    }, {
      title: '初始金额',
      field: 'url'
    }, {
      title: '当前余额',
      field: 'url'
    }, {
      title: '备注',
      field: 'url'
    }];
    return this.buildDetail({
      fields,
      key: 'id',
      code: this.code,
      view: this.view,
      detailCode: '623916',
      editCode: '623910'
    });
  }
}

export default Erc20AddressQueryAddedit;
