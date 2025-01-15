<?php 
header('Content-Type: application/json');
include 'database.php';
$request = (array) json_decode(file_get_contents('php://input'));
//find out how to send a json object
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        try{
            if(isset($_GET["sort"])){
                switch($_GET["sort"]){
                    case 'lines':
                        define('SORT','lines');
                        break;
                    case 'level':
                        define('SORT','level');
                        break;
                    case 'username':
                        define('SORT','username');
                        break;
                    default:
                        define('SORT','score');
                        break;
                    };
            }else{
                define('SORT','score');
            };
            if(isset($_GET["more"])){
                if(is_numeric($_GET["more"])){
                    $offset=$_GET["more"]*HARDQUERYLIMIT;
                }else{
                    $offset=0;
                };
            }else{
                $offset=0;
            };
            $games=getGames($db_connection, SORT, $offset);
            $outStandingGames=max(getGamesCount($db_connection)-count($games)-$offset,0);
            echo json_encode([
                "result"=>"succeeded",
                "games"=>$games,
                "more"=> $outStandingGames,
            ]);
        }catch(Exception $e){
            echo json_encode([
                "result"=>"failed",
                "message"=>"get: {$e->getMessage()}",
            ]);
        }
        break;
    case 'POST':
        try{
            $player_id = checkPlayer($db_connection, $request["username"],$request["password"]);
            if($player_id===0){
                throw new Exception("password doesn't match");
            }else{
                $game_id=createGame($db_connection, $player_id,$request["lines"],$request["level"],$request["score"]);
                if($game_id){
                    echo json_encode([
                        "result"=>"succeeded",
                        "game_id"=>$game_id
                    ]); 
                }else{
                    throw new Exception("sql error");     
                };
            };
        }catch(Exception $e){
            echo json_encode([
                "result"=>"failed",
                "message"=>"post: {$e->getMessage()}",
            ]);
        };
        break;
    case 'DELETE':
        try{
            $player_id = checkPlayer($db_connection, $request['username'],$request["password"]);
            if($player_id===0){
                throw new Exception("password doesn't match");
            }else{
                if(deleteGame($db_connection, $request["id"],$player_id)){
                    $responseArray=[
                        "result"=>"succeeded",
                        "delete game with id"=>$request["id"]
                    ];
                    if(deletePlayer($db_connection, $player_id)){
                        $responseArray["deleted player with id"]=$player_id;
                    };
                    echo json_encode($responseArray);
                }else{
                    throw new Exception("sql error");                    
                };
            };
        }catch(Exception $e){
            echo json_encode([
                "result"=>"failed",
                "message"=>"delete: {$e->getMessage()}",
            ]);
        };
        break;
    default:
        echo json_encode([
            "result"=>"failed",
            "message"=>"method not read"
        ]);
};




?>