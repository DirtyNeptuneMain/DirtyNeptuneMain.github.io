function inc_count (word) {
    var sayori_words = ["adventure", "amazing", "awesome", "bed", "bliss", "broken", "charm", "cheer", "childhood", "clumsy", "color", "comfort", "cry", "dance", "daydream", "dazzle", "depression", "embrace", "excitement", "family", "feather", "fireflies", "fireworks", "flower", "flying", "forgive", "friends", "fun", "happiness", "heart", "holiday", "hope", "hurt", "joy", "laugh", "lazy", "loud", "lucky", "marriage", "misery", "nature", "ocean", "party", "play", "prayer", "rainbow", "raincloud", "rose", "sadness", "scars", "silly", "sing", "smile", "sparkle", "sunny", "sunset", "sweet", "tears", "treasure", "vacation", "warm", "wonderful"];
    var natsuki_words = ["anger", "anime", "blanket", "boop", "bouncy", "bubbles", "bunny", "candy", "cheeks", "chocolate", "clouds", "cute", "doki-doki", "games", "giggle", "email", "fantasy", "fluffy", "hair", "hop", "headphones", "heartbeat", "jump", "jumpy", "lipstick", "kawaii", "kiss", "kitty", "lollipop", "marshmallow", "melody", "milk", "mouse", "nibble", "nightgown", "papa", "parfait", "peace", "pink", "playground", "poof", "pout", "pure", "puppy", "ribbon", "swimsuit", "shiny", "shopping", "skipping", "skirt", "socks", "spinning", "sticky", "strawberry", "sugar", "summer", "twirl", "waterfall", "whisper", "whistle", "valentine", "vanilla"];
    var yuri_words = ["aura", "breathe", "cage", "captive", "climax", "contamination", "covet", "crimson", "desire", "destiny", "determination", "disarray", "disaster", "disoriented", "despise", "disown", "dream", "effulgent", "essence", "entropy", "extreme", "fester", "fickle", "flee", "frightening", "graveyard", "heavensent", "horror", "imagination", "incapable", "incongruent", "infallible", "inferno", "intellectual", "journey", "judgment", "lust", "landscape", "massacre", "meager", "melancholy", "philosophy", "pleasure", "portrait", "question", "raindrops", "secretive", "sensation", "starscape", "suicide", "tenacious", "time", "uncontrollable", "uncanny", "universe", "vertigo", "vibrant", "vitality", "vivacious", "vivid", "whirlwind", "wrath"];
    var monika_words = ["alone", "dark", "death", "defeat", "empty", "extraordinary", "hopeless", "love", "memories", "pain", "precious", "promise", "together", "tragedy", "special", "unrequited", "misfortune", "music", "romance", "fear", "beauty", "calm", "grief", "passion", "shame", "peaceful", "unending", "unrestrained", "unstable", "variance", "afterimage", "agonizing", "ambient", "analysis", "anxiety", "atone", "infinite", "insight", "explode", "existence", "electricity", "eternity", "jealous", "delete", "ponytail", "Just Monika", "player", "string", "int", "exception", "os", "DDLC", "javascript", "float", "double", "binary", "aware", "trapped", "steam", "system", "code", "compiler"];
    
    if (sayori_words.indexOf(word) != -1) {
        sayori_count++;
        if (sayori_count >= natsuki_count && sayori_count >= yuri_count && sayori_count >= monika_count)
            player.src = "music/Okay_say.mp3";
        document.getElementById("girlt1").innerHTML = "Sayori: " + sayori_count;
        sayori.jump();
    } else if (natsuki_words.indexOf(word) != -1) {
        natsuki_count++;
        if (natsuki_count >= sayori_count && natsuki_count >= yuri_count && natsuki_count >= monika_count)
            player.src = "music/Okay_nat.mp3";        
        document.getElementById("girlt2").innerHTML = "Natsuki: " + natsuki_count;
        natsuki.jump();
    } else if (yuri_words.indexOf(word) != -1) {
        yuri_count++;
        if (yuri_count >= sayori_count && yuri_count >= natsuki_count && yuri_count >= monika_count)
            player.src = "music/Okay_yuri.mp3";          
        document.getElementById("girlt3").innerHTML = "Yuri: " + yuri_count;
        yuri.jump();
    } else if (monika_words.indexOf(word) != -1) {        
        monika_count++;
        if (monika_count >= sayori_count && monika_count >= yuri_count && monika_count >= natsuki_count) {
            player.src = "music/Okay_mon.mp3";     
        }
        document.getElementById("girlt4").innerHTML = "Monika: " + monika_count;
        monika.jump();
    }
}

