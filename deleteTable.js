var hbase = require('hbase');

console.log('coming----------');

hbase({ host: '127.0.0.1', port: 8080 })
    .table('my_table')
    .delete(function (error, success) {
	if (error) {
            console.log(error);
        }
        if (success) {
            console.log(success);
        }
    });
