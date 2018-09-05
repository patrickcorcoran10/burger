drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table burgers(
    id auto_increment not null;
    burger_name varchar(40) not null;
    devoured boolean not null;
    primary key(id);
);
