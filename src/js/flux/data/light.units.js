/**
 * Light Units model
 */
const lightUnits = [
{
    id: 0,
    unit: "barbarian",
    name: "Barbarian",
    folder: "troops/light/barbarian",
    cost: [0, 25,40,60,100,150,200,250],
    lvls: [0, 1,2,3,4,5,6,7],
    lvl: 0,
    time: 20,
    space: 1,
    amount: 0
},
{
    id: 1,
    unit: "archer",
    name: "Archer",
    folder: "troops/light/archer",
    cost: [0, 50,80,120,160,300,400,500],
    lvls: [0, 1,2,3,4,5,6,7],
    lvl: 0,
    time: 25,
    space: 1,
    amount: 0
},
{
    id: 2,
    unit: "goblin",
    name: "Goblin",
    folder: "troops/light/goblin",
    cost: [0, 25,40,60,80,100,150],
    lvls: [0, 1,2,3,4,5,6],
    lvl: 0,
    time: 30,
    space: 1,
    amount: 0
},
{
    id: 3,
    unit: "giant",
    name: "Giant",
    folder: "troops/light/giant",
    cost: [0, 250,750,1250,1750,2250,3000,3500],
    lvls: [0, 1,2,3,4,5,6,7],
    lvl: 0,
    time: 120,
    space: 5,
    amount: 0
},
{
    id: 4,
    unit: "wallbreaker",
    name: "Wall Breaker",
    folder: "troops/light/wallbreaker",
    cost: [0, 1000,1500,2000,2500,3000,3500],
    lvls: [0, 1,2,3,4,5,6],
    lvl: 0,
    time: 120,
    space: 2,
    amount: 0
},
{
    id: 5,
    unit: "balloon",
    name: "Balloon",
    folder: "troops/light/balloon",
    cost: [0, 2000,2500,3000,3500,4000,4500],
    lvls: [0, 1,2,3,4,5,6],
    lvl: 0,
    time: 480,
    space: 5,
    amount: 0
},
{
    id: 6,
    unit: "wizard",
    name: "Wizard",
    folder: "troops/light/wizard",
    cost: [0, 1500,2000,2500,3000,3500,4000],
    lvls: [0, 1,2,3,4,5,6],
    lvl: 0,
    time: 480,
    space: 4,
    amount: 0
},
{
    id: 7,
    unit: "healer",
    name: "Healer",
    folder: "troops/light/healer",
    cost: [0, 5000,6000,8000,10000],
    lvls: [0, 1,2,3,4],
    lvl: 0,
    time: 900,
    space: 14,
    amount: 0
},
{
    id: 8,
    unit: "dragon",
    name: "Dragon",
    folder: "troops/light/dragon",
    cost: [0, 25000,29000,33000,37000, 42000],
    lvls: [0, 1,2,3,4,5],
    lvl: 0,
    time: 1800,
    space: 20,
    amount: 0
},
{
    id: 9,
    unit: "pekka",
    name: "P.E.K.K.A.",
    folder: "troops/light/pekka",
    cost: [0, 28000,32000,36000,40000,45000],
    lvls: [0, 1,2,3,4,5],
    lvl: 0,
    time: 2700,
    space: 25,
    amount: 0
}
];

export default lightUnits;