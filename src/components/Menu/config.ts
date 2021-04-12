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
    label: 'BUD',
    icon: 'FarmIcon',
    href: '',
    items: [
      {
        label: 'Farms',
        href: 'https://buddefi.com/farms',
      },
      {
        label: 'Treats',
        href: 'https://buddefi.com/treats',
      },
      {
        label: 'Chart: DexGuru',
        href: 'https://dex.guru/token/0x6B4DA04f7662DB8abf772d973D93aF573e8aFaD5',
      },
      {
        label: 'PancakeSwap Overview',
        href: 'https://pancakeswap.info/token/0x6B4DA04f7662DB8abf772d973D93aF573e8aFaD5',
      },
      {
        label: 'Buy BUD On PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6B4DA04f7662DB8abf772d973D93aF573e8aFaD5',
      },
    ],
  },
  {
    label: 'The Dog House',
    icon: 'PawIcon',
    href: '',
    // items: [
    //   {
    //     label: 'BUD Staking (Coming Soon)',
    //     href: '',
    //   },
    // ],
  },
  {
    label: 'PUP',
    icon: 'DogIcon',
    href: '',
    items: [
      {
        label: 'Info',
        href: '',
        // href: 'https://pup.buddefi.com',
      },
      {
        label: 'Farms',
        href: '',
        // href: 'https://pup.buddefi.com/farms',
      },
      {
        label: 'Treats',
        href: '',
        // href: 'https://pup.buddefi.com/treats',
      },
      {
        label: 'Chart: DexGuru',
        href: '',
      },
      {
        label: 'Buy PUP On PancakeSwap',
        href: '',
      },
    ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '#',
  // },
  // {
  //   label: 'Dapps',
  //   icon: 'NftIcon',
  //   href: '',
  //   items: [
  //     {
  //       label: 'Best Bud (TBA)',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //   ],
  // },
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
  {
    label: 'Audits',
    icon: 'AuditIcon',
    href: 'https://github.com/BudDefi/bud-audits',
  },

]

export default config
