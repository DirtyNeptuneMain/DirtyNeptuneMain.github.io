function chosen() {
    var sayori_words = ["Adventure", "Alone", "Amazing", "Awesome", "Bed", "Beauty", "Bliss", "Broken", "Calm", "Charm", "Cheer", "Childhood", "Clumsy", "Color", "Comfort", "Cry", "Dance", "Dark", "Daydream", "Dazzle", "Death", "Defeat", "Depression", "Embrace", "Empty", "Excitement", "Extraordinary", "Family", "Fear", "Feather", "Fireflies", "Fireworks", "Flower", "Flying", "Forgive", "Friends", "Fun", "Grief", "Happiness", "Heart", "Holiday", "Hope", "Hopeless", "Hurt", "Joy", "Laugh", "Lazy", "Loud", "Love", "Lucky", "Marriage", "Memories", "Misery", "Misfortune", "music", "Nature", "Ocean", "Passion", "Peaceful", "Pain", "Party", "Play", "Prayer", "Precious", "Promise", "Rainbow", "Raincloud", "Romance", "Rose", "Sadness", "Scars", "Shame", "silly", "Sing", "Smile", "Sparkle", "Special", "Sunny", "Sunset", "Sweet", "Tears", "Together", "Tragedy", "Treasure", "Unrequited", "Vacation", "Warm", "Wonderful"];
    var natsuki_words = ["Anger", "Anime", "Blanket", "Boop", "Bouncy", "Bubbles", "Bunny", "Candy", "Cheeks", "Chocolate", "Clouds", "Cute", "Doki-doki", "Games", "Giggle", "Email", "Fantasy", "Fluffy", "Hair", "Hop", "Headphones", "Heartbeat", "Jump", "Jumpy", "Lipstick", "Kawaii", "Kiss", "Kitty", "Lollipop", "Marshmallow", "Melody", "Milk", "Mouse", "Nibble", "Nightgown", "Papa", "Parfait", "Peace", "Pink", "Playground", "Poof", "Pout", "Pure", "Puppy", "Ribbon", "Swimsuit", "Shiny", "Shopping", "Skipping", "Skirt", "Socks", "Spinning", "Sticky", "Strawberry", "Sugar", "Summer", "Twirl", "Waterfall", "Whisper", "Whistle", "Valentine", "Vanilla"];
    var yuri_words = ["Afterimage", "Agonizing", "Ambient", "Analysis", "Anxiety", "Atone", "Aura", "Breathe", "Cage", "Captive", "Climax", "Contamination", "Covet", "Crimson", "Desire", "Destiny", "Determination", "Disarray", "Disaster", "Disoriented", "Despise", "Disown", "Dream", "Effulgent", "Electricity", "Entropy", "Essence", "Eternity", "Existence", "Explode", "Extreme", "Fester", "Fickle", "Flee", "Frightening", "Graveyard", "Heavensent", "Horror", "Imagination", "Incapable", "Incongruent", "Infallible", "Inferno", "Infinite", "Insight", "Intellectual", "Journey", "Judgment", "Lust", "Landscape", "Massacre", "Meager", "Melancholy", "Philosophy", "Pleasure", "Portrait", "Question", "Raindrops", "Secretive", "Sensation", "Starscape", "Suicide", "Tenacious", "Time", "Uncontrollable", "Uncanny", "Unending", "Universe", "Unrestrained", "Unstable", "Variance", "Vertigo", "Vibrant", "Vitality", "Vivacious", "Vivid", "Whirlwind", "Wrath"];
    var rand_girl = Math.floor(Math.random() * 3) + 1;
    var rand_word = "";
    
    for (i = 0; i < sayori_words.length; i++)
        sayori_words[i].toLowerCase();
    
    for (i = 0; i < natsuki_words.length; i++)
        natsuki_words[i].toLowerCase();
    
    for (i = 0; i < yuri_words.length; i++)
        yuri_words[i].toLowerCase();
    
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

document.getElementById("text1").innerHTML = choose(); 
document.getElementById("text2").innerHTML = choose(); 