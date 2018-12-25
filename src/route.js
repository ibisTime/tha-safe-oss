import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/system/role', component: asyncComponent(() => import('container/security/role/role'))
  },
  {
    path: '/system/role/addedit', component: asyncComponent(() => import('container/security/role-addedit/role-addedit'))
  },
  {
    path: '/system/role/menu', component: asyncComponent(() => import('container/security/role-menu/role-menu'))
  },
  {
    path: '/system/menu', component: asyncComponent(() => import('container/security/menu/menu'))
  },
  {
    path: '/system/menu/addedit', component: asyncComponent(() => import('container/security/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user', component: asyncComponent(() => import('container/security/user/user'))
  },
  {
    path: '/system/user/role', component: asyncComponent(() => import('container/security/user/assign'))
  },
  {
    path: '/system/user/pwd_reset', component: asyncComponent(() => import('container/security/user/pwdReset'))
  },
  //  系统参数
  {
    path: '/system/sysPara', component: asyncComponent(() => import('container/security/sysParam/sysParam'))
  },
  //  系统参数修改
  {
    path: '/system/sysPara/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict', component: asyncComponent(() => import('container/security/dataDict/dataDict'))
  },
  {
    path: '/system/dataDict/addedit', component: asyncComponent(() => import('container/security/dataDict-addedit/dataDict-addedit'))
  },
  {
    path: '/system/user/addedit', component: asyncComponent(() => import('container/security/user-addedit/user-addedit'))
  },
  {
    path: '/platform/memberLevel/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
    // 系统管理--数据字典管理 wallet
    {
        path: '/security/dataDictionary', component: asyncComponent(() => import('container/security/dataDictionary/dataDictionary'))
    },
    {
        path: '/security/dataDictionary/addedit', component: asyncComponent(() => import('container/security/dataDictionary-addedit/dataDictionary-addedit'))
    },
    // 平台后台--账户查询
    {
        path: '/accountQuery/accountQuery', component: asyncComponent(() => import('container/platform/accountQuery/accountQuery/accountQuery'))
    },
    // 平台后台--流水查询
    {
        path: '/runQuery/runQuery', component: asyncComponent(() => import('container/platform/accountQuery/runQuery/runQuery'))
    },
    // 平台后台-- 编号 -流水查询
    {
        path: '/zdRunQuery/zdRunQuery', component: asyncComponent(() => import('container/platform/accountQuery/zdRunQuery/zdRunQuery'))
    },
    // 平台后台--历史流水查询
    {
        path: '/hisRunquery/hisRunquery', component: asyncComponent(() => import('container/platform/accountQuery/hisRunquery/hisRunquery'))
    },
    // 平台后台--地址查询-btc
    {
        path: '/btcAddressQuery/btcAddressQuery', component: asyncComponent(() => import('container/platform/addressQuery/btcAddressQuery/btcAddressQuery'))
    },
    // 平台后台--地址查询-erc20
    {
        path: '/erc20AddressQuery/erc20AddressQuery', component: asyncComponent(() => import('container/platform/addressQuery/erc20AddressQuery/erc20AddressQuery'))
    },
    // 平台后台--地址查询-erc
    {
        path: '/erc20AddressQuery/ercAddressQuery', component: asyncComponent(() => import('container/platform/addressQuery/erc20AddressQuery/ercAddressQuery'))
    },
    // 平台后台--地址查询-eth
    {
        path: '/ethAddressQuery/ethAddressQuery', component: asyncComponent(() => import('container/platform/addressQuery/ethAddressQuery/ethAddressQuery'))
    },
    // 平台后台--地址查询-usd
    {
        path: '/usdAddressQuery/usdAddressQuery', component: asyncComponent(() => import('container/platform/addressQuery/usdAddressQuery/usdAddressQuery'))
    },
    // 平台后台--流水查询-usd
    {
        path: '/usdAddressQuery/usdRunQuery', component: asyncComponent(() => import('container/platform/addressQuery/usdAddressQuery/usdRunQuery'))
    },
    // 平台后台--地址查询-wan
    {
        path: '/wanAddressQuery/wanAddressQuery', component: asyncComponent(() => import('container/platform/addressQuery/wanAddressQuery/wanAddressQuery'))
    },
    // 平台后台--地址查询-wrc
    {
        path: '/wrc20AddressQuery/wrc20AddressQuery', component: asyncComponent(() => import('container/platform/addressQuery/wrc20AddressQuery/wrc20AddressQuery'))
    },
    // 平台后台--客户管理-币种管理
    {
        path: '/customerManagement/currency', component: asyncComponent(() => import('container/platform/customerManagement/currency/currency'))
    },
    // 平台后台--客户管理-币种管理-详情
    {
        path: '/customerManagement/currency-addedit', component: asyncComponent(() => import('container/platform/customerManagement/currency/currency-addedit'))
    },
    // 平台后台--客户管理-客户管理
    {
        path: '/customerManagement/customerManagement', component: asyncComponent(() => import('container/platform/customerManagement/customerManagement/customerManagement'))
    },
    // 平台后台--客户管理-规则查询
    {
        path: '/customerManagement/rules', component: asyncComponent(() => import('container/platform/customerManagement/rules/rules'))
    },
    // 平台后台--行情资讯-btc行情
    {
        path: '/marketInformation/btcCurrency', component: asyncComponent(() => import('container/platform/marketInformation/btcCurrency/btcCurrency'))
    },
    // 平台后台--行情资讯-法币汇率
    {
        path: '/marketInformation/fiatCurrency', component: asyncComponent(() => import('container/platform/marketInformation/fiatCurrency/fiatCurrency'))
    },
    // 平台后台--行情资讯-本币行情
    {
        path: '/marketInformation/itsCurrency', component: asyncComponent(() => import('container/platform/marketInformation/itsCurrency/itsCurrency'))
    },
    // 平台后台--行情资讯-资讯管理
    {
        path: '/marketInformation/marketInformation', component: asyncComponent(() => import('container/platform/marketInformation/marketInformation/marketInformation'))
    },
    // 平台后台--行情资讯-资讯管理-详情·新增·修改
    {
        path: '/marketInformation/marketInformation-addedit', component: asyncComponent(() => import('container/platform/marketInformation/marketInformation/marketInformation-addedit'))
    },
    // 平台后台--归集散取-定存查询
    {
        path: '/returnTake/dependingQuery', component: asyncComponent(() => import('container/platform/returnTake/dependingQuery/dependingQuery'))
    },
    // 平台后台--归集散取-散取查询
    {
        path: '/returnTake/scatteredQuery', component: asyncComponent(() => import('container/platform/returnTake/scatteredQuery/scatteredQuery'))
    },
    // 平台后台--归集散取-散取查询-提币广播
    {
        path: '/returnTake/scatteredQuery/moneyRedio', component: asyncComponent(() => import('container/platform/returnTake/scatteredQuery/scatteredQuery-redio'))
    },
    // 平台后台--归集散取-归集查询
    {
        path: '/returnTake/summarizeQuery', component: asyncComponent(() => import('container/platform/returnTake/summarizeQuery/summarizeQuery'))
    },
    // 平台后台--归集散取-充值查询
    {
        path: '/returnTake/topUpuery', component: asyncComponent(() => import('container/platform/returnTake/topUpuery/topUpuery'))
    }
];

export default ROUTES;
