import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserName } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class RoleAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'kind',
      value: 1,
      hidden: true
    }, {
      title: '角色名称',
      field: 'name',
      required: true,
      maxlength: 30
    }, {
      title: '等级',
      field: 'level',
      type: 'select',
      key: 'role_level',
      required: true
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 805022,
      addCode: 805023,
      editCode: 805025,
      beforeSubmit: (data) => {
        data.updater = getUserName();
        return data;
      }
    });
  }
}

export default RoleAddEdit;
