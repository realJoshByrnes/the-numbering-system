# The Numbering System (Australia)

| Service Types               | Length | Regex                                                           |
| --------------------------- | ------ | --------------------------------------------------------------- |
International service         |  4 | `/^001[04-689]$/`
International service         |  5 | `/^00(1[37]\|9\d)\d$/`
Incoming only international   |  4 | `/^10(3\d\|68)$/`
Community                     |  4 | `/^11(00\|9\d)$/`
Interconnection and routing   |  4 | `/^14[1-9]\d$/`
Data network access           |  5 | `/^019(20\|8[4-8]}$/`
Incoming only international   |  5 | `/^1010[034]$/`
Operator service              |  5 | `/^12([45]5\d\|488\|68[689])$/`
Paging                        |  6 | `/^0160[1-9]\d$/`
Virtual private network       |  5 | `/^180\d{2}$/`
Calling card                  |  5 | `/^189\d{2}$/`
Community                     |  6 | `/^110[1-9]\d{2}$/`
Incoming only international   |  6 | `/^12014[1-3]$/`
Operator service              |  6 | `/^12(4(124\|275\|622\|733\|9[23]7)\|5(000\|1([013]\d\|25)))$/`
Testing service               |  6 | `/^127220$/`
Local rate                    |  6 | `/^13[1-9]\d{2}$/`
Premium rate                  |  6 | `/^19[13-5]\d{2}$/`
Incoming only international   |  7 | `/^1035\d{3}$/`
Operator service              |  7 | [TBC] - 7 digit 124/125 prefix
Testing service               |  7 | `/^12723\d{2}$/`
Freephone                     |  7 | `/^1802[0-3]\d{2}$/`
Incoming only international   |  8 | [TBC] - 8 digit 10/11/12 prefix
Internal network              |  8 | `/^12682\d{3}$/`
Incoming only international   |  8 | `/^12(7[01]\d{4}\|9\d{5})$/`
Local rate                    |  8 | `/^1345[0-4]\d{3}$/`
Premium rate                  |  8 | [TBC] - 8 digit 196/197/199 prefix
Satellite telephone           | 10 | `/^014[1-357]\d{6}$/`
Data network access           | 10 | `/^0198[0-39]\d{5}$/`
Local service                 | 10 | `/^02(38\d{6}\|[4-9]\d{7})$/` (Approx) - eg. 0252 0254 027[013467] don't exist
Local service                 | 10 | `/^03[4-9]\d{7}$/` (Approx)
Digital Mobile                | 10 | `/^04\d{8}$/` (Approx)
Local service                 | 10 | `/^07[2-57]\d{7}$/` (Approx)
Local service                 | 10 | `/^08(51\d{6}\|6-9\d{7})$/` (Approx)
Incoming only international   | 10 | `/^1(20(1([1-356]\d|4[04]|99)|2\d{2})|0(101|34\d)\d)\d{4}$/`
Internal network              | 10 | `/^126([1-79]\d\|8[013-57])\d{5}$/`
Testing Service               | 10 | `/^1272([013-9]\d\|2[1-9])\d{4}$/`
Local rate                    | 10 | `/^1300\d{6}$/`
Freephone                     | 10 | `/^1800\d{6}$/`
Premium rate                  | 10 | `/^1900\d{6}$/`
Restricted access and premium | 10 | `/^1901\d{6}$/`
Premium rate                  | 10 | `/^1902\d{6}$/`
Premium rate and paging       | 10 | `/^1906\d{6}$/`
Incoming only international   | 12 | `/^10(19|66)\d{8}$/`
Incoming only international   | 14 | `/^1050\d{10}$/`
Incoming only international   | 15 | `/^123\d{12}$/`


## License

This project is licensed under the MIT License.