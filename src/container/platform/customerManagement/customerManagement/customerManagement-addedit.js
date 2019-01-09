// 客户管理--详情
import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class CustomerManagementAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '更新人',
      field: 'updater',
      hidden: true
    }, {
      title: '公司编号',
      field: 'code',
      required: true,
      readonly: this.code
    }, {
      title: '公司名称',
      field: 'name',
      required: true
    }, {
      title: '公司负责人',
      field: 'charger',
      required: true
    }, {
      title: '联系方式',
      field: 'chargerMobile',
      required: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: '802061',
      editCode: '802051',
      addCode: '802050',
      beforeSubmit: (data) => {
        data.companyCode = data.code;
        return data;
      }
    });
  }
}

export default CustomerManagementAddedit;
