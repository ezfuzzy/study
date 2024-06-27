
SELECT *
FROM 
  (SELECT rest1.*, ROWNUM AS rnum
    FROM
      (SELECT num, writer, title, orgFilename
      FROM BOARD_FILE
      ORDER BY num DESC) rest1)
WHERE rnum BETWEEN 1 AND 5;      

-- startRowNum = 1 + (pageNum - 1) * pageRowCount
-- endRowNum = pageNum * pageRowCount