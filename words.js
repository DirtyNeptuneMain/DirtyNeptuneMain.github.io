function inc_count (word) {
    var sayori_words = ["adventure", "alone", "amazing", "awesome", "bed", "beauty", "bliss", "broken", "calm", "charm", "cheer", "childhood", "clumsy", "color", "comfort", "cry", "dance", "dark", "daydream", "dazzle", "death", "defeat", "depression", "embrace", "empty", "excitement", "extraordinary", "family", "fear", "feather", "fireflies", "fireworks", "flower", "flying", "forgive", "friends", "fun", "grief", "happiness", "heart", "holiday", "hope", "hopeless", "hurt", "joy", "laugh", "lazy", "loud", "love", "lucky", "marriage", "memories", "misery", "misfortune", "music", "nature", "ocean", "passion", "peaceful", "pain", "party", "play", "prayer", "precious", "promise", "rainbow", "raincloud", "romance", "rose", "sadness", "scars", "shame", "silly", "sing", "smile", "sparkle", "special", "sunny", "sunset", "sweet", "tears", "together", "tragedy", "treasure", "unrequited", "vacation", "warm", "wonderful"];
    var natsuki_words = ["anger", "anime", "blanket", "boop", "bouncy", "bubbles", "bunny", "candy", "cheeks", "chocolate", "clouds", "cute", "doki-doki", "games", "giggle", "email", "fantasy", "fluffy", "hair", "hop", "headphones", "heartbeat", "jump", "jumpy", "lipstick", "kawaii", "kiss", "kitty", "lollipop", "marshmallow", "melody", "milk", "mouse", "nibble", "nightgown", "papa", "parfait", "peace", "pink", "playground", "poof", "pout", "pure", "puppy", "ribbon", "swimsuit", "shiny", "shopping", "skipping", "skirt", "socks", "spinning", "sticky", "strawberry", "sugar", "summer", "twirl", "waterfall", "whisper", "whistle", "valentine", "vanilla"];
    var yuri_words = ["afterimage", "agonizing", "ambient", "analysis", "anxiety", "atone", "aura", "breathe", "cage", "captive", "climax", "contamination", "covet", "crimson", "desire", "destiny", "determination", "disarray", "disaster", "disoriented", "despise", "disown", "dream", "effulgent", "electricity", "entropy", "essence", "eternity", "existence", "explode", "extreme", "fester", "fickle", "flee", "frightening", "graveyard", "heavensent", "horror", "imagination", "incapable", "incongruent", "infallible", "inferno", "infinite", "insight", "intellectual", "journey", "judgment", "lust", "landscape", "massacre", "meager", "melancholy", "philosophy", "pleasure", "portrait", "question", "raindrops", "secretive", "sensation", "starscape", "suicide", "tenacious", "time", "uncontrollable", "uncanny", "unending", "universe", "unrestrained", "unstable", "variance", "vertigo", "vibrant", "vitality", "vivacious", "vivid", "whirlwind", "wrath"];
    
    if (sayori_words.indexOf(word) != -1) {
        sayori_count++;
        document.getElementById("girlt1").innerHTML = "Sayori: " + sayori_count;
        sayori.jump();
    } else if (natsuki_words.indexOf(word) != -1) {
        natsuki_count++;
        document.getElementById("girlt2").innerHTML = "Natsuki: " + natsuki_count;
        natsuki.jump();
    } else if (yuri_words.indexOf(word) != -1) {
        yuri_count++;
        document.getElementById("girlt3").innerHTML = "Yuri: " + yuri_count;
        yuri.jump();
    }
}

function choose() {
    var sayori_words = ["adventure", "alone", "amazing", "awesome", "bed", "beauty", "bliss", "broken", "calm", "charm", "cheer", "childhood", "clumsy", "color", "comfort", "cry", "dance", "dark", "daydream", "dazzle", "death", "defeat", "depression", "embrace", "empty", "excitement", "extraordinary", "family", "fear", "feather", "fireflies", "fireworks", "flower", "flying", "forgive", "friends", "fun", "grief", "happiness", "heart", "holiday", "hope", "hopeless", "hurt", "joy", "laugh", "lazy", "loud", "love", "lucky", "marriage", "memories", "misery", "misfortune", "music", "nature", "ocean", "passion", "peaceful", "pain", "party", "play", "prayer", "precious", "promise", "rainbow", "raincloud", "romance", "rose", "sadness", "scars", "shame", "silly", "sing", "smile", "sparkle", "special", "sunny", "sunset", "sweet", "tears", "together", "tragedy", "treasure", "unrequited", "vacation", "warm", "wonderful"];
    var natsuki_words = ["anger", "anime", "blanket", "boop", "bouncy", "bubbles", "bunny", "candy", "cheeks", "chocolate", "clouds", "cute", "doki-doki", "games", "giggle", "email", "fantasy", "fluffy", "hair", "hop", "headphones", "heartbeat", "jump", "jumpy", "lipstick", "kawaii", "kiss", "kitty", "lollipop", "marshmallow", "melody", "milk", "mouse", "nibble", "nightgown", "papa", "parfait", "peace", "pink", "playground", "poof", "pout", "pure", "puppy", "ribbon", "swimsuit", "shiny", "shopping", "skipping", "skirt", "socks", "spinning", "sticky", "strawberry", "sugar", "summer", "twirl", "waterfall", "whisper", "whistle", "valentine", "vanilla"];
    var yuri_words = ["afterimage", "agonizing", "ambient", "analysis", "anxiety", "atone", "aura", "breathe", "cage", "captive", "climax", "contamination", "covet", "crimson", "desire", "destiny", "determination", "disarray", "disaster", "disoriented", "despise", "disown", "dream", "effulgent", "electricity", "entropy", "essence", "eternity", "existence", "explode", "extreme", "fester", "fickle", "flee", "frightening", "graveyard", "heavensent", "horror", "imagination", "incapable", "incongruent", "infallible", "inferno", "infinite", "insight", "intellectual", "journey", "judgment", "lust", "landscape", "massacre", "meager", "melancholy", "philosophy", "pleasure", "portrait", "question", "raindrops", "secretive", "sensation", "starscape", "suicide", "tenacious", "time", "uncontrollable", "uncanny", "unending", "universe", "unrestrained", "unstable", "variance", "vertigo", "vibrant", "vitality", "vivacious", "vivid", "whirlwind", "wrath"];
    var rand_girl = Math.floor(Math.random() * 3) + 1;
    var rand_word = "";
    
    switch (rand_girl) {
        case 1:
            rand_word = sayori_words[Math.floor(Math.random() * sayori_words.length)];
            break;
        case 2:
            rand_word = natsuki_words[Math.floor(Math.random() * natsuki_words.length)];
            break;
        case 3:
            rand_word = yuri_words[Math.floor(Math.random() * yuri_words.length)];
            break;
    }
    
    return rand_word;
}