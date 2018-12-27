import { combineReducers } from 'redux';

import { user } from './redux/user';
import { menu } from './redux/menu';
import { securityRole } from './redux/security/role';
import { securityMenu } from './redux/security/menu';
import { securitySysParam } from './redux/security/sysParam';
import { securityUser } from './redux/security/user';
import { securityDataDict } from './redux/security/dataDict';
// 系统参数管理--七牛云图片管理
import { publicBuyAds } from './redux/public/buyADS';
import { publicArticeManagement } from './redux/public/articlemanagement';
// 数据字典管理 wallet
import { dataDictionary } from './redux/security/dataDictionary';
// 平台后台-账户查询
import { accountQuery } from './redux/platform/accountQuery/accountQuery';
// 平台后台-流水查询
import { runQuery } from './redux/platform/accountQuery/runQuery';
// 平台后台- 编号 -流水查询
import { zdRunQuery } from './redux/platform/accountQuery/zdRunQuery';
// 平台后台-历史流水查询
import { hisRunquery } from './redux/platform/accountQuery/hisRunquery';
// 平台后台-地址查询-btc
import { btcAddressQuery } from './redux/platform/addressQuery/btcAddressQuery';
// 平台后台-地址查询-erc20
import { erc20AddressQuery } from './redux/platform/addressQuery/erc20AddressQuery';
// 平台后台-地址查询-erc
import { ercAddressQuery } from './redux/platform/addressQuery/ercAddressQuery';
// 平台后台-地址查询-eth
import { ethAddressQuery } from './redux/platform/addressQuery/ethAddressQuery';
// 平台后台-地址查询-usd
import { usdAddressQuery } from './redux/platform/addressQuery/usdAddressQuery';
// 平台后台-流水查询-usd
import { usdRunQuery } from './redux/platform/addressQuery/usdRunQuery';
// 平台后台-地址查询-wan
import { wanAddressQuery } from './redux/platform/addressQuery/wanAddressQuery';
// 平台后台-地址查询-wrc20
import { wrc20AddressQuery } from './redux/platform/addressQuery/wrc20AddressQuery';
// 平台后台-地址查询-wrc
import { wrcAddressQuery } from './redux/platform/addressQuery/wrcAddressQuery';
// 平台后台-客户管理-币种查询
import { currency } from './redux/platform/customerManagement/currency';
// 平台后台-客户管理-客户管理
import { customerManagement } from './redux/platform/customerManagement/customerManagement';
// 平台后台-客户管理-规则查询
import { rules } from './redux/platform/customerManagement/rules';
// 平台后台-行情资讯-btc行情
import { btcCurrency } from './redux/platform/marketInformation/btcCurrency';
// 平台后台-行情资讯-法币汇率
import { fiatCurrency } from './redux/platform/marketInformation/fiatCurrency';
// 平台后台-行情资讯-本币行情
import { itsCurrency } from './redux/platform/marketInformation/itsCurrency';
// 平台后台-行情资讯-资讯管理
import { marketInformation } from './redux/platform/marketInformation/marketInformation';
// 平台后台-归集散取-定存查询
import { dependingQuery } from './redux/platform/returnTake/dependingQuery';
// 平台后台-归集散取-散取查询
import { scatteredQuery } from './redux/platform/returnTake/scatteredQuery';
// 平台后台-归集散取-归集查询
import { summarizeQuery } from './redux/platform/returnTake/summarizeQuery';
// 平台后台-归集散取-充值查询
import { topUpuery } from './redux/platform/returnTake/topUpuery';

export default combineReducers({
  user,
  menu,
  securityRole,
  securityMenu,
  securityUser,
  securitySysParam,
  securityDataDict,
  publicBuyAds,
  publicArticeManagement,
  dataDictionary,
  accountQuery,
  runQuery,
  zdRunQuery,
  hisRunquery,
  btcAddressQuery,
  erc20AddressQuery,
  ercAddressQuery,
  ethAddressQuery,
  usdAddressQuery,
  usdRunQuery,
  wanAddressQuery,
  wrc20AddressQuery,
  wrcAddressQuery,
  currency,
  customerManagement,
  rules,
  btcCurrency,
  fiatCurrency,
  itsCurrency,
  marketInformation,
  dependingQuery,
  scatteredQuery,
  summarizeQuery,
  topUpuery
});
