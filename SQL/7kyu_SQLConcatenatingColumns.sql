-- https://www.codewars.com/kata/sql-concatenating-columns/train/sql

-- Given the table below:

-- ** names table schema **

-- id
-- prefix
-- first
-- last
-- suffix
-- Your task is to use a select statement to return a single column table containing the full title of the person (concatenate all columns together except id), as follows:

-- ** output table schema **

-- title
-- Don't forget to add spaces.

SELECT CONCAT(prefix, ' ', first, ' ', last, ' ', suffix) AS title FROM names

-- OR

SELECT CONCAT_WS(' ', prefix,first,last,suffix) AS title FROM names