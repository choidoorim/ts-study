import {Request, Response} from 'express'
import { pool } from '../../config/database'

exports.selectUser = async function (req: Request, res: Response) {
    const connection = await pool.getConnection();
    try {
        const [result] = await connection.query("select * from TestTB");
        return res.send(result);
    } catch (err) {
        console.log(err);
    } finally {
        connection.release();
    }
}