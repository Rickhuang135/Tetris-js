<?php 
define('db_User', getenv("db_User"));
define('db_Name', getenv("db_Name"));
define('db_Host', getenv("db_Host"));
define('db_Pass', getenv("db_Pass"));

$db_connection = new mysqli(db_Host,db_User,db_Pass,db_Name);

if($db_connection->connect_error){
    die('Connection failed'. $db_connection->connect_error);
};

if(isset($_POST["submit"])){
    echo "submit";
    // go to database 
    // check if the user name exist
    // if doesn't exist, create new user with hashed password
    // if does exist, check if password matches, then save or return error
    $destination=htmlspecialchars($_SERVER['PHP_SELF']);
    header("Location: {$destination}");
};

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cetris</title>
    <link rel="stylesheet" href="game.css">
</head>
<body>
    <audio id="Theme" loop>
        <source src="./audio/soundtrack.mp3" type="audio/mp3">
    </audio>
    <div id="sbody">
        <div id='leftpannel'>
            <h2>Leader board</h2>
            <div id='namescore'>
                <p id='wp'>name</p>
                <p onclick=sortusers(1) class='tbutton'>lines</p>
                <p onclick=sortusers(2) class='tbutton'>level</p>
                <p onclick=sortusers(3) class='tbutton active'>score</p>
            </div>
            <ol id='scoreboard'></ol>
            <div id="Tools">
                <h3>Newtons:<span>click/F</span></h3>
                <div onclick=Newton.que()></div>
                <h3>Missles:<span>click/D</span></h3>
                <div onclick=Bomb.que()></div>
                <div onclick=Bomb.que()></div>
                <div onclick=Bomb.que()></div>
                <div onclick=Bomb.que()></div>
            </div>
        </div>
        <div id='centerpannel'>
            <div id="gameScreen"></div>
            <div id="hitbox"></div>
            <div id="cs">
                <div id='setup1'>
                    <h1 id='heading'>Cetris</h1>
                    <h4>5 block tetris</h4>
                    <div id='spacing'>
                        <button class='reset button' onclick=endgame()>reset game</button>
                    </div>
                    <button class='sb button' onclick=music()>Music:<span class='Mstate'>on</span></button>
                    <br>
                    <button class='play button' onclick=Dabutton()>begin</button>
                </div>
                <div id='setup2'>
                    <h1 id='heading'>Game Over</h1>
                    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="POST" >
                        <label for="username"><strong>register username:</strong></label>
                        <input type="text" placeholder="null" name="username" onkeyup=recordscore() maxlength="20">
                        <br>
                        <label for="ownerphrase"><strong>ownership pass phrase:</strong></label>
                        <input type="password" name="ownerphrase" maxlength="20">
                        <div id="confitwrapper">
                            <div id='confit'>
                                <input type="submit" class='sbutton' id="yes" value="confirm" name="submit"/>
                                <button class='sbutton' id="no" onclick=confit(this)>cancel</button>
                            </div>
                        </div>
                        <button class='sb button' onclick=music()>Music:<span class='Mstate'>on</span></button>
                        <br>
                    </form>
                </div>
            </div>
        </div>
        <div id='rightpannel'>
            <div id='score'>
                <h1>Score: <br> <span id='changer'>0</span></h1>
            </div>
            <div>
                <h1>Lines: <br> <span id='line'>0</span></h1>
            </div>
            <div id='levelout'>
                <h1>Level: <br> <span id="levelin">0</span><span id='levelup' onclick=addlevel()>^</span></h1>
            </div>
            <div>
                <h1 id='nextword'>Begin</h1>
            </div>
            <div onclick=Dabutton() id="button">
                <div id='buttonDisplay'></div>
            </div>
            <div id='nutton'></div>
        </div>
    </div>
    <footer>
        <p id="foot" onclick=hide()> Hide <span id="arrow">^</span></p>
    </footer>
    <script src="game.js" defer></script>
</body>
</html>