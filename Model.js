//Model 

model = {
    router: {
        currentPage: 'homePage',
    },
    main: {
        playerName: ''                         //onChange check if player exists then update selectedPlayer and generate player object in db
    },
    globals: {
        selectedPlayer: '',                    //populate with model.inputFields.main.playerName, manipulte with <- -> statspage
        grabGameMode() {
            let arr = model.gameModes.mode
            arr.forEach(el => {
                return console.log(el)
            });
        },
        grabPlayers() {
            let index = model.data.players
            for (key in index) {
                return console.log(index[key])
            }
        },
    },
    gameInput: {
    },
    gameModes: {
        mode: ['Practice', 'Normal']         //++ -- on <- ->  buttons
    },
    statistics: {
        type: ['Top5', 'Graph'],
    },

    data: {
        leaderboard: { List: [] },
        players: [
            {
                playerId: 1,
                playerName: 'Adrian',
                gamesPlayed: {
                    Normal: [{ date: '12/08/21', score: 18 }, { date: '12/08/21', score: 17 },],             // top 5 er fem første i liste
                    Practice: []
                },
            },
            {
                playerId: 2,
                playerName: 'Asbjorn',
                gamesPlayed: {
                    Normal: [],
                    Practice: []
                },
            }
        ]
    }
};
