# The Numbering System (Australia)

## Mobile Phone Numbers

In Australia, mobile phone numbers are 10 digits long and predominantly start with the prefix `04`. Due to the near exhaustion of the `04` prefix allocation, there are plans to introduce the `05` prefix.

When dialing an Australian mobile number from outside Australia, you should use the country code `61` and omit the leading zero from the prefix.
For example, the number `0411 222 333` becomes `+61 411 222 333` (replacing the '+' with your country's exit code).

Please note that this codebase should not be used to determine the current provider of an Australian mobile phone, as number portability allows users to switch providers within minutes.
However, this codebase can be utilized to determine which provider should receive SMS messages when sending messages internationally.
The owning provider will ensure the message is directed to the appropriate provider if the user is no longer with the original provider.

A number of Mobile Virtual Network Operators (MVNOs) operate in Australia, and they receive their number ranges from the primary providers they use.


| Start      | Finish     | Provider                                      | Regex
| ---------- | ---------- | --------------------------------------------- | -
| 0400000000 | 0400999999 | TELSTRA LIMITED                               | `/^0400\d{6}$/`
| 0401000000 | 0403999999 | OPTUS MOBILE PTY LIMITED                      | `/^040[123]\d{6}$/`
| 0404000000 | 0406999999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^040[4-6]\d{6}$/`
| 0407000000 | 0409999999 | TELSTRA LIMITED                               | `/^040[7-9]\d{6}$/`
| 0410000000 | 0410999999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^0410\d{6}$/`
| 0411000000 | 0413999999 | OPTUS MOBILE PTY LIMITED                      | `/^041[1-3]\d{6}$/`
| 0414000000 | 0416999999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^041[4-6]\d{6}$/`
| 0417000000 | 0419999999 | TELSTRA LIMITED                               | `/^041[7-9]\d{6}$/`
| 0420000000 | 0420019999 | SYDNEY TRAINS                                 | `/^04200[0-1]\d{4}$/`
| 0420020000 | 0420029999 | SINCH AUSTRALIA PTY LTD                       | `/^042002\d{4}$/`
| 0420030000 | 0420039999 | *SPARE*                                       | `/^042003\d{4}$/`
| 0420040000 | 0420049999 | SYMBIO NETWORKS PTY LTD                       | `/^042004\d{4}$/`
| 0420050000 | 0420099999 | *SPARE*                                       | `/^04200[5-9]\d{4}$/`
| 0420100000 | 0420109999 | PIVOTEL SATELLITE PTY LIMITED                 | `/^042010\d{4}$/`
| 0420110000 | 0420119999 | COMPATEL LIMITED                              | `/^042011\d{4}$/`
| 0420120000 | 0420199999 | *SPARE*                                       | `/^04201[2-9]\d{4}$/`
| 0420200000 | 0420999999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^0420[2-9]\d{5}$/`
| 0421000000 | 0423999999 | OPTUS MOBILE PTY LIMITED                      | `/^042[1-3]\d{6}$/`
| 0424000000 | 0426999999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^042[4-6]\d{6}$/`
| 0427000000 | 0429999999 | TELSTRA LIMITED                               | `/^042[7-9]\d{6}$/`
| 0430000000 | 0430999999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^0430\d{6}$/`
| 0431000000 | 0432999999 | OPTUS MOBILE PTY LIMITED                      | `/^043[1-2]\d{6}$/`
| 0433000000 | 0433999999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^0433\d{6}$/`
| 0434000000 | 0435999999 | OPTUS MOBILE PTY LIMITED                      | `/^043[45]\d{6}$/`
| 0436000000 | 0439999999 | TELSTRA LIMITED                               | `/^043[6-9]\d{6}$/`
| 0440000000 | 0440149999 | OPTUS NETWORKS PTY LIMITED                    | `/^0440(0\d\|1[0-4])\d{4}$/`
| 0440150000 | 0444399999 | *SPARE*                                       | `/^044(0(1[5-9]\|[2-9]\d)\|[1-3]\d{2}\|4[0-3]\d)\d{4}$/`
| 0444400000 | 0444599999 | TELSTRA LIMITED                               | `/^0444[4-5]\d{5}$/`
| 0444600000 | 0446999999 | *SPARE*                                       | `/^044(4[6-9]\|[56]\d)\d{5}$/`
| 0447000000 | 0448999999 | TELSTRA LIMITED                               | `/^044[78]\d{6}$/`
| 0449000000 | 0449299999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^0449[0-2]\d{5}$/`
| 0449300000 | 0449499999 | *SPARE*                                       | `/^0449[3-4]\d{5}$/`
| 0449500000 | 0452699999 | VODAFONE AUSTRALIA PTY LIMITED                | `/^04(49[5-9]\|5([01]\d\|2[0-6)]))\d{5}$/`
| 0452700000 | 0452919999 | *SPARE*                                       | `/^0452([78]\d\|9[01])\d{4}$/`
| 0452920000 | 0452929999 | NETSIP PTY LTD                                | `/^045292\d{4}$/`
| 0452930000 | 0454999999 | *SPARE*                                       | `/^045(29[3-9]\|[34]\d{2})\d{4}$/`
| 0455000000 | 0465999999 | TELSTRA LIMITED                               | `/^04(5[5-9]\|6[0-5])\d{6}$/`
| 0466000000 | 0466999999 | OPTUS MOBILE PTY LIMITED                      | `/^0466\d{6}$/`
| 0467000000 | 0467999999 | TELSTRA LIMITED                               | `/^0467\d{6}$/`
| 0468000000 | 0468299999 | *SPARE*                                       | `/^0468[0-2]\d{5}$/`
| 0468300000 | 0468999999 | OPTUS MOBILE PTY LIMITED                      | `/^0468[3-9]\d{5}$/`
| 0469000000 | 0469449999 | LYCAMOBILE PTY LTD                            | `/^0469([0-3]\d\|4[0-4])\d{4}$/`
| 0469450000 | 0469539999 | *SPARE*                                       | `/^0469(4[5-9]\|5[0-3])\d{4}$/`
| 0469540000 | 0470789999 | LYCAMOBILE PTY LTD                            | `/^04(69(5[4-9]\|[6-9]\d)\|70([0-6]\d\|7[0-8]))\d{4}$/`
| 0470790000 | 0472499999 | *SPARE*                                       | `/^047(0(79\|[89]\d)\|1\d{2}\|2[0-4]\d)\d{4}$/`
| 0472500000 | 0477999999 | TELSTRA LIMITED                               | `/^047(2[5-9]\|[3-7]\d)\d{5}$/`
| 0478000000 | 0479199999 | OPTUS MOBILE PTY LIMITED                      | `/^047(8\d\|9[0-1])\d{5}$/`
| 0479200000 | 0479999999 | *SPARE*                                       | `/^0479[2-9]\d{5}$/`
| 0480000000 | 0480099999 | PIVOTEL SATELLITE PTY LIMITED                 | `/^04800\d{5}$/`
| 0480100000 | 0480799999 | TELSTRA LIMITED                               | `/^0480[1-7]\d{5}$/`
| 0480800000 | 0480899999 | PIVOTEL SATELLITE PTY LIMITED                 | `/^04808\d{5}$/`
| 0480900000 | 0480909999 | FIELD SOLUTIONS GROUP PTY LTD                 | `/^048090\d{4}$/`
| 0480910000 | 0480999999 | *SPARE*                                       | `/^04809[1-9]\d{4}$/`
| 0481000000 | 0482399999 | OPTUS MOBILE PTY LIMITED                      | `/^048(1\d\|2[0-3])\d{5}$/`
| 0482400000 | 0483399999 | TELSTRA LIMITED                               | `/^048(2[4-9]\|3[0-3])\d{5}$/`
| 0483400000 | 0483799999 | *SPARE*                                       | `/^0483[4-7]\d{5}$/`
| 0483800000 | 0483899999 | TELSTRA LIMITED                               | `/^04838\d{5}$/`
| 0483900000 | 0483999999 | OPTUS MOBILE PTY LIMITED                      | `/^04839\d{5}$/`
| 0484000000 | 0484999999 | TELSTRA LIMITED                               | `/^0484\d{6}$/`
| 0485000000 | 0485799999 | *SPARE*                                       | `/^0485[0-7]\d{5}$/`
| 0485800000 | 0485999999 | PIVOTEL SATELLITE PTY LIMITED                 | `/^0485[8-9]\d{5}$/`
| 0486000000 | 0488799999 | TELSTRA LIMITED                               | `/^048([6-7]\d\|8[0-7])\d{5}$/`
| 0488800000 | 0488899999 | PIVOTEL SATELLITE PTY LIMITED                 | `/^04888\d{5}$/`
| 0488900000 | 0488999999 | TELSTRA LIMITED                               | `/^04889\d{5}$/`
| 0489000000 | 0489349999 | OPTUS NETWORKS PTY LIMITED                    | `/^0489([0-2]\d\|3[0-4])\d{4}$/`
| 0489350000 | 0489839999 | *SPARE*                                       | `/^0489(3[5-9]\|[4-7]\d\|8[0-3])\d{4}$/`
| 0489840000 | 0489849999 | VICTORIAN RAIL TRACK                          | `/^048984\d{4}$/`
| 0489850000 | 0489899999 | *SPARE*                                       | `/^04898[5-9]\d{4}$/`
| 0489900000 | 0489999999 | PIVOTEL SATELLITE PTY LIMITED                 | `/^04899\d{5}$/`
| 0490000000 | 0491499999 | TELSTRA LIMITED                               | `/^049(0\d\|1[0-4])\d{5}$/`
| 0491500000 | 0491519999 | BIRD.COM PTY LTD                              | `/^04915[0-1]\d{4}$/`
| 0491520000 | 0491569999 | *SPARE*                                       | `/^04915[2-6]\d{4}$/`
| 0491570000 | 0491579999 | AUSTRALIAN COMMUNICATIONS AND MEDIA AUTHORITY | `/^049157\d{4}$/`
| 0491580000 | 0491589999 | LMGPS LTD                                     | `/^049158\d{4}$/`
| 0491590000 | 0491599999 | *SPARE*                                       | `/^049159\d{4}$/`
| 0491600000 | 0494499999 | TELSTRA LIMITED                               | `/^049(1[6-9]\|[2-3]\d\|4[0-4])\d{5}$/`
| 0494500000 | 0496999999 | *SPARE*                                       | `/^049(4[5-9]\|[5-6]\d)\d{5}$/`
| 0497000000 | 0499999999 | TELSTRA LIMITED                               | `/^049[7-9]\d{6}$/`


## Australian mobile phone numbers for use in TV shows, films and creative works

ACMA reserves some numbers so that they can be used for creative works, such as in TV shows and films.
These numbers do not belong to people or businesses and you are free to use them in works of fiction.

| 0491 570 006 | 0491 570 156 | 0491 570 157 | 0491 570 158 | 0491 570 159 | 0491 570 110 |
| - | - | - | - | - | - |
| 0491 570 313 | 0491 570 737 | 0491 571 266 | 0491 571 491 | 0491 571 804 | 0491 572 549
| 0491 572 665 | 0491 572 983 | 0491 573 770 | 0491 573 087 | 0491 574 118 | 0491 574 632
| 0491 575 254 | 0491 575 789 | 0491 576 398 | 0491 576 801 | 0491 577 426 | 0491 577 644
| 0491 578 957 | 0491 578 148 | 0491 578 888 | 0491 579 212 | 0491 579 760 | 0491 579 455

Regex:
````regex
/^049157(0(006|1(5[6-9]|10)|313|737)|1(266|491|804)|2(549|665|983)|3(770|087)|4(118|632)|5(254|789)|6(398|801)|7(426|644)|8(957|(14|88)8)|9(212|760|455))$/
````