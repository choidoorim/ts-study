import mysql from 'mysql2/promise'

export const pool : mysql.Pool = mysql.createPool({
    connectionLimit: 10,
    host: 'alvin-server-db.c0oxos7bxraw.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'a8856018',
    database: 'Alvin_Server_RDS'
});