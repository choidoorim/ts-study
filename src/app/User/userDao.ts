async function selectUserDao(connection:any, userIdx: Number) {
    const query: String = `select * from TestTB where idx = ?`;

    const result = await connection.query(query, userIdx);
    console.log(result);
    return result[0];
}

export {selectUserDao}