var HBase = require('hbase-client');
 
var client = HBase.create({
  zookeeperHosts: [
    '127.0.0.1:2181' // only local zookeeper
  ],
  zookeeperRoot: '/home/hduser_/hbase-1.2.6.1',
});

client.deleteRow('my_table', 'my_row', function (err) {
  console.log(err);
});
