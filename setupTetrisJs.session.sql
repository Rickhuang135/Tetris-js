-- @block
show tables;

-- @block
select * from Games;

-- @block
drop table Games;

-- @block
create table Players (
    id int primary key AUTO_INCREMENT,
    username varchar(255),
    passphrase varchar(255),
    salt varchar(255),
    created datetime not null default CURRENT_TIMESTAMP
);

-- @block
create table Games (
    id int primary key AUTO_INCREMENT,
    player_id int,
    `lines` int,
    level int,
    score int,
    date datetime not null default CURRENT_TIMESTAMP,
    foreign key (player_id) references Players(id)
);

-- @block
alter table Games
modify `lines` int after player_id;



-- @block
select
    player_id,
    username,
    `lines`,
    passphrase,
    salt
from Games
right join Players on Players.id=Games.player_id;