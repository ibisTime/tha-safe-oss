// 资讯管理--详情
import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class MarketInformationAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '标题',
      field: 'name'
    }, {
      title: '作者',
      field: 'url'
    }, {
      title: '正文',
      field: 'url',
      type: 'textarea',
      normalArea: true
    }, {
      title: '原文链接',
      field: 'url'
    }, {
        title: '封面',
        field: 'code',
        type: 'img',
        required: true,
        single: true
    }, {
      title: '摘要',
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

export default MarketInformationAddedit;
