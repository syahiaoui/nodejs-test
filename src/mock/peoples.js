exports.peoples = [{
        name: 'Harold Patton',
        animals: [{ name: 'Bearded Dragon' },
            { name: 'Chicken' },
            { name: 'Sand Cat' },
            { name: 'Hedgehog' },
            { name: 'Collared Lemur' },
            { name: 'Frogmouth' },
            { name: 'Raccoon dog' },
            { name: 'Shortfin Mako Shark' }
        ]
    }, {
        name: 'Millie Lapini',
        animals: [{ name: 'Bearded Dragon' },
            { name: 'Peafowl' },
            { name: 'Aardvark' },
            { name: 'Cows' },
            { name: 'Crane Fly' },
            { name: 'Rock Hyrax' },
            { name: 'Gerbils' },
            { name: 'Brown Bear' }
        ]
    },
    {
        name: 'Lillian Calamandrei',
        animals: [{ name: 'Rats' },
            { name: 'Macaw' },
            { name: 'Gazelle' },
            { name: 'Gazelle' },
            { name: 'Alpaca' },
            { name: 'Snakes' },
            { name: 'Yellowjacket' },
            { name: 'Stickleback' }
        ]
    }
];

exports.expectedResult = [{
        "name": "Harold Patton",
        "animals": [{ "name": "Frogmouth" }]
    },
    {
        "name": "Millie Lapini",
        "animals": [{ "name": "Brown Bear" }]
    }
];

exports.removedAnimals = {
    name: 'Lillian Calamandrei',
    animals: [{ name: 'Rats' },
        { name: 'Macaw' },
        { name: 'Gazelle' },
        { name: 'Gazelle' },
        { name: 'Alpaca' },
        { name: 'Snakes' },
        { name: 'Yellowjacket' },
        { name: 'Stickleback' }
    ]
};

exports.accumulatoWithNoOptions = [
    { "name": "Harold Patton", "animals": [{ "name": "Frogmouth" }] },
    {
        "name": "Millie Lapini",
        "animals": [{ "name": "Brown Bear" }]
    },
    {
        "name": "Lillian Calamandrei",
        "animals": [{ "name": "Rats" },
            { "name": "Macaw" }, { "name": "Gazelle" }, { "name": "Gazelle" },
            { "name": "Alpaca" }, { "name": "Snakes" }, { "name": "Yellowjacket" },
            { "name": "Stickleback" }
        ]
    }
]