const fs = require('fs');
const mysql = require('mysql');
const csv = require('fast-csv');
let stream = fs.createReadStream('user.csv');
let generator = require('generate-password');
let myData = [];
let csvStream = csv
	.parse()
	.on("data", function (data) {
		pass = generator.generate({
			length: 10,
			numbers: true
		});
		myData.push(data);
		console.log(data);
		console.log(data + pass);
	})
	.on("end", function () {
		//myData.shift();

		// create a new connection to the database
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'mui',
			password: 'muiang@2332',
			database: 'mydb'
		});

		// open the connection
		connection.connect((error) => {
			if (error) {
				console.error(error);
			} else {
				let query = 'INSERT INTO users (email) VALUES ?';
				//console.log([myData].toString().replace('],');
				connection.query(query, [myData], (error, response) => {
					console.log(error || response);

				});
				
				connection.query('UPDATE mydb.users SET password = (SELECT SUBSTRING(MD5(RAND()) FROM 1 FOR 6 )) WHERE password is null;')
				//const today = new Date()
				//console.log(today.toDateString())
				connection.query('UPDATE mydb.users SET createdAt = "10" WHERE createdAt is null;')
				connection.query('SELECT * from users', function(err, rows, fields){
					if (err)
					{
						console.log("Querying error");
					}
					else
					{
						console.log(rows);
					}
					connection.end();
				});
		
			};
		}


		);
	});

stream.pipe(csvStream);
