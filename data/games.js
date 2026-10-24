/* data/games.js */
const GAMES_DATA = [
    {
        "name": "Stickman Hook",
        "path": "games/Stickmanhook/index.html",
        "desc": "Swing through levels on a physics rope and land each jump without falling.",
        "thumb": "games/Stickmanhook/unnamed.jpeg",
        "engine": "html5",
        "section": "Platform"
    },
    {
        "name": "Worlds Hardest Game 2",
        "path": "games/worlds-hardest-game-2/index.html",
        "desc": "Guide a block past patrols, collect coins, and finish rooms that punish a single mistake.",
        "thumb": "games/worlds-hardest-game-2/the-worlds-hardest-game-2.jpg",
        "engine": "html5",
        "section": "Puzzle"
    },
    {
        "name": "Crossy Road",
        "path": "games/CrossyRoad/index.html",
        "desc": "Hop across roads, rivers, and rails. One mistimed step ends the run.",
        "thumb": "games/CrossyRoad/crossyroad.png",
        "engine": "Three.js",
        "section": "Runners",
        "featured": true
    },
    {
        "name": "Bitlife",
        "path": "games/Bitlife/index.html",
        "desc": "Steer a life from birth to death through work, family, crime, and luck.",
        "thumb": "games/Bitlife/logo.png",
        "engine": "Unity",
        "section": "Arcade"
    },
    {
        "name": "Drive Mad",
        "path": "games/DriveMad/index.html",
        "desc": "Balance a buggy over ramps and gaps without tipping the run.",
        "thumb": "games/DriveMad/logo.jpeg",
        "engine": "Emscripten",
        "section": "Action"
    },
    {
        "name": "Five Nights At Freddy",
        "path": "games/fnaf/index.html",
        "desc": "Watch cameras, ration power, and last until 6 AM in Freddy Fazbear's Pizza.",
        "thumb": "games/fnaf/logo.jpg",
        "engine": "Clickteam Fusion",
        "section": "Horror"
    },
    {
        "name": "Five Nights At Freddy 2",
        "path": "games/fnaf2/index.html",
        "desc": "Use the mask, light, and cameras against a new set of animatronics.",
        "thumb": "games/fnaf2/logo.jpg",
        "engine": "Clickteam Fusion",
        "section": "Horror"
    },
    {
        "name": "Five Nights At Freddy 3",
        "path": "games/fnaf3/index.html",
        "desc": "Keep ventilation running and lure threats away inside Fazbear's Fright.",
        "thumb": "games/fnaf3/logo.webp",
        "engine": "Clickteam Fusion",
        "section": "Horror"
    },
    {
        "name": "Five Nights At Freddy 4",
        "path": "games/fnaf4/index.html",
        "desc": "Listen at the bedroom doors and flash the dark before something steps in.",
        "thumb": "games/fnaf4/logo.webp",
        "engine": "Clickteam Fusion",
        "section": "Horror"
    },
    {
        "name": "Cookie Clicker",
        "path": "games/cookie-clicker/index.html",
        "desc": "Bake, buy, and automate a cookie empire that never stops growing.",
        "thumb": "games/cookie-clicker/cookie1.jpeg",
        "engine": "html5",
        "section": "Arcade",
        "featured": true
    },
    {
        "name": "Block Blast",
        "path": "games/blockblast/index.html",
        "desc": "Fit shapes on a grid and clear lines before the board fills.",
        "thumb": "games/blockblast/thumb.jpeg",
        "engine": "Unity",
        "section": "Puzzle"
    },
    {
        "name": "Baskeball Stars",
        "path": "games/basketball-stars/index.html",
        "desc": "One-on-one street ball: steal, block, and finish at the rim.",
        "thumb": "games/basketball-stars/assets/images/basketball-stars.png",
        "engine": "CreateJS",
        "section": "Sports"
    },
    {
        "name": "10 Minutes Till Dawn",
        "path": "games/10-minutes-till-dawn/index.html",
        "desc": "Survive ten minutes of monster waves by stacking weapons and upgrades.",
        "thumb": "games/10-minutes-till-dawn/media.png",
        "engine": "Unity",
        "section": "Action"
    },
    {
        "name": "Backrooms",
        "path": "games/backrooms/index.html",
        "desc": "Wander yellow rooms that never end and try to leave before something finds you.",
        "thumb": "games/backrooms/img/splash.jpg",
        "engine": "Unity",
        "section": "Horror"
    },
    {
        "name": "Among Us",
        "path": "games/among-us/index.html",
        "desc": "Finish tasks, call meetings, and hunt the impostor — or become one.",
        "thumb": "games/among-us/red.png",
        "engine": "Construct 3",
        "section": "Arcade"
    },
    {
        "name": "Mario",
        "path": "games/mario/index.html",
        "desc": "Run, jump, and stomp through a compact NES-style Mario set.",
        "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof8EmFdL8aQ9ZSRzuEXdfbuPIhCQaPMRiVXjU5zW9OQ&s=10",
        "engine": "FullScreenMario",
        "section": "Platform"
    },
    {
        "name": "Paper.io 2",
        "path": "games/paperio2/index.html",
        "desc": "Trail a line, close a loop, and take the map without getting cut off.",
        "thumb": "games/paperio2/images/icon512.png",
        "engine": "html5",
        "section": "Arcade"
    },
    {
        "name": "Slope",
        "path": "games/slope/index.html",
        "desc": "Steer a ball down a steep, speeding track and miss every hole.",
        "thumb": "games/slope/slope4.jpeg",
        "engine": "Unity",
        "section": "Runners",
        "featured": true
    },
    {
        "name": "Super Mario 64",
        "path": "games/sm64/index.html",
        "desc": "Explore Peach's castle, collect stars, and take the fight to Bowser.",
        "thumb": "games/sm64/logo.png",
        "engine": "Emscripten",
        "section": "Platform",
        "featured": true
    },
    {
        "name": "Soccer Random",
        "path": "games/soccerrandom/index.html",
        "desc": "Two-button soccer with wild physics, weather, and ragdoll finishes.",
        "thumb": "games/soccerrandom/image.png",
        "engine": "Construct 3",
        "section": "Sports"
    },
    {
        "name": "Stick War",
        "path": "games/stickwar/index.html",
        "desc": "Gather gold, train stick soldiers, and push across a 2D battlefield.",
        "thumb": "games/stickwar/stickwar.jpg",
        "engine": "Ruffle",
        "section": "Action"
    },
    {
        "name": "Temple Run 2",
        "path": "games/temple-run-2/index.html",
        "desc": "Sprint through ruins, jump traps, and keep the idol run alive.",
        "thumb": "games/temple-run-2/img/cover.png",
        "engine": "Babylon.js",
        "section": "Runners"
    },
    {
        "name": "Wordle",
        "path": "games/wordle/index.html",
        "desc": "Guess the five-letter word in six tries using color clues.",
        "thumb": "games/wordle/img/logo_512x512.png",
        "engine": "html5",
        "section": "Puzzle"
    },
    {
        "name": "Bloons TD 2",
        "path": "games/bloonstd2/index.html",
        "desc": "Place monkey towers and pop every bloon before it leaks.",
        "thumb": "games/bloonstd2/bloonstd2.png",
        "engine": "Ruffle",
        "section": "Arcade"
    },
    {
        "name": "Bloxorz",
        "path": "games/bloxors/index.html",
        "desc": "Roll a block onto the hole without tipping off the tiles.",
        "thumb": "games/bloxors/title.png",
        "engine": "Ruffle",
        "section": "Puzzle"
    },
    {
        "name": "Crazy Cattle 3D",
        "path": "games/crazy_cattle/index.html",
        "desc": "Ram other sheep around a physics arena until you are the last standing.",
        "thumb": "games/crazy_cattle/CrazyCattle3D.png",
        "engine": "Godot",
        "section": "Action"
    },
    {
        "name": "CS:GO Clicker",
        "path": "games/csgo-clicker/index.html",
        "desc": "Open cases, stack skins, and idle your way through a loadout.",
        "thumb": "games/csgo-clicker/images/case1.png",
        "engine": "html5",
        "section": "Arcade"
    },
    {
        "name": "The Impossible Quiz",
        "path": "games/impossiblequiz/index.html",
        "desc": "Trick questions, fake buttons, and answers that punish rushing.",
        "thumb": "games/impossiblequiz/impossiblequiz.png",
        "engine": "Ruffle",
        "section": "Puzzle"
    },
    {
        "name": "Krunker",
        "path": "games/krunker/index.html",
        "desc": "Class-based arena FPS built for short, fast browser matches.",
        "thumb": "games/krunker/img/krunker-io.jpg",
        "engine": "html5",
        "section": "Action",
        "featured": true
    },
    {
        "name": "Minecraft",
        "path": "games/minecraft/index.html",
        "desc": "Build, mine, and join Eaglercraft servers in the browser.",
        "thumb": "games/minecraft/splash.jpeg",
        "engine": "Eaglercraft",
        "section": "Arcade"
    },
    {
        "name": "Recoil",
        "path": "games/recoil/index.html",
        "desc": "Online action match launched from the included game page.",
        "thumb": "games/recoil/cover.jpg",
        "engine": "External Embed",
        "section": "Action"
    },
    {
        "name": "Retro Bowl",
        "path": "games/retro-bowl/index.html",
        "desc": "Call plays, manage a roster, and chase a championship in pixel football.",
        "thumb": "games/retro-bowl/img/icon.jpg",
        "engine": "html5",
        "section": "Sports",
        "featured": true
    },
    {
        "name": "SnowBattle.io",
        "path": "games/snowbattle/index.html",
        "desc": "Throw snowballs, grab power-ups, and knock rivals out of the rink.",
        "thumb": "games/snowbattle/img/logo.png",
        "engine": "Unity",
        "section": "Action"
    },
    {
        "name": "Stealing the Diamond",
        "path": "games/stealingthediamond/index.html",
        "desc": "Pick a path through a museum heist that can go very right or very wrong.",
        "thumb": "games/stealingthediamond/stealingthediamond.jpg",
        "engine": "Ruffle",
        "section": "Arcade"
    },
    {
        "name": "SUPERHOT",
        "path": "games/superhot/index.html",
        "desc": "Time moves when you do. Plan each shot, then step into it.",
        "thumb": "games/superhot/hot.jpg",
        "engine": "Unity",
        "section": "Action"
    },
    {
        "name": "Smash Karts",
        "path": "games/smashkarts/index.html",
        "desc": "Kart arenas, pickups, and a short fuse. Last kart standing.",
        "thumb": "games/smashkarts/images/smashkarts.png",
        "engine": "html5",
        "section": "Action"
    },
    {
        "name": "Soundboard",
        "path": "games/soundboard/index.html",
        "desc": "A board of clips. Press a pad, play a sound.",
        "thumb": "games/soundboard/img/mlg.png",
        "engine": "html5",
        "section": "Tools"
    },
    {
        "name": "The Heist",
        "path": "games/theheist/index.html",
        "desc": "A Flash heist game running through Ruffle.",
        "thumb": "games/theheist/theheist.jpg",
        "engine": "Ruffle",
        "section": "Arcade"
    },
    {
        "name": "Vex 6",
        "path": "games/vex6/index.html",
        "desc": "Stick-figure parkour through saws, spikes, and tight jumps.",
        "thumb": "games/vex6/assets/icon.jpeg",
        "engine": "html5",
        "section": "Platform"
    },
    {
        "name": "Volley Random",
        "path": "games/volleyrandom/index.html",
        "desc": "Physics volleyball with courts and players that change every round.",
        "thumb": "games/volleyrandom/splash.png",
        "engine": "Construct 3",
        "section": "Sports"
    },
    {
        "name": "Webretro",
        "path": "games/webretro/index.html",
        "desc": "Load compatible ROMs in a browser emulator.",
        "thumb": "games/webretro/image.png",
        "engine": "Web Emulator",
        "section": "Tools"
    },
    {
        "name": "Retro Emulator",
        "path": "games/retro-emulator/library.html",
        "desc": "Play bundled classics or open your own ROM in EmulatorJS.",
        "thumb": "games/retro-emulator/retro.svg",
        "engine": "EmulatorJS",
        "section": "Tools"
    },
    {
        "name": "1v1.LOL",
        "path": "games/1v1lol/index.html",
        "desc": "Build, shoot, and duel in a third-person arena.",
        "thumb": "games/1v1lol/splash.png",
        "engine": "Unity",
        "section": "Action"
    },
    {
        "name": "2048",
        "path": "games/2048/index.html",
        "desc": "Slide tiles, merge numbers, and try to reach 2048.",
        "thumb": "games/2048/meta/apple-touch-icon.png",
        "engine": "html5",
        "section": "Puzzle"
    },
    {
        "name": "3D Free Kick",
        "path": "games/3dfreekick/index.html",
        "desc": "Aim a free kick, bend it around the wall, and beat the keeper.",
        "thumb": "games/3dfreekick/img/Atlas0.png",
        "engine": "html5",
        "section": "Sports"
    },
    {
        "name": "A Dance of Fire and Ice",
        "path": "games/adofai/index.html",
        "desc": "Tap in time as two planets orbit a track of shifting beats.",
        "thumb": "",
        "engine": "Unity",
        "section": "Arcade"
    },
    {
        "name": "Baldi's Basics",
        "path": "games/baldi/index.html",
        "desc": "Collect notebooks in a school that punishes wrong answers.",
        "thumb": "games/baldi/TemplateData/progressLogo.Dark.png",
        "engine": "Unity",
        "section": "Horror"
    },
    {
        "name": "Basket Random",
        "path": "games/basket-random/index.html",
        "desc": "Two-button basketball with bodies and courts that keep changing.",
        "thumb": "games/basket-random/splash.jpeg",
        "engine": "Construct 3",
        "section": "Sports"
    },
    {
        "name": "Basketball Legends",
        "path": "games/basketball-legends/index.html",
        "desc": "Pick a legend and play tight two-on-two basketball.",
        "thumb": "",
        "engine": "Phaser",
        "section": "Sports"
    },
    {
        "name": "Basket Bros",
        "path": "games/basketbros-io/index.html",
        "desc": "Local or online basketball with exaggerated dunks and blocks.",
        "thumb": "games/basketbros-io/thumb.jpg",
        "engine": "html5",
        "section": "Sports"
    },
    {
        "name": "Boxing Physics 2",
        "path": "games/boxing-physics2/index.html",
        "desc": "Ragdoll boxing where timing a punch matters more than looking pretty.",
        "thumb": "games/boxing-physics2/thumbnail.jpg",
        "engine": "Unity",
        "section": "Sports"
    },
    {
        "name": "Boxing Random",
        "path": "games/boxing-random/index.html",
        "desc": "Two-button boxing with random gloves, rings, and knockouts.",
        "thumb": "games/boxing-random/512x340.jpg",
        "engine": "Construct 3",
        "section": "Sports"
    },
    {
        "name": "Cars Simulator",
        "path": "games/cars-simulator/index.html",
        "desc": "Drive around an open lot and put the cars through their paces.",
        "thumb": "games/cars-simulator/splash.png",
        "engine": "Unity",
        "section": "Arcade"
    },
    {
        "name": "Doge Miner",
        "path": "games/DogeMiner/index.html",
        "desc": "Click for dogecoin, buy miners, and watch the numbers climb.",
        "thumb": "games/DogeMiner/img/dogeminer_300x300.png",
        "engine": "html5",
        "section": "Arcade"
    },
    {
        "name": "Doge Miner 2",
        "path": "games/Dogeminer2/index.html",
        "desc": "The sequel idle mine — more upgrades, more wow.",
        "thumb": "games/Dogeminer2/img/bg/bg-new.jpg",
        "engine": "html5",
        "section": "Arcade"
    },
    {
        "name": "Drift Boss",
        "path": "games/drift/index.html",
        "desc": "Hold to drift, release to straighten, and stay on the track.",
        "thumb": "games/drift/branding/splash1.png",
        "engine": "html5",
        "section": "Runners"
    },
    {
        "name": "Duck Hunter",
        "path": "games/duck-hunter/index.html",
        "desc": "Lead the shot and drop ducks before they leave the screen.",
        "thumb": "games/duck-hunter/loading-logo.png",
        "engine": "Construct 3",
        "section": "Action"
    },
    {
        "name": "Fireboy & Watergirl: Forest Temple",
        "path": "games/FBWG1/index.html",
        "desc": "Move both characters through a temple of fire, water, and switches.",
        "thumb": "games/FBWG1/assets/icon.jpeg",
        "engine": "html5",
        "section": "Platform"
    },
    {
        "name": "Fireboy and Watergirl",
        "path": "games/fireboy_watergirl/index.html",
        "desc": "Co-op puzzle platforming with elemental hazards.",
        "thumb": "games/fireboy_watergirl/res/img/menu_bg.png",
        "engine": "html5",
        "section": "Platform"
    },
    {
        "name": "Fireboy and Watergirl",
        "path": "games/Fireboy-and-Watergirl-main/index.html",
        "desc": "Another build of the temple co-op pair.",
        "thumb": "games/Fireboy-and-Watergirl-main/res/img/door_sprite.png",
        "engine": "html5",
        "section": "Platform"
    },
    {
        "name": "Friday Night Funkin'",
        "path": "games/fnf-w7/index.html",
        "desc": "Hit arrows in time and win a rap battle on stage.",
        "thumb": "games/fnf-w7/favicon.png",
        "engine": "html5",
        "section": "Arcade"
    },
    {
        "name": "Fruit Ninja",
        "path": "games/fruitninja/index.html",
        "desc": "Slice fruit. Miss bombs. Keep the combo going.",
        "thumb": "games/fruitninja/FruitNinjaTeaser.jpg",
        "engine": "Phaser",
        "section": "Arcade"
    },
    {
        "name": "Game Inside a Game",
        "path": "games/game-inside/index.html",
        "desc": "A nested Unity experiment — a game about playing a game.",
        "thumb": "games/game-inside/img/display.png",
        "engine": "Unity",
        "section": "Arcade"
    },
    {
        "name": "Geometry Dash",
        "path": "games/geodash/index.html",
        "desc": "Tap-timed platforming on a rhythm track full of spikes.",
        "thumb": "games/geodash/geoscratchicon.png",
        "engine": "html5",
        "section": "Platform"
    },
    {
        "name": "Getaway Shootout",
        "path": "games/getaway-shootout/index.html",
        "desc": "Race to the getaway car while shooting everyone else off the map.",
        "thumb": "games/getaway-shootout/img/index.jpg",
        "engine": "Unity",
        "section": "Action"
    },
    {
        "name": "Gravity Soccer",
        "path": "games/gravity-soccer/index.html",
        "desc": "Soccer on walls and ceilings. The pitch does not stay still.",
        "thumb": "games/gravity-soccer/splash.png",
        "engine": "Construct 3",
        "section": "Sports"
    },
    {
        "name": "Happy Wheels",
        "path": "games/happy-wheels/index.html",
        "desc": "Ragdoll courses that reward nerve and punish overconfidence.",
        "thumb": "games/happy-wheels/loading.png",
        "engine": "Unity",
        "section": "Action"
    },
    {
        "name": "Head Soccer 2022",
        "path": "games/HeadSoccer2022/index.html",
        "desc": "Head-to-head soccer with oversized headers and specials.",
        "thumb": "games/HeadSoccer2022/icons/loading-logo.png",
        "engine": "Construct 3",
        "section": "Sports"
    },
    {
        "name": "Jetpack Joyride",
        "path": "games/jetpack-joyride/index.html",
        "desc": "Hold to fly, dodge lasers, and grab coins in a lab escape.",
        "thumb": "games/jetpack-joyride/splash.jpg",
        "engine": "Phaser",
        "section": "Runners"
    },
    {
        "name": "Pokémon 2048",
        "path": "games/pokemon/index.html",
        "desc": "2048, but each merge evolves a Pokémon.",
        "thumb": "games/pokemon/2048_files/images/background-pokemon.jpg",
        "engine": "html5",
        "section": "Puzzle"
    },
    {
        "name": "Slope 2",
        "path": "games/slope-2/index.html",
        "desc": "A faster slope run with extra obstacles and tighter turns.",
        "thumb": "games/slope-2/slope-2-logo.png",
        "engine": "Unity",
        "section": "Runners"
    },
    {
        "name": "Subway Surfers Bali",
        "path": "games/subway-surfers-bali/index.html",
        "desc": "Subway Surfers set in Bali.",
        "thumb": "games/subway-surfers-bali/assets/game/board_new_york_tex_mip.png",
        "engine": "html5",
        "section": "Runners"
    },
    {
        "name": "Subway Surfers New York",
        "path": "games/subway-surfers-ny/index.html",
        "desc": "Subway Surfers set in New York.",
        "thumb": "games/subway-surfers-ny/NewYorkIcon.png",
        "engine": "html5",
        "section": "Runners"
    },
    {
        "name": "Subway Surfers San Francisco",
        "path": "games/subway-surfers-sf/index.html",
        "desc": "Subway Surfers set in San Francisco.",
        "thumb": "games/subway-surfers-sf/img/splash.jpg",
        "engine": "Unity",
        "section": "Runners"
    },
    {
        "name": "Suika Game",
        "path": "games/suika-game-main-2/index.html",
        "desc": "Drop fruit, merge matches, and keep the box from overflowing.",
        "thumb": "games/suika-game-main-2/screenshot.png",
        "engine": "html5",
        "section": "Puzzle"
    },
    {
        "name": "Super Mario Bros",
        "path": "games/Super-Mario-Bros-master/index.html",
        "desc": "The original overworld run: pipes, pits, and flagpoles.",
        "thumb": "games/Super-Mario-Bros-master/images/mainTitle.png",
        "engine": "html5",
        "section": "Platform"
    },
    {
        "name": "The Impossible Quiz 2",
        "path": "games/the-impossible-quiz2/index.html",
        "desc": "A second round of trick questions and unfair answers.",
        "thumb": "games/the-impossible-quiz2/impossiblequiz.png",
        "engine": "Ruffle",
        "section": "Puzzle"
    },
    {
        "name": "Tiny Fishing",
        "path": "games/tiny-fishing/index.html",
        "desc": "Drop a line, haul up fish, and upgrade the rod.",
        "thumb": "games/tiny-fishing/thumb.png",
        "engine": "html5",
        "section": "Arcade"
    },
    {
        "name": "Zombie Buster",
        "path": "games/zombie-buster/index.html",
        "desc": "Clear waves of zombies before they reach you.",
        "thumb": "games/zombie-buster/loading-logo.png",
        "engine": "Construct 3",
        "section": "Action"
    }
];