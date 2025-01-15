-- @block
show tables;

-- @block
select * from Games;

-- @block
select * from Players;

-- @block
delete from Players
where id = 9;

-- @block
create table Players (
    id int primary key AUTO_INCREMENT,
    username varchar(255),
    passphrase varchar(255),
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
alter table Players
drop salt;

-- @block
select
    player_id,
    username,
    `lines`,
    passphrase,
    salt
from Games
right join Players on Players.id=Games.player_id;

-- @block    
select 
        player_id,
        username,
        `lines`,
        level,
        score,
        date
    from Games
    left join Players
    on Players.id=Games.player_id
    order by score asc
    limit 100


