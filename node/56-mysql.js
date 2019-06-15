

var mysql      = require('mysql');
var util = require('util')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
});

connection.connect();

var  sql = 'SELECT * FROM test';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

var  addSql = 'INSERT INTO test(name,date) VALUES(?,?)';
var  addSqlParams = ["haha",new Date()];
//增
connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});


var modSql = 'UPDATE test SET name = ?,date = ? WHERE Id = ?';
var modSqlParams = ["ff", new Date(),2];
//改
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});


var delSql = 'DELETE FROM test where id=6';
//删
connection.query(delSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();