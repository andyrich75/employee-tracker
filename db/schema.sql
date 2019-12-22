drop database if exists employeeTracker_db;
create database employeeTracker_db;

use employeeTracker_db;

create table departments (
id int auto_increment,
name varchar(30),
PRIMARY KEY(id)
);


