(function (createjs, window) {

    function Cloud(options) {
        this.initialize(options);
    }

    var p = Cloud.prototype = new createjs.Container();

    Cloud.prototype.Container_initialize = p.initialize;

    Cloud.prototype.initialize = function initialize(options) {
        this.Container_initialize();

        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;

        var po = options.particleOptions;

        for (var i = 0; i < options.density; i++) {
            var particle = new createjs.Shape(),
                particleX = Math.random() * options.width,
                particleY = Math.random() * options.height;

            particle
                .graphics
                .beginRadialGradientFill(
          ["rgba(255, 255, 255, " + po.transparency + ")", "rgba(255, 255,255, 0)"], [0, 1], particleX, particleY,
                    0, particleX, particleY,
                    po.radius
            )
                .drawCircle(particleX, particleY, po.radius)
                .endFill();

            particle.snapToPixel = true;
            this.addChild(particle);
        }


    };

    window.Cloud = Cloud;

}(createjs, window));


(function (createjs, window) {
    function Star(options) {
        this.initialize(options);
    }

    var p = Star.prototype = new createjs.Container();

    Star.prototype.Container_initialize = p.initialize;
    Star.prototype.initialize = function initialize(options) {
        this.Container_initialize()
        this.x = options.x;
        this.y = options.y;
        this.radius = options.radius;
        this.opacity = options.opacity;

        var particle = new createjs.Shape();
        particle
            .graphics
            .beginRadialGradientFill([
        "rgba(255, 255, 255, " + options.opacity + ")", "rgba(255, 255, 255, " + (options.opacity * 0) + ")"
      ], [0, 1], options.x, options.y, 0, options.x, options.y, options.radius)
            .drawCircle(options.x, options.y, options.glow)
            .endFill();

        particle.snapToPixel = true;
        this.addChild(particle);
    };

    window.Star = Star;

}(createjs, window));



(function (createjs, window) {
    function StarMap(options) {
        this.initialize(options);
    }

    var p = StarMap.prototype = new createjs.Container();

    StarMap.prototype.Container_initialize = p.initialize;

    function rand(lo, high) {
        return (Math.random() * (high - lo)) + lo;
    }


    StarMap.prototype.initialize = function initialize(options) {
        this.Container_initialize();

        function starOptions() {
            return {
                x: Math.random() * options.width,
                y: Math.random() * options.height,
                radius: rand(1, 3),
                glow: rand(1, 5, 6),
                opacity: rand(8, 9) * 0.1
            };
        }

        var map = new createjs.Container();

        for (var k = 0; k < options.amount; k++) {
            var opts = starOptions();
            map.addChild(new Star(opts));
        }
        map.snapToPixel = true;
        map.cache(0, 0, options.width, options.height, 1);

        this.addChild(map);

        if (options.twinkle) {
            var on = (Math.random() * 3000) + 500,
                off = (Math.random() * 3000) + 500;

            createjs
                .Tween
                .get(map, {
                    loop: true
                })
                .to({
                    alpha: 0
                }, on)
                .to({
                    alpha: 1
                }, off);
        }

    };

    window.StarMap = StarMap;

}(createjs, window));



