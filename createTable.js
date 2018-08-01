var assert = require('assert');
var hbase = require('hbase');
 
console.log('coming----------');

hbase({ host: 'localhost', port: 8080 })
  .table('my_table' )
      .create('my_column_family', function(err, success){
   	  if(success){
		  console.log('created!!!');
	  } 
	  if(err){
		  console.log(err);
	  }
  });
