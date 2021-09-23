import {pool} from "../../config/database";
import * as userDao from "./userDao";

const selectUser: Function = async function (userIdx: Number) {
    const connection: any = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const result = await userDao.selectUserDao(connection, userIdx);
        await connection.commit();

        return result;
    } catch (err) {
        await connection.rollback();
        console.log(err);
    } finally {
        connection.release();
    }
}

export {selectUser}