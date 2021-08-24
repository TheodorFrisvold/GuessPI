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
            let arr = model.GameModes.mode
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
    GameModes: {
      mode: ['Practice', 'Normal']         //++ -- on <- ->  buttons
    },
    statistics: {
        type: ['Top5', 'Graph'],
    },

    data: {
        players: [
            {
                playerId: 1,
                playerName: 'Adrian',
                HighScores: {
                    Normal: ['date', 'score'],
                    Practice: ['date', 'score']
                },
                gamesPlayed: {
                    Normal: [],
                    Practice: []
                }
            },
            {
                playerId: 2,
                playerName: 'Asbjorn',
                HighScores: {
                    Normal: ['date', 'score'],
                    Practice: ['date', 'score']
                },
                gamesPlayed: {
                    Normal: [],
                    Practice: []
                },
            }
        ]
    }

};
