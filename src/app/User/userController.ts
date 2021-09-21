// https://velog.io/@jkzombie/Typescript-%EC%9D%B5%ED%9E%88%EA%B8%B0-lib : typescript export
import {Request, Response} from 'express'
import { pool } from '../../config/database'

const selectUser  = async function (req: Request, res: Response) {
    const userIdx: number  = Number(req.params.userId);
    const connection: any = await pool.getConnection();
    try {
        const [result] = await connection.query("select * from TestTB");
        return res.send(result);
    } catch (err) {
        console.log(err);
    } finally {
        connection.release();
    }
}

export {selectUser}
