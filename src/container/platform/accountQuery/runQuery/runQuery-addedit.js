// 流水查询-详情
import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class RunQueryAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
		const fields = [{
      title: '户名',
      field: 'name'
    }, {
        title: '地址',
        field: 'code'
    }, {
      title: '渠道',
      field: 'url'
    }, {
      title: '业务类型',
      field: 'remark'
    }, {
        title: '变动金额',
        field: 'code'
    }, {
      title: '变动前金额',
      field: 'url'
    }, {
      title: '变动后金额',
      field: 'remark'
    }, {
        title: '状态',
        field: 'code'
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

export default RunQueryAddedit;
