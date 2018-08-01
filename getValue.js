var hbase = require('hbase');

console.log('coming----------');

hbase({ host: '127.0.0.1', port: 8080 })
    .table('my_table')
    .row('my_row')
    .get('my_column_family:my_column', function (err, cells) {
        if (err) {
            console.log(err);
        }
        if (cells) {
            console.log(cells);
        }
    });
