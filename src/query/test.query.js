const QUERY = {
    SELECT_TESTS: 'SELECT * FROM test_table ORDER BY created_at DESC LIMIT 100',
    SELECT_TEST: 'SELECT * FROM test_table WHERE id = ?',
    CREATE_TEST: 'INSERT INTO test_table (first_name, last_name, email, address, diagnosis ,phone, image_url) VALUES (?,?,?,?,?,?,?)',
    UPDATE_TEST: 'UPDATE test_table SET first_name = ?, last_name = ?, email = ?, address = ?, diagnosis = ?, phone = ?, image_url = ? WHERE id = ?',
    DELETE_TEST: 'DELETE FROM test_table WHERE id = ?',
    CREATE_TEST_PROCEDURE: 'CALL create_and_return(?,?,?,?,?,?,?)'
}

export default QUERY;