SET NAMES UTF8;
DROP DATABASE IF EXISTS cake;
CREATE DATABASE cake CHARSET=UTF8;
USE cake;

-- #用户信息
CREATE TABLE cake_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),      
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);


/****首页轮播广告商品****/
CREATE TABLE cake_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/**用户信息**/
INSERT INTO cake_user VALUES
(NULL, '小明', '123456', 'ming@qq.com', '13501234567','丁伟', '1'),
(NULL, '小红', '123456', 'hong@qq.com', '13501234568','林当', '1'),
(NULL, '小绿', '123456', 'lv@qq.com', '13501234569', '窦志强', '1'),
(NULL, '小强', '123456', '强@qq.com', '13501234560', '秦小雅', '0');