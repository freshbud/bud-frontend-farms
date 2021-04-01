import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://localhost:3000/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.cubdefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.cubdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://localhost:3000/farms',
  },
  {
    label: 'Treats',
    icon: 'PoolIcon',
    href: 'http://localhost:3000/treats',
  },
  // {
  //   label: 'LeoBridge',
  //   icon: 'NftIcon',
  //   href: "https://bridge.cubdefi.com",
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/cub-finance/',
      },
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
