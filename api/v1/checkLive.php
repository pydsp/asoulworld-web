<?php
header("Content-Type: application/json; charset=utf-8");

require_once "../bin/tools.php";
//if(!(checkPost("is_web")&&$_POST['is_web']==1))
//{
//    error_json();
//}

require_once "../bin/RedisInstance.php";
require_once "../bin/MySQLKitCore.php";
require_once "../bin/MySQLKit.php";
require_once "../bin/config.php";
use cycycd\MySQLKit\MySQLKit;
$redis_ley="live_";
$redis = RedisInstance::getInstance();
$result["code"]=0;
global $SQL_USER,$SQL_PASS;
$sql=MySQLKit::getInstance();
$sql->setHUP("localhost",$SQL_USER,$SQL_PASS)->connect();
$sql->setDB("asoulworld_db");
$queryResult=$sql->query("select member,IF(b.type<=>null,0,2) as status,b.type as type
from member_table as a LEFT JOIN (select * from live_calendar WHERE live_time<=>DATE_FORMAT(NOW(),'%Y-%m-%d')) as b on a.member=b.live_member_id");
foreach ($queryResult as $i=> &$res)
{
    $status=$redis->get($redis_ley.$i);
    if($status==1)
    {
        $res['status']=1;
    }
}
echo json_encode($queryResult);

