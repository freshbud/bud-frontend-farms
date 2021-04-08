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
        href: 'https://pancakeswap.info/token/0x6B4DA04f7662DB8abf772d973D93aF573e8aFaD5',
      },
      {
        label: 'Chart: AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x7a1aF2675513A19116ed5b523B533fBC0Ff7DCd6',
      },
      {
        label: 'Chart: Poo',
        href: 'https://poocoin.app/tokens/0x6b4da04f7662db8abf772d973d93af573e8afad5',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/cub-finance/',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/BudDefi',
      },
      {
        label: 'Docs',
        href: 'https://buddefi.gitbook.io/bud-defi/',
      },
      {
        label: 'Roadmap',
        href: 'https://buddefi.gitbook.io/bud-defi/roadmap',
      },
      {
        label: "Blog",
        href: "https://buddefi.medium.com/",
      },
    ],
  },
]

export default config
