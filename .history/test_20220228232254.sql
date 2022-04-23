create database QLSV
ON PRIMARY
(
  name = QLSV_DATA,
  filename = 'đường dẫn có đuôi là mdf',
  size = 10MB,
  maxsize = 50MB,
  filegrowth = 20%
)
LOG ON
(
  name = QLSV_log,
  filename = 'đường dẫn có đuôi là ldf',
  size = 3MB,
  maxsize = 10MB,
  filegrowth = 10%
)