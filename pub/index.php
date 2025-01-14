<?php 
include 'database.php';



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
                <p class='tbutton'>lines</p>

                <p class='tbutton'>level</p>

                <p class='tbutton active'>score</p>
            </div>
            <ol id='scoreboard'>
                <?php
                    $games=getGames($db_connection);
                    $totalGames=getGamesCount($db_connection);
                    foreach($games as $game):
                ?>
                <li id="game<?php echo $game["game_id"]?>" >
                    <div>
                        <span class="nameEl"><?php echo $game["username"]?></span>
                        <span><?php echo $game["lines"]?></span>
                        <span><?php echo $game["level"]?></span>
                        <span><?php echo $game["score"]?></span>
                    </div>
                </li>
                <?php endforeach;
                if($totalGames>HARDQUERYLIMIT):
                ?>
                    <div id="showMoreGames">
                        see <?php echo $totalGames-HARDQUERYLIMIT?> more
                    </div>
                <?php endif;
                    //use this space for echo testing php stuff
                ?>
            </ol>
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
                    <form method="POST" >
                        <label for="username"><strong>register username:</strong></label>
                        <input type="text" name="username" onkeyup=recordscore() maxlength="20">
                        <br>
                        <label for="username" class="rejectInput">User name cannot be empty</label>
                        <label for="ownerphraseadd"><strong>ownership pass phrase:</strong></label>
                        <input type="password" name="ownerphraseadd" maxlength="20">
                        <br>
                        <label for="ownerphraseadd" class="rejectInput">These words are not accepted</label>
                        <div id="confitwrapper">
                            <div id='confit'>
                                <button class='sbutton' id="yes" onclick=confit(this)>confirm</button>
                                <button class='sbutton' id="no" onclick=confit(this)>cancel</button>
                            </div>
                        </div>
                        <button class='sb button' onclick=music()>Music:<span class='Mstate'>on</span></button>
                        <br>
                    </form>
                </div>
                <div id='setup3'>
                    <h1 id='heading'>Do you wish to delete this entry?</h1>
                    <div id="selectedForDelete"></div>
                    <form method="DELETE" >
                        <label for="ownerphrasedel"><strong>enter ownership pass phrase:</strong></label>
                        <input type="password" name="ownerphrasedel" maxlength="20">
                        <br>
                        <label for="ownerphrasedel" class="rejectInput">These words are not accepted</label>
                        <div id="deleteRecordWrapper">
                            <div id='deleteRecord'>
                                <button class='sbutton' id="delete" onclick=confit(this)>confirm</button>
                                <button class='sbutton' id="cancel" onclick=confit(this)>cancel</button>
                            </div>
                        </div>
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