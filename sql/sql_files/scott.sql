CREATE TABLE board_cafe_comment (
  num NUMBER PRIMARY KEY,
  writer VARCHAR2(100),
  content VARCHAR2(500),
  target_id VARCHAR2(100),
  ref_group NUMBER,
  comment_group NUMBER,
  deleted CHAR(3) DEFAULT 'no',
  regdate DATE
);

CREATE SEQUENCE board_cafe_comment_seq;

SELECT *
FROM all_sequences
WHERE sequence_name = 'board_cafe_comment_seq';