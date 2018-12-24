// 充值查询--详情

import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
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
      title: '账户名',
      field: 'name',
      search: true
    }, {
        title: '账号',
        field: 'code'
    }, {
      title: '类型',
      field: 'url'
    }, {
      title: '余额',
      field: 'url'
    }, {
      title: '创建时间',
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

export default TopUpueryAddedit;
