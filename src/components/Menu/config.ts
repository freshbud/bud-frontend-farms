import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://buddefi.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.buddefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.buddefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://buddefi.com/farms',
  },
  {
    label: 'Treats',
    icon: 'PoolIcon',
    href: 'https://buddefi.com/treats',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x16133DD9f6DD37AD95F2E833fBB2c408C7F523a1',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/cub-finance/',
      // },
    ],
  },
  // {
  //   label: 'Docs',
  //   icon: 'TicketIcon',
  //   href: 'https://docs.cubdefi.com/',
  // },
  // {
  //   label: 'Roadmap',
  //   icon: 'MoreIcon',
  //   href: 'https://docs.cubdefi.com/roadmap',
  // },
  // {
  //   label: "Tokenized Blogging",
  //   icon: "PawIcon",
  //   href: "https://leofinance.io/",
  // },
  // {
  //   label: "Blog",
  //   icon: "BlogIcon",
  //   href: "https://leofinance.io/@leofinance",
  // },
  // {
  //   label: 'CertiK Audit (Coming Soon)',
  //   icon: 'AuditIcon',
  //   href: '#',
  // },
]

export default config
