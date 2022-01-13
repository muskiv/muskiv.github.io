show databases;
use muskiv;
show tables;

select * from cars;
select * from cars where year > 2000;
select * from cars where year < 2015;
select * from cars where year in (2008, 2009, 2010);
select * from cars where year = price;

select * from cars where (year < 2014 and model like 'bmw');
select * from cars where (year > 2014 and model like 'audi%');
select * from cars limit 5;
select * from cars order by id desc limit 5;


select avg(price) from cars where model like 'kia';
select avg(price) from cars;
select count(model), model from cars group by model;
select count(model), model from cars group by model order by count(model) desc limit 1;

select * from cars  where model like '_a%a_';
select * from cars  where length(model)=8;

select * from cars where price > (select avg(price) from cars);
