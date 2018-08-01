var hbase = require('hbase');

console.log('coming----------');

hbase({ host: '127.0.0.1', port: 8080 })
    .table('my_table')
    .row('my_row')
    .put('my_column_family:my_column', 'my_value', function (err, success) {
        if (success) {
            console.log('inserted!!!');
        }
        if (err) {
            console.log(err);
        }
    });