function animateCanvas(cj, canvas) {

    var speed = 200;

    var stage,
        skyline,
        gradientSky,
        timeOfDayGradient,
        sunMoon,
        frontClouds = [],
        backClouds = [],
        starmaps = [];

    var scale = 2,
        gradientHeight = 1980 * scale,
        start = -gradientHeight + 325,
        end = 0;


    function createImage(url, onLoad, opts) {
        var img = new Image();
        img.src = url;
        img.onload = onLoad;

        var btmp = new cj
            .Bitmap(img)
            .set(opts);

        return btmp;
    }

    function createElements() {
        stage = new cj.Stage(canvas);
        //--
        skyline = new cj.Bitmap('/js/img/okc_skyline.png');



        timeOfDayGradient = createImage('/js/img/TimeOfDayGradient.jpg', loadTodGradient, {
            x: canvas.width * 0.5,
            y: start
        });

        sunMoon = createImage('/js/img/sun_moon_stars.png', loadSunMoon, {
            x: canvas.width * 0.5,
            y: 325
        });

        function rand(lo, high) {
            return (Math.random() * (high - lo)) + lo;
        }

        function fcOptions() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * (rand(3, 7) * 0.1),
                width: rand(150, 250),
                height: rand(30, 70),
                density: rand(25, 50),
                particleOptions: {
                    radius: rand(30, 70),
                    transparency: rand(0.25, 2) * 0.1
                }
            };
        }

        function bcOptions() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * (rand(3, 7) * 0.1),
                width: rand(100, 200),
                height: rand(25, 50),
                density: rand(25, 50),
                particleOptions: {
                    radius: rand(25, 50),
                    transparency: rand(2, 6) * 0.1,
                }
            };
        }



        var tWidth = canvas.width * 0.01;

        var fcloudsAmt = Math.floor(rand(tWidth * 0.4, tWidth * 1.3));
        var bCloudsAmt = Math.floor(rand(tWidth * 0.3, tWidth * 1.5));

        for (var k = 0; k < fcloudsAmt; k++) {
            var opts = fcOptions();

            var c = new Cloud(opts);
            var r = opts.particleOptions.radius;

            c.cache(-r, -r, opts.width + (2 * r), opts.height + (2 * r), 1);

            frontClouds.push(c);
        }

        for (var i = 0; i < bCloudsAmt; i++) {
            var opts = bcOptions();
            var r = opts.particleOptions.radius;
            var c = new Cloud(opts);
            c.cache(-r, -r, opts.width + (2 * r), opts.height + (2 * r), 1);

            backClouds.push(c);
        }

        var starsAmt = rand(canvas.width * 0.8, canvas.width * 1.7);

        var starmapStatic = new StarMap({
            width: canvas.width,
            height: canvas.height,
            amount: starsAmt * 0.8,
            twinkle: false
        });

        var starmapTwinkle1 = new StarMap({
            width: canvas.width,
            height: canvas.height,
            amount: starsAmt * 0.2,
            twinkle: true
        });

        var starmapTwinkle2 = new StarMap({
            width: canvas.width,
            height: canvas.height,
            amount: starsAmt * 0.2,
            twinkle: true
        });

        var starmapTwinkle3 = new StarMap({
            width: canvas.width,
            height: canvas.height,
            amount: starsAmt * 0.2,
            twinkle: true
        });

        starmaps.push(starmapStatic);
        starmaps.push(starmapTwinkle1);
        starmaps.push(starmapTwinkle2);
        starmaps.push(starmapTwinkle3);
    }

    function loadTodGradient(evt) {
        timeOfDayGradient.regX = timeOfDayGradient.image.width / 2;
    }

    function loadSunMoon(evt) {
        sunMoon.regY = sunMoon.image.height / 2;
        sunMoon.regX = sunMoon.image.width / 2;
    }

    function addElements() {
        stage.addChild(timeOfDayGradient);

        for (var t = 0, tt = starmaps.length; t < tt; t++) {
            stage.addChild(starmaps[t]);
        }

        for (var j = 0, jj = backClouds.length; j < jj; j++) {
            stage.addChild(backClouds[j]);
        }

        stage.addChild(sunMoon);
        stage.addChild(skyline);

        for (var t = 0, tt = frontClouds.length; t < tt; t++) {
            stage.addChild(frontClouds[t]);
        }

        stage.snapToPixelsEnabled = true;
    }


    function setAnimations() {

        var _animTodGradient = cj
            .Tween
            .get(timeOfDayGradient, {
                loop: true
            });

        var _animSunMoon = cj
            .Tween
            .get(sunMoon, {
                loop: true
            });




        var gradUp = {
                y: end
            },
            gradDown = {
                y: start
            },
            gradSpeed = (speed * 0.5) * 1000;

        var sunRot = {
                rotation: 360
            },
            sunSpeed = speed * 1000;

        var fcloudspeed = speed * 75,
            bcloudspeed = speed * 150;

        _animTodGradient
            .to(gradUp, gradSpeed)
            .to(gradDown, gradSpeed);

        _animSunMoon
            .to(sunRot, sunSpeed);



        function tweenCloud(cloud, cloudSpeed) {

            var c = cj
                .Tween
                .get(cloud, {
                    loop: true
                });

            c
                .to({
                    x: canvas.width
                }, cloudSpeed * (canvas.width / cloud.x))
                .to({
                    x: 0 - cloud.width
                }, 1)
                .to({
                    x: cloud.x
                }, cloudSpeed * (canvas.width / cloud.x));
        }


        for (var t = 0, tt = frontClouds.length; t < tt; t++) {
            tweenCloud(frontClouds[t], fcloudspeed);
        }

        for (var t = 0, tt = backClouds.length; t < tt; t++) {
            tweenCloud(backClouds[t], bcloudspeed);
        }

    }


    function scaleElements() {
        skyline.x = (canvas.width * 0.5) - 450;
        skyline.y = 0;



        timeOfDayGradient.scaleX = timeOfDayGradient.scaleY = scale;
        sunMoon.scaleX = sunMoon.scaleY = 0.4;
    }


    createElements();
    addElements();
    scaleElements();
    setAnimations();


    function tick() {
        stage.update();
    }

    //on repeat
    cj.Ticker.addEventListener('tick', tick);
    createjs.Ticker.setFPS(30);
}

(function (cj) {
    var canvas = document.getElementById('banner-whizbang');
    var banner = document.getElementById('banner');
    var context = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = $(banner).width();
        canvas.height = $(banner).height();
        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
        animateCanvas(cj, canvas);
    }
})(createjs);