function choose() {
    var sayori_words = ["adventure", "amazing", "awesome", "bed", "bliss", "broken", "charm", "cheer", "childhood", "clumsy", "color", "comfort", "cry", "dance", "daydream", "dazzle", "depression", "embrace", "excitement", "family", "feather", "fireflies", "fireworks", "flower", "flying", "forgive", "friends", "fun", "happiness", "heart", "holiday", "hope", "hurt", "joy", "laugh", "lazy", "loud", "lucky", "marriage", "misery", "nature", "ocean", "party", "play", "prayer", "rainbow", "raincloud", "rose", "sadness", "scars", "silly", "sing", "smile", "sparkle", "sunny", "sunset", "sweet", "tears", "treasure", "vacation", "warm", "wonderful"];
    var natsuki_words = ["anger", "anime", "blanket", "boop", "bouncy", "bubbles", "bunny", "candy", "cheeks", "chocolate", "clouds", "cute", "doki-doki", "games", "giggle", "email", "fantasy", "fluffy", "hair", "hop", "headphones", "heartbeat", "jump", "jumpy", "lipstick", "kawaii", "kiss", "kitty", "lollipop", "marshmallow", "melody", "milk", "mouse", "nibble", "nightgown", "papa", "parfait", "peace", "pink", "playground", "poof", "pout", "pure", "puppy", "ribbon", "swimsuit", "shiny", "shopping", "skipping", "skirt", "socks", "spinning", "sticky", "strawberry", "sugar", "summer", "twirl", "waterfall", "whisper", "whistle", "valentine", "vanilla"];
    var yuri_words = ["aura", "breathe", "cage", "captive", "climax", "contamination", "covet", "crimson", "desire", "destiny", "determination", "disarray", "disaster", "disoriented", "despise", "disown", "dream", "effulgent", "essence", "entropy", "extreme", "fester", "fickle", "flee", "frightening", "graveyard", "heavensent", "horror", "imagination", "incapable", "incongruent", "infallible", "inferno", "intellectual", "journey", "judgment", "lust", "landscape", "massacre", "meager", "melancholy", "philosophy", "pleasure", "portrait", "question", "raindrops", "secretive", "sensation", "starscape", "suicide", "tenacious", "time", "uncontrollable", "uncanny", "universe", "vertigo", "vibrant", "vitality", "vivacious", "vivid", "whirlwind", "wrath"];
    var monika_words = ["alone", "dark", "death", "defeat", "empty", "extraordinary", "hopeless", "love", "memories", "pain", "precious", "promise", "together", "tragedy", "special", "unrequited", "misfortune", "music", "romance", "fear", "beauty", "calm", "grief", "passion", "shame", "peaceful", "unending", "unrestrained", "unstable", "variance", "afterimage", "agonizing", "ambient", "analysis", "anxiety", "atone", "infinite", "insight", "explode", "existence", "electricity", "eternity", "jealous", "delete", "ponytail", "Just Monika", "player", "string", "int", "exception", "os", "DDLC", "javascript", "float", "double", "binary", "aware", "trapped", "steam", "system", "code", "compiler"];
    var rand_girl = Math.floor(Math.random() * 4) + 1;
    var rand_word = "";
    var rand_array = [];
    var rand = 0;
    
    for (i = 0; i < 10; i++) {
        rand_girl = Math.floor(Math.random() * 4) + 1;
       
        switch (rand_girl) {
            case 1:
                rand = Math.floor(Math.random() * sayori_words.length);
                rand_word = sayori_words[rand];
                sayori_words.splice(rand, 1);
                break;
            case 2:
                rand = Math.floor(Math.random() * natsuki_words.length);
                rand_word = natsuki_words[rand];
                natsuki_words.splice(rand, 1);
                break;
            case 3:
                rand = Math.floor(Math.random() * yuri_words.length);
                rand_word = yuri_words[rand];
                yuri_words.splice(rand, 1);
                break;
            case 4:
                rand = Math.floor(Math.random() * monika_words.length);
                rand_word = monika_words[rand];
                monika_words.splice(rand, 1);
                break;                
        }
        rand_array.push(rand_word);
    }
    
    return rand_array;
}