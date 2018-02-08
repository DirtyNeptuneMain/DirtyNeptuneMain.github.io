var visibilityChange = (function (window) {
    var inView = false;
    return function (fn) {
        window.onfocus = window.onblur = window.onpageshow = window.onpagehide = function (e) {
		if ({focus:1, pageshow:1}[e.type]) {
			if (inView) return;
			fn("visible");
			inView = true;
            if (musicon)
                document.getElementById('player').volume = 1;
		} else if (inView) {
			fn("hidden");
			inView = false;
            document.getElementById('player').volume = 0;
		}
	};
};
}(this));

visibilityChange(function (state) {
    window_state = state;
});
