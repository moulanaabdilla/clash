/**
 * Dark Spells model
 */
const darkSpells = [
        {
            id: 0,
            unit: "poison",
            name: "Poison",
            folder: "troops/darkSpells",
            cost: [0,95,110,125,140],
            lvls: [0,1,2,3,4],
            lvl: 0,
            time: 900,
            space: 1,
            amount: 0
        },
        {
            id: 1,
            unit: "earthquake",
            name: "Earthquake",
            folder: "troops/darkSpells",
            cost: [0,125,140,160,180],
            lvls: [0,1,2,3,4],
            lvl: 0,
            time: 900,
            space: 1,
            amount: 0
        },
        {
            id: 2,
            unit: "haste",
            name: "Haste",
            folder: "troops/darkSpells",
            cost: [0,80,85,90,95],
            lvls: [0,1,2,3,4],
            lvl: 0,
            time: 900,
            space: 1,
            amount: 0
        }
];

export default darkSpells;