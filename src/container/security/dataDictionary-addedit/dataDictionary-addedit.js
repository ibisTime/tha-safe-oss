import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
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
      field: 'remark',
      title: '参数名',
      hidden: true
    }, {
      field: 'remark1',
      title: '参数名',
      _keys: ['remark'],
      readonly: true
    }, {
      title: '参数值',
      field: 'cvalue',
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
      editCode: '660911'
    });
  }
}

export default DataDictionaryEdit;
