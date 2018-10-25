var assert = require('assert');
var hbase = require('hbase');
var families = ['f', 'd'];
var schema = [];

families.forEach(function(family) {
   schema.push({
   name: family
 })
});

console.log('coming----------');

hbase({ host: 'localhost', port: 8080 })
  .table('agg_exchanges_external' )
      .create({
        ColumnSchema: schema
      }, function(err, success){
          if(success){
                  console.log('created!!!');
          }
          if(err){
                  console.log(err);
          }
  });
