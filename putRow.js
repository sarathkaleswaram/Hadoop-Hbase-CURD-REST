var hbase = require('hbase');

console.log('coming----------');
var rowkey = 'my_row';
var row = {'f:account' : 'cUq7hRmEvJLCPiebzmg2VjNczsr2Puv3Qg',
'f:genesis_balance' : 100,
'f:ledger_index' : "123",
'd:genesis_index' : '345'
};
hbase({ host: '127.0.0.1', port: 8080 })
.putRow({
    table: 'my_table',
    rowkey: rowkey,
    columns: row
  })
  .nodeify(function(err, resp) {
    console.log(rowkey, err, resp);
  });
