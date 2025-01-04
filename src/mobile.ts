// List of providers and their corresponding regular expressions
const providers = [
  { name: 'TELSTRA LIMITED', regex: /^0400\d{6}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^040[123]\d{6}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^040[4-6]\d{6}$/ },
  { name: 'TELSTRA LIMITED', regex: /^040[7-9]\d{6}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED	', regex: /^0410\d{6}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^041[1-3]\d{6}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^041[4-6]\d{6}$/ },
  { name: 'TELSTRA LIMITED', regex: /^041[7-9]\d{6}$/ },
  { name: 'SYDNEY TRAINS', regex: /^04200[0-1]\d{4}$/ },
  { name: 'SINCH AUSTRALIA PTY LTD', regex: /^042002\d{4}$/ },
  { name: '*SPARE*', regex: /^042003\d{4}$/ },
  { name: 'SYMBIO NETWORKS PTY LTD', regex: /^042004\d{4}$/ },
  { name: '*SPARE*', regex: /^04200[5-9]\d{4}$/ },
  { name: 'PIVOTEL SATELLITE PTY LIMITED', regex: /^042010\d{4}$/ },
  { name: 'COMPATEL LIMITED', regex: /^042011\d{4}$/ },
  { name: '*SPARE*', regex: /^04201[2-9]\d{4}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^0420[2-9]\d{5}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^042[1-3]\d{6}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^042[4-6]\d{6}$/ },
  { name: 'TELSTRA LIMITED', regex: /^042[7-9]\d{6}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^0430\d{6}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED	', regex: /^043[1-2]\d{6}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^0433\d{6}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^043[45]\d{6}$/ },
  { name: 'TELSTRA LIMITED', regex: /^043[6-9]\d{6}$/ },
  { name: 'OPTUS NETWORKS PTY LIMITED', regex: /^0440(0\d|1[0-4])\d{4}$/ },
  { name: '*SPARE*', regex: /^044(0(1[5-9]|[2-9]\d)|[1-3]\d{2}|4[0-3]\d)\d{4}$/ },
  { name: 'TELSTRA LIMITED', regex: /^0444[4-5]\d{5}$/ },
  { name: '*SPARE*', regex: /^044(4[6-9]|[56]\d)\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^044[78]\d{6}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^0449[0-2]\d{5}$/ },
  { name: '*SPARE*', regex: /^0449[3-4]\d{5}$/ },
  { name: 'VODAFONE AUSTRALIA PTY LIMITED', regex: /^04(49[5-9]|5([01]\d|2[0-6)]))\d{5}$/ },
  { name: '*SPARE*', regex: /^0452([78]\d|9[01])\d{4}$/ },
  { name: 'NETSIP PTY LTD', regex: /^045292\d{4}$/ },
  { name: '*SPARE*', regex: /^045(29[3-9]|[34]\d{2})\d{4}$/ },
  { name: 'TELSTRA LIMITED', regex: /^04(5[5-9]|6[0-5])\d{6}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^0466\d{6}$/ },
  { name: 'TELSTRA LIMITED', regex: /^0467\d{6}$/ },
  { name: '*SPARE*', regex: /^0468[0-2]\d{5}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^0468[3-9]\d{5}$/ },
  { name: 'LYCAMOBILE PTY LTD', regex: /^0469([0-3]\d|4[0-4])\d{4}$/ },
  { name: '*SPARE*', regex: /^0469(4[5-9]|5[0-3])\d{4}$/ },
  { name: 'LYCAMOBILE PTY LTD', regex: /^04(69(5[4-9]|[6-9]\d)|70([0-6]\d|7[0-8]))\d{4}$/ },
  { name: '*SPARE*', regex: /^047(0(79|[89]\d)|1\d{2}|2[0-4]\d)\d{4}$/ },
  { name: 'TELSTRA LIMITED', regex: /^047(2[5-9]|[3-7]\d)\d{5}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^047(8\d|9[0-1])\d{5}$/ },
  { name: '*SPARE*', regex: /^0479[2-9]\d{5}$/ },
  { name: 'PIVOTEL SATELLITE PTY LIMITED', regex: /^04800\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^0480[1-7]\d{5}$/ },
  { name: 'PIVOTEL SATELLITE PTY LIMITED', regex: /^04808\d{5}$/ },
  { name: 'FIELD SOLUTIONS GROUP PTY LTD', regex: /^048090\d{4}$/ },
  { name: '*SPARE*', regex: /^04809[1-9]\d{4}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^048(1\d|2[0-3])\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^048(2[4-9]|3[0-3])\d{5}$/ },
  { name: '*SPARE*', regex: /^0483[4-7]\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^04838\d{5}$/ },
  { name: 'OPTUS MOBILE PTY LIMITED', regex: /^04839\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^0484\d{6}$/ },
  { name: '*SPARE*', regex: /^0485[0-7]\d{5}$/ },
  { name: 'PIVOTEL SATELLITE PTY LIMITED', regex: /^0485[8-9]\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^048([6-7]\d|8[0-7])\d{5}$/ },
  { name: 'PIVOTEL SATELLITE PTY LIMITED', regex: /^04888\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^04889\d{5}$/ },
  { name: 'OPTUS NETWORKS PTY LIMITED', regex: /^0489([0-2]\d|3[0-4])\d{4}$/ },
  { name: '*SPARE*', regex: /^0489(3[5-9]|[4-7]\d|8[0-3])\d{4}$/ },
  { name: 'VICTORIAN RAIL TRACK', regex: /^048984\d{4}$/ },
  { name: '*SPARE*', regex: /^04898[5-9]\d{4}$/ },
  { name: 'PIVOTEL SATELLITE PTY LIMITED', regex: /^04899\d{5}$/ },
  { name: 'TELSTRA LIMITED	', regex: /^049(0\d|1[0-4])\d{5}$/ },
  { name: 'BIRD.COM PTY LTD', regex: /^04915[0-1]\d{4}$/ },
  { name: '*SPARE*', regex: /^04915[2-6]\d{4}$/ },
  { name: 'AUSTRALIAN COMMUNICATIONS AND MEDIA AUTHORITY', regex: /^049157\d{4}$/ },
  { name: 'LMGPS LTD', regex: /^049158\d{4}$/ },
  { name: '*SPARE*', regex: /^049159\d{4}$/ },
  { name: 'TELSTRA LIMITED', regex: /^049(1[6-9]|[2-3]\d|4[0-4])\d{5}$/ },
  { name: '*SPARE*', regex: /^049(4[5-9]|[5-6]\d)\d{5}$/ },
  { name: 'TELSTRA LIMITED', regex: /^049[7-9]\d{6}$/ }
];

function checkProvider(phoneNumber: string) {
  for (const provider of providers) {
    if (provider.regex.test(phoneNumber)) {
        return provider.name;
    }
  }
  return 'Unknown Provider';
}

let start = 400000000;
let end = 499999999;

// Check all mobile numbers (ensure accuracy)
let lastProvider = '';
for (let i = start; i <= end; i++) {
  const num = i.toString(10).padStart(10, '0');
  const provider = checkProvider(num);
  if (provider !== lastProvider) {
    if (lastProvider !== '') {
      console.log((parseInt(num) - 1).toString(10).padStart(10, '0'), '| END   |', lastProvider);
    }
    lastProvider = provider;
    console.log(num, '| START |', provider);
  }
}
console.log(end.toString(10).padStart(10, '0'), '| END   |', lastProvider);