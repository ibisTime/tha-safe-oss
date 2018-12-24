// 定存查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
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
      field: 'name',
      search: true
    }, {
        title: '充币人',
        field: 'code'
    }, {
      title: '金额',
      field: 'url'
    }, {
      title: '币种',
      field: 'url'
    }, {
      title: '状态',
      field: 'url'
    }, {
      title: '到账时间',
      field: 'url'
    }, {
      title: '对账人',
      field: 'url'
    }, {
      title: '到账时间',
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

export default DependingQueryAddedit;
