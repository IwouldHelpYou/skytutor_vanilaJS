const Sequelize = require('sequelize');
// sequelize 패키지는 sequelize 클래스를 외부에 공개하는데 이를 가져온 것

const config = require('../config/config.json')
const {
  username, password, database, host, dialect,
} = config.development;
// config.json 의 정보를 그대로 가져옴

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});
// sequelize 클래스로 sequelize 객체 생성
// 이렇게 정해진 형식대로 설정 정보를 넣어주기만 하면 Sequelize 객체가 생성됨
// (=sequelize 클래스에 데이터베이스 접속에 관한 설정값을 넣고 sequelize 객체를 생성)

// 아까 member.js 에 sequelize 객체 만든 이유?

const Member = require('./member.js') (sequelize, Sequelize.DataTypes);
// member.js 에 있던 함수를 가져옴 (Member 클래스를 리턴하는 함수를 외부에 공개했었지)
// Member 모델은 sequelize 객체를 사용해 초기화하고 이를 통해 DB에 존재하는 Members 테이블인식
// 즉 Member 모델은 Members 테이블과 연동됨. 이를 통해 원하는 작업가능 

const db = {};
db.Member = Member;
// db라는 객체를 만들고 그 안에 Member 모델을 넣어 공개한다
// 다른 테이블이 생기면 새로운 모델이 필요할 수 있으니까?

module.exports = db;