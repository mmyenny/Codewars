-- https://www.codewars.com/kata/easy-sql-convert-to-hexadecimal/train/sql

-- to hexYou have access to a table of monsters as follows:

-- ** monsters table schema **

-- id
-- name
-- legs
-- arms
-- characteristics
-- Your task is to turn the numeric columns (arms, legs) into equivalent hexadecimal values.

-- ** output table schema **

-- legs
-- arms

SELECT to_hex(arms) AS arms, to_hex(legs) AS legs FROM monsters