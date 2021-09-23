// https://velog.io/@jkzombie/Typescript-%EC%9D%B5%ED%9E%88%EA%B8%B0-lib : typescript export
import {Request, Response} from 'express'
import * as userProvider from './userService'

const selectUser  = async function (req: Request, res: Response) {
    const userIdx: number  = Number(req.params.userId);
    const selectUserResult: String[] = await userProvider.selectUser(userIdx);

    return res.send(selectUserResult);
}

export {selectUser}
