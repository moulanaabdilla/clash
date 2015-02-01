<?php

header('Access-Control-Allow-Origin: *');

echo "[{
	\"type\": \"light\",
	\"capacity\": [20,25,30,35,40,45,50,55,60,75],
	\"lvls\": [1,2,3,4,5,6,7,8,9,10],
	\"lvl\": \"\",
	\"town_hall\": [1,2,3,4,5,6,7,8,9,10],
	\"amount\": [1,2,2,3,3,3,4,4,4,4]
},
{
	\"type\": \"dark\",
	\"capacity\": [40,50,60,70,80,90],
	\"lvls\": [1,2,3,4,5,6],
	\"lvl\": \"\",
	\"town_hall\": [1,2,3,4,5,6,7,8,9,10],
	\"amount\": [0,0,0,0,0,0,1,2,2,2]
},
{
	\"type\": \"spell_factory\",
	\"capacity\": [40,50,60,70,80,90],
	\"lvls\": [1,2,3,4,5,6],
	\"lvl\": \"\",
	\"town_hall\": [1,2,3,4,5,6,7,8,9,10],
	\"amount\": [0,0,0,0,0,0,1,2,2,2]
},
{
	\"type\": \"camps\",
	\"capacity\": [20,30,35,40,45,50,55,60],
	\"lvls\": [1,2,3,4,5,6,7,8],
	\"lvl\": \"\",
	\"town_hall\": [1,2,3,4,5,6,7,8,9,10],
	\"amount\": [1,1,2,2,3,3,4,4,4,4]	
}]";
?>