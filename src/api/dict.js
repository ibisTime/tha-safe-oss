import fetch from 'common/js/fetch';

/**
 * 获取数据字典列表
 * @param parentKey
 * @param bizType
 */

export function getDictList({ parentKey, companyCode, bizType = 660906 }) {
  if (getDictList[parentKey]) {
    return Promise.resolve(getDictList[parentKey]);
  }
  return fetch(bizType, {
    parentKey
  }, 'system').then(data => {
    getDictList[parentKey] = data;
    return data;
  });
}
/**
 * 根据ckey查询系统参数
 * @param key
 * @param bizType
 */
export function getSystormParam({ parentKey, bizType = 660919 }) {
    if (getSystormParam[parentKey]) {
        return Promise.resolve(getSystormParam[parentKey]);
    }
    return fetch(bizType, {
      parentKey
    }).then(data => {
        getSystormParam[parentKey] = data;
        return data;
    });
}
