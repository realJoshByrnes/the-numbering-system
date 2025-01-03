# The Numbering System (Australia)

| Service Types               | Regex                                                           |
| --------------------------- | --------------------------------------------------------------- |
International service         | `/^001([04-689]\|[37]\d\|9\d{2})$/`
Incoming only international   | `/^10(3\d\|68)$/`
Community                     | `/^11(00\|9\d)$/`
Interconnection and routing   | `/^14[1-9]\d$/`
Data network access           | `/^019(20\|8[4-8]}$/`
Incoming only international   | `/^1010[034]$/`
Operator service              | `/^12([45]5\d\|488\|68[689])$/`
Paging                        | `/^0160[1-9]\d$/`
Virtual private network       | `/^180\d{2}$/`
Calling card                  | `/^189\d{2}$/`
Community                     | `/^110[1-9]\d{2}$/`
Incoming only international   | `/^12014[1-3]$/`
Operator service              | `/^12(4(124\|275\|622\|733\|9[23]7)\|5(000\|1([013]\d\|25)))$/`
Testing service               | `/^127220$/`
Local rate                    | `/^13[1-9]\d{2}$/`
Premium rate                  | `/^19[13-5]\d{2}$/`
Incoming only international   | `/^1035\d{3}$/`
Operator service              | [TBC] - 7 digit 124/125 prefix
Testing service               | `/^12723\d{2}$/`
Freephone                     | `/^1802[0-3]\d{2}$/`
Incoming only international   | [TBC] - 8 digit 10/11/12 prefix
Internal network              | `/^12682\d{3}$/`
Incoming only international   | `/^12(7[01]\d{4}\|9\d{5})$/`
Local rate                    | `/^1345[0-4]\d{3}$/`
Premium rate                  | [TBC] - 8 digit 196/197/199 prefix
Satellite telephone           | `/^014[1-357]\d{6}$/`
Data network access           | `/^0198[0-39]\d{5}$/`
Local service                 | `/^02(38\d{6}\|[4-9]\d{7})$/` (Approx) - eg. 0252 0254 027[013467] don't exist
Local service                 | `/^03[4-9]\d{7}$/` (Approx)
Digital Mobile                | `/^04\d{8}$/` (Approx)
Local service                 | `/^07[2-57]\d{7}$/` (Approx)
Local service                 | `/^08(51\d{6}\|6-9\d{7})$/` (Approx)
Incoming only international   | [TBC]
Internal network              | [TBC]
Testing Service               | [TBC]
Local rate                    | `/^1300\d{6}$/`
Freephone                     | `/^1800\d{6}$/`
Premium rate                  | `/^1900\d{6}$/`
Restricted access and premium | `/^1901\d{6}$/`
Premium rate                  | `/^1902\d{6}$/`
Premium rate and paging       | `/^1906\d{6}$/`
Incoming only international   | `/^1(0((19\|66)\d{8}\|50\d{10})\|23\d{12})$/`

## License

This project is licensed under the MIT License.