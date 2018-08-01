var hbase = require('hbase');

console.log('coming----------');

hbase({ host: '127.0.0.1', port: 8080 })
    .table('my_table')
    .scan({
        startRow: 'my_row',
        maxVersions: 1
    }, function (err, rows) {
        if (err) {
            console.log(err);
        }
        if (rows) {
            console.log(rows);
        }
    });
