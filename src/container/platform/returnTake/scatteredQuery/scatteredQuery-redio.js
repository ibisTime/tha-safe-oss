// 散取查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class ScatteredQueryRedio extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '取现地址',
      field: 'name'
    }, {
      title: '余额',
      field: 'code'
    }, {
      title: '金额',
      field: 'url'
    }, {
      title: '接收地址',
      field: 'url'
    }, {
      title: '备注',
      field: 'remark',
      type: 'textarea',
      normalArea: true,
      readonly: false
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: '623916',
      editCode: '623910'
    });
  }
}

export default ScatteredQueryRedio;
