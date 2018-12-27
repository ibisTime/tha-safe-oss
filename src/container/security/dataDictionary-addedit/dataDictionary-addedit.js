import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId, getUserName } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class DataDictionaryEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'updater',
      title: 'id',
      hidden: true,
      value: getUserName()
    }, {
      field: 'dkey',
      title: '参数键',
      readonly: true
    }, {
      title: '参数值',
      field: 'dvalue',
      required: true
    }, {
      field: 'remark',
      title: '备注'
    }];
    return this.buildDetail({
      fields,
      key: 'id',
      code: this.code,
      view: this.view,
      detailCode: '660907',
      editCode: '660902'
    });
  }
}

export default DataDictionaryEdit;
