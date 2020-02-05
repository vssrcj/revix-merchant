import icon from '../../images/top-10.png';

export default [
  {
    name: 'Products',
    columns: [
      {
        name: 'Crypto Bundles',
        rows: [
          { icon, name: 'Top 10', description: 'Own more than 85% of the crypto market' },
          { icon, name: 'Smart Contract', description: 'Own the top smart contract cryptoassets' },
          { icon, name: 'Payment', description: 'Own the top payment focused cryptoassets' },
          { icon, name: 'Bitcoin', description: 'The largest cryptoasset' },
        ],
      },
      {
        name: 'Alternative Bundles',
        rows: [
          { icon, name: 'Cannabis', description: 'Own more than lorem ipsum dolor sit am' },
          { icon, name: 'Artificial Intelligence', description: 'Own the top lorem ipsum dolor sit amet' },
          { icon, name: 'eSports', description: 'Own the top lorem ipsum dolor sit amet' },
          { icon, name: '5G Networks', description: 'Own the top lorem ipsum dolor sit amet' },
          { icon, name: 'Artificial Meat', description: 'Own the top lorem ipsum dolor sit amet' },
        ],
      },
      {
        name: 'Invite friends',
        rows: [
          { icon, name: 'Refferal program', description: 'You both get rewarded' },
        ],
      },
    ],
  },
  {
    name: 'Company',
    columns: [
      {
        rows: [
          { icon, name: 'About' },
          { icon, name: 'Verification' },
          { icon, name: 'Learning portal' },
          { icon, name: 'Security' },
          { icon, name: 'Fees' },
        ],
      },
    ],
  },
  {
    name: 'Support',
    columns: [
      {
        rows: [
          { icon, name: 'FAQ' },
          { icon, name: 'How to videos' },
          { icon, name: 'Live chat' },
          { icon, name: 'Email', description: 'support@revix.com' },
          { icon, name: 'Phone', description: '+44 798 132 1122' },
        ],
      },
    ],
  },
];
