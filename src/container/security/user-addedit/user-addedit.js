import React from 'react';
import { Form } from 'antd';
import DetailUtil from 'common/js/build-detail';
import { getQueryString } from 'common/js/util';

@Form.create()
class UserAddEdit extends DetailUtil {
  render() {
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    const fields = [{
      field: 'kind',
      value: 'P',
      hidden: true
    }, {
      title: '用户名',
      field: 'loginName',
      required: true,
      maxlength: 30
    }, {
      title: '真实姓名',
      field: 'realName',
      required: true,
      maxlength: 30
    }, {
      title: '手机号',
      field: 'mobile',
      required: true,
      mobile: true
    }, {
      title: '密码',
      field: 'loginPwd',
      required: true,
      type: 'password'
    }, {
      title: '角色编号',
      field: 'roleCode',
      type: 'select',
      listCode: '805021',
      keyName: 'code',
      valueName: 'name',
      required: true
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      detailCode: 630067,
      addCode: 630050,
      editCode: 630058
    });
  }
}

export default UserAddEdit;
