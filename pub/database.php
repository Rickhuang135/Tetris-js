<?php 
define('SAFEPHPSELF',filter_input(INPUT_SERVER, 'PHP_SELF',FILTER_SANITIZE_SPECIAL_CHARS));
define('db_User', getenv("db_User"));
define('db_Name', getenv("db_Name"));
define('db_Host', getenv("db_Host"));
define('db_Pass', getenv("db_Pass"));

define('HARDQUERYLIMIT',4);
$db_connection = new mysqli(db_Host,db_User,db_Pass,db_Name);

if($db_connection->connect_error){
    die('Connection failed'. $db_connection->connect_error);
};

function createPlayer($connection, $username, $password){
    $hashedpassword=password_hash("$password",PASSWORD_DEFAULT);

    $postUser="INSERT into 
    Players (username,passphrase)
    values
    ('{$username}', '{$hashedpassword}')
    ";
    return mysqli_query($connection,$postUser);
};

function checkPlayer($connection, $username, $presentedPassword){
    //get player id and password to check against presentedPassword
    $foundUserObject = mysqli_query($connection, "
    select id, username, passphrase from Players
    where username = '{$username}'
    ");
    $foundUser=$foundUserObject->fetch_assoc();
    if(empty($foundUser)){
        if(createPlayer($connection, $username, $presentedPassword)){
            return checkPlayer($connection, $username, $presentedPassword);
        }else{
            return 0;
        };
    }else{
        if(password_verify($presentedPassword,$foundUser["passphrase"])){
            return $foundUser["id"];
        }else{
            return 0;
        };
    };
};

function createGame($connection, $player_id,$lines,$level,$score){
    if(mysqli_query($connection,"insert into Games (player_id, `lines`, level, score)
    values
        ('{$player_id}','{$lines}','{$level}','{$score}')
    ")){
        return mysqli_fetch_all(mysqli_query($connection,"
        select id from Games
        where player_id = {$player_id}
        order by date desc
        "), MYSQLI_ASSOC)[0]['id'];
    }else{
        return 0;
    };
};

function deleteGame($connection, $game_id, $player_id){
    return mysqli_query($connection, "
        delete from Games
        where id = '{$game_id}' 
        and player_id = '{$player_id}'
    ");
};

function getPlayers($connection){
    $selectPlayers=mysqli_query($connection,'select * from Players');
    return mysqli_fetch_all($selectPlayers, MYSQLI_ASSOC);
};

function deletePlayer($connection, $user_id){
        $count = mysqli_fetch_all(mysqli_query($connection, "
        select count(*) from Games
        where player_id = {$user_id}
        "), MYSQLI_ASSOC)[0]["count(*)"];
        if($count === '0'){
            return mysqli_query($connection,"
            delete from Players 
            where id = '{$user_id}'
            ");
        }else{
            return 0;
        }
};

function getGames($connection, $order='score', $offset = 0, $limit=HARDQUERYLIMIT){
    $selectGames=mysqli_query($connection,"
    select 
        player_id,
        Games.id as game_id,
        username,
        `lines`,
        level,
        score,
        date
    from Games
    left join Players
    on Players.id=Games.player_id
    order by `{$order}` desc
    limit {$limit} offset {$offset}
    ");
    return mysqli_fetch_all($selectGames, MYSQLI_ASSOC);
};

function getGamesCount($connection){
    return mysqli_fetch_all(mysqli_query($connection, "
        select count(*) from Games
    "), MYSQLI_ASSOC)[0]["count(*)"];
};


if($_SERVER["PHP_SELF"]=="/database.php"){

};



// createGame(1,1,1,120,$db_connection);

// echo "<br>";
// echo password_verify("2",$hashedpassword);


?>