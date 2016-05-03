var canvas;
var myAudio;

var context;
var bgImage;
var bgRange;
var bgReady;
var bgCloud;
var redShipReady;
var drawRed;
var shotMove;
var drawSmash;
var drawSmashOne;
var drawSmashRock;
var drawSmashStone;
var smashBox;
var boxReady;
var gameOverRed;
var redVictory;
var redVictoryOne;
var redVictoryTwo;
var redVictoryThree;
var gameOver;
var afterBurn;
var keysDown;

window.onload = function () {
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = 1200;
    canvas.height = 600;
    console.log(context);

    document.body.appendChild(canvas);

    bgImage = new Image();
    var backImage = ["sprites/bg/canvas_1.png", "sprites/bg/canvas_2.png", "sprites/bg/cloud_3.png", "sprites/bg/cloud_9.png"];
    bgImage.onload = function () {

        bgReady = true;
    };
    bgImage.src = backImage[0];


    var heroImage = [
        "sprites/hero/spacey_0_one.png",
        "sprites/hero/spacey_1_one.png",
        "sprites/hero/spacey_2_one.png",
        "sprites/hero/spacey_3_one.png",
        "sprites/hero/spacey_4_one.png",
        "sprites/hero/spacey_5_one.png",
        "sprites/hero/spacey_6_one.png",
        "sprites/hero/spacey_7_one.png",
        "sprites/hero/spacey_8_one.png",
        "sprites/hero/spacey_9_one.png",
        "sprites/hero/spacey_green.png",
        "sprites/hero/spacey_hit.png",
    "sprites/hero/spacey_blessed.png"];
    //THREE
    var actionImage = [
        "sprites/hero/hero_omega1_blowup3.png",
        "sprites/hero/hero_omega1_blowup4.png",
        "sprites/hero/hero_omega1_blowup5.png",
        "sprites/hero/hero_omega1_blowup6.png",

        "sprites/hero/red_shot_0",
        "sprites/hero/red_shot_9.png",
        "sprites/hero/shot_blue_1.png",
        "sprites/hero/shot_blue.png",

        "sprites/hero/shot_red_0.png",
        "sprites/hero/shot_red_1.png",
        "sprites/hero/smoke_plume_1.png",
        "sprites/hero/smoke_plume_2.png"];
    var blockImage = ["sprites/blocks/spacey_block_1_a.png", "sprites/blocks/spacey_block_1_a_destroy_1.png",
        "sprites/blocks/spacey_block_1_a_destroy_2.png",
        "sprites/blocks/spacey_block_1_a_destroy_3.png",
        "sprites/blocks/spacey_block_1_b.png",
        "sprites/blocks/spacey_block_1_b_destroy_1.png",
        "sprites/blocks/spacey_block_1_b_destroy_2.png",
        "sprites/blocks/spacey_block_1_b_destroy_3.png",
        "sprites/blocks/spacey_block_1_c.png",
        "sprites/blocks/spacey_block_1_c_destroy_1.png",
        "sprites/blocks/spacey_block_1_c_destroy_2.png",
        "sprites/blocks/spacey_block_1_c_destroy_3.png",
        "sprites/blocks/spacey_block_1_d.png",
        "sprites/blocks/spacey_block_1_d_destroy_1.png",
        "sprites/blocks/spacey_block_1_d_destroy_2.png",
        "sprites/blocks/spacey_block_1_d_destroy_3.png",
        "sprites/blocks/spacey_block_2_a.png",
        "sprites/blocks/spacey_block_2_a_destroy_1.png",
        "sprites/blocks/spacey_block_2_a_destroy_2.png",

        "sprites/blocks/spacey_block_2_a_destroy_3.png", //19//
        "sprites/blocks/spacey_block_2_b.png", //20//
        "sprites/blocks/spacey_block_2_b_destroy_1.png",
        "sprites/blocks/spacey_block_2_b_destroy_2.png",
        "sprites/blocks/spacey_block_2_b_destroy_3.png",
        "sprites/blocks/spacey_block_2_c.png",
        "sprites/blocks/spacey_block_2_c_destroy_1.png",
        "sprites/blocks/spacey_block_2_c_destroy_2.png",
        "sprites/blocks/spacey_block_2_c_destroy_3.png",
        "sprites/blocks/spacey_block_2_d.png",
        "sprites/blocks/spacey_block_2_d_destroy_1.png",
        "sprites/blocks/spacey_block_2_d_destroy_2.png", //30//
        "sprites/blocks/spacey_block_2_d_destroy_3.png",
        "sprites/blocks/spacey_block_3_a.png",
        "sprites/blocks/spacey_block_3_a_destroy_1.png",
        "sprites/blocks/spacey_block_3_a_destroy_2.png",
        "sprites/blocks/spacey_block_3_a_destroy_3.png",
        "sprites/blocks/spacey_block_3_b.png",
        "sprites/blocks/spacey_block_3_b_destroy_1.png",
        "sprites/blocks/spacey_block_3_b_destroy_2.png",
        "sprites/blocks/spacey_block_3_b_destroy_3.png",
        "sprites/blocks/spacey_block_3_c.png", //40//
        "sprites/blocks/spacey_block_3_c_destroy_1.png",
        "sprites/blocks/spacey_block_3_c_destroy_2.png",
        "sprites/blocks/spacey_block_3_c_destroy_3.png",
        "sprites/blocks/spacey_block_3_d.png",
        "sprites/blocks/spacey_block_3_d_destroy_1.png",
        "sprites/blocks/spacey_block_3_d_destroy_2.png",
        "sprites/blocks/spacey_block_3_d_destroy_3.png",
        "sprites/blocks/spacey_block_4_a.png",
        "sprites/blocks/spacey_block_4_a_destroy_1.png",
        "sprites/blocks/spacey_block_4_a_destroy_2.png", //50//
        "sprites/blocks/spacey_block_4_a_destroy_3.png",
        "sprites/blocks/spacey_block_4_b.png",
        "sprites/blocks/spacey_block_4_b_destroy_1.png",
        "sprites/blocks/spacey_block_4_b_destroy_2.png",
        "sprites/blocks/spacey_block_4_b_destroy_3.png",
        "sprites/blocks/spacey_block_4_c.png",
        "sprites/blocks/spacey_block_4_c_destroy_1.png",
        "sprites/blocks/spacey_block_4_c_destroy_2.png",
        "sprites/blocks/spacey_block_4_c_destroy_3.png",
        "sprites/blocks/spacey_block_4_d.png",
        "sprites/blocks/spacey_block_4_d_destroy_1.png",
        "sprites/blocks/spacey_block_4_d_destroy_2.png",
        "sprites/blocks/spacey_block_4_d_destroy_3.png",
        "sprites/blocks/spacey_block_5_a.png",
        "sprites/blocks/spacey_block_5_a_destroy_1.png",
        "sprites/blocks/spacey_block_5_a_destroy_2.png",
        "sprites/blocks/spacey_block_5_a_destroy_3.png",
        "sprites/blocks/spacey_block_5_b.png",
        "sprites/blocks/spacey_block_5_b_destroy_1.png",
        "sprites/blocks/spacey_block_5_b_destroy_2.png", //70//
        "sprites/blocks/spacey_block_5_b_destroy_3.png",
        "sprites/blocks/spacey_block_5_c.png",
        "sprites/blocks/spacey_block_5_c_destroy_1.png",
        "sprites/blocks/spacey_block_5_c_destroy_2.png",
        "sprites/blocks/spacey_block_5_c_destroy_3.png",
        "sprites/blocks/spacey_block_5_d.png",
        "sprites/blocks/spacey_block_5_d_destroy_1.png",
        "sprites/blocks/spacey_block_5_d_destroy_2.png",
        "sprites/blocks/spacey_block_5_d_destroy_3.png",

        "sprites/blocks/spacey_block_gold_shine_1.png", //80//
        "sprites/blocks/spacey_block_gold_shine_2.png",
        "sprites/blocks/spacey_block_gold_shine_3.png",
        "sprites/blocks/spacey_block_gold_shine_4.png",
        "sprites/blocks/spacey_block_gold_shine_5.png",
        "sprites/blocks/spacey_super_block_1.png",
        "sprites/blocks/spacey_super_block_2.png",
        "sprites/blocks/spacey_super_block_3.png",
        "sprites/blocks/spacey_super_block_4.png",
        "sprites/blocks/spacey_super_block_5.png"];
    //FIVE
    var boxImage = ["sprites/boxes/spacey_box_1.png",
        "sprites/boxes/spacey_box_1_destroy_1.png",
        "sprites/boxes/spacey_box_1_destroy_2.png",
        "sprites/boxes/spacey_box_1_destroy_3.png",
        "sprites/boxes/spacey_box_1_destroy_4.png",
        "sprites/boxes/spacey_box_2.png",
        "sprites/boxes/spacey_box_2_destroy_1.png",
        "sprites/boxes/spacey_box_2_destroy_2.png",
        "sprites/boxes/spacey_box_2_destroy_3.png",
        "sprites/boxes/spacey_box_2_destroy_4.png",
        "sprites/boxes/spacey_box_3.png",
        "sprites/boxes/spacey_box_3_destroy_1.png",
        "sprites/boxes/spacey_box_3_destroy_2.png",
        "sprites/boxes/spacey_box_3_destroy_3.png",
        "sprites/boxes/spacey_box_3_destroy_4.png",
        "sprites/boxes/spacey_box_4.png",
        "sprites/boxes/spacey_box_4_destroy_1.png",
        "sprites/boxes/spacey_box_4_destroy_2.png",
        "sprites/boxes/spacey_box_4_destroy_3.png",
        "sprites/boxes/spacey_box_4_destroy_4.png",
        "sprites/boxes/spacey_box_5.png",
        "sprites/boxes/spacey_box_5_destroy_1.png",
        "sprites/boxes/spacey_box_5_destroy_2.png",
        "sprites/boxes/spacey_box_5_destroy_3.png",
        "sprites/boxes/spacey_box_5_destroy_4.png"];
    var bizarroImage = [];


    var MakerOne = function (x, y, speed, src, gameMove) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.src = src
        //this.src = valueAtIndexOf(i)
        this.gameMove = gameMove;
        this.image = new Image();
        this.image.src = src;
        this.image.onload = function () {
            redShipReady = true;
            console.log("red ready");
        };

    };


    var redShip = new MakerOne(100, 140, 500, heroImage[2], 0),
        openScreen = new MakerOne(0, 100, 0, "sprites/spacey_open.png", 10),
        shipHit = new MakerOne(100, 140, 500, heroImage[11], 0),
        shipHitBox = new MakerOne(100, 140, 500, heroImage[12], 0),
        smokePlume = new MakerOne(49, redShip.y, 0, actionImage[10], 10),
        smokePlumeOne = new MakerOne(37, redShip.y, 0, actionImage[10], 10),
        burner = new MakerOne(100, redShip.y, 0, actionImage[9], 10),
        bgCloud = new MakerOne(980, 250, 0, backImage[3], 10),
        bgCloudOne = new MakerOne(1000, 100, 0, backImage[2], 10),
        bgCloudNine = new MakerOne(1111, 175, 0, backImage[3], 10),
        redShot = new MakerOne(100, 100, 250, actionImage[5], 10),
        burnerTwo = new MakerOne(150, 0, 250, actionImage[9], 10),
        boxSmash = new MakerOne(0, 0, 100, boxImage[3], 10),
        boxSmashTwo = new MakerOne(0, 0, 100, boxImage[3], 10),
        rockSmash = new MakerOne(0, 0, 100, blockImage[19], 10),
        stoneSmash = new MakerOne(0, 0, 100, blockImage[35], 10);
    //use speed * modifier
    tick = 0;
    redDeath = 0;
    redGold = 0;
    boxKill = 0;



    var reset = function () {
        this.x = 1270;
        this.y = 25 + (Math.random() * (canvas.height - 75));


    };

    var boxArray = [];
    for (i = 0; i < 12; i++) {
        var box = new MakerOne(1270 + i * 100, 50 + (Math.random() * (canvas.height - 70)), 400, boxImage[0], 10);
        
        box.reset = reset;
        boxArray.push(box);

    };
    var rockArray = [];
    for (i = 0; i < 9; i++) {
        var rock = new MakerOne(1270 + i * 100, 50 + (Math.random() * (canvas.height - 70)), 100, blockImage[16], 10);
        rock.reset = reset;
        rockArray.push(rock);
    };
    var stoneArray = [];
    for (i = 0; i < 7; i++) {
        var stone = new MakerOne(1270 + i * 100, 50 + (Math.random() * (canvas.height - 70)), 100, blockImage[32], 10);
        stone.reset = reset;
        stoneArray.push(stone);
    };
    var goldArray = [];
    for (i = 0; i < 2; i++) {
        var gold = new MakerOne(1270 + i * 100, 50 + (Math.random() * (canvas.height - 70)), 100, blockImage[81], 10);
        gold.reset = reset;
        goldArray.push(gold);
    }
    keysDown = {}

    document.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true

    }, false);

    document.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];

    }, false);

    document.addEventListener("click", function (e) {
        keysDown[e.keyCode] = true

    }, true);


    var update = function (modifier) {

        if (tick > 222) {
            for (i = 0; i < boxArray.length; i++) {
                if (boxArray[i].gameMove === 10) {
                    boxArray[i].x -= 6;
                }
                if (boxArray[i].x < canvas.width - 1270) {
                    boxArray[i].reset();
                }
            }
            for (i = 0; i < rockArray.length; i++) {
                if (rockArray[i].gameMove === 10) {
                    rockArray[i].x -= 4;
                }
                if (rockArray[i].x < -70) {
                    rockArray[i].reset();
                }
            }
            for (i = 0; i < goldArray.length; i++) {
                if (goldArray[i].gameMove === 10) {
                    goldArray[i].x -= 4;
                }
                if (goldArray[i].x < -70) {
                    goldArray[i].reset();
                }


            }
            for (i = 0; i < stoneArray.length; i++) {
                if (stoneArray[i].gameMove === 10) {
                    stoneArray[i].x -= 3;
                }
                if (stoneArray[i].x < canvas.width - 1270) {
                    stoneArray[i].reset();
                }

            }
        }
        if (37 in keysDown) {
            redShip.src = heroImage;
            redShip.x -= redShip.speed * modifier;
        }
        if (39 in keysDown) {
            redShip.x += redShip.speed * modifier;
        }

        if (38 in keysDown) {
            redShip.y -= redShip.speed * modifier;
        }
        if (40 in keysDown) {
            redShip.y += redShip.speed * modifier;
        }
        if(32 in keysDown) {
            drawRed = true;
            redShot.y = redShip.y + 3;
            //redShot.x = redShip.x - 24;
        }
        shipHit.x = redShip.x - 3;
        shipHit.y = redShip.y - 3;
        shipHitBox.x = redShip.x - 3;
        shipHitBox.y = redShip.y - 3;
        if (shotMove) {
            redShot.x += 21;
        }



        if (redShip.y < 0) {
            redShip.y = 0;
        }
        if (redShip.y > 525) {
            redShip.y = 525;
        }
        if (redShip.x < 0) {
            redShip.x = 0;
        }
        if (redShip.x > 1120) {
            redShip.x = 1120;
        }

        if (bgCloud.gameMove === 10) {
            bgCloud.x -= 4;
            bgCloudOne.x -= 3;
            bgCloudNine.x -= 2;
            smokePlume.x -= 12;
            smokePlumeOne.x -= 18;
            boxSmash.y -= 0.3;
            boxSmashTwo.y -= 0.3;
            afterBurn = true;
        }

        if (bgCloud.x < -2000) {
            bgCloud.x = 1100;
        }
        if (bgCloudNine.x < -1875) {
            bgCloudNine.x = 920;
        }

        if (smokePlume.x <= redShip.x - 98) {
            smokePlume.x = redShip.x - 12;
            smokePlumeOne.y - 6;
            smokePlume.y + 6;
            afterBurn = true;

        }
        if (smokePlumeOne.x <= redShip.x - 98) {
            smokePlumeOne.x = redShip.x - 12;
            smokePlumeOne.y - 6;
            smokePlume.y + 6;
            afterBurn = false;

        }

        if (redShot.x > 1200) {
            redShot.x = redShip.x - 3;
            //remoteMissle.y = redShip.y  "for control of the shot"
            drawRed = false;
            shotMove = false;
        }

        for (i = 0; i < boxArray.length; i++) {
            if (redShip.x <= (boxArray[i].x + 40) && boxArray[i].x <= (redShip.x + 35) && redShip.y <= (boxArray[i].y + 35) && boxArray[i].y <= (redShip.y + 55)) {
                ++redDeath;
                boxSmashTwo.x = redShip.x;
                boxSmashTwo.y = redShip.y - 10;
                drawSmashOne = true;
                boxArray[i].reset();
            }
        }
        for (i = 0; i < rockArray.length; i++) {
            if (redShip.x <= (rockArray[i].x + 40) && rockArray[i].x <= (redShip.x + 35) && redShip.y <= (rockArray[i].y + 35) && rockArray[i].y <= (redShip.y + 55)) {
                console.log("RockSmash");
                ++redDeath;
                rockSmash.x = redShip.x;
                rockSmash.y = redShip.y - 66;
                shipHit.x = redShip.x - 3;
                shipHit.y = redShip.y - 3;
                drawSmashRock = true;
                rockArray[i].reset();
            }
        }
        for (i = 0; i < stoneArray.length; i++) {
            if (redShip.x <= (stoneArray[i].x + 40) && stoneArray[i].x <= (redShip.x + 35) && redShip.y <= (stoneArray[i].y + 35) && stoneArray[i].y <= (redShip.y + 55)) {
                console.log("RockSmash");
                ++redDeath;
                stoneSmash.x = redShip.x;
                stoneSmash.y = redShip.y - 66;
                shipHit.x = redShip.x;
                shipHit.y = redShip.y;
                drawSmashStone = true;
                stoneArray[i].reset();
            }
        }
        for (i = 0; i < goldArray.length; i++) {
            if (redShip.x <= (goldArray[i].x + 40) && goldArray[i].x <= (redShip.x + 35) && redShip.y <= (goldArray[i].y + 35) && goldArray[i].y <= (redShip.y + 55)) {
                console.log("GoldSmash");
                ++redGold;
                //rockSmash.x = redShip.x;
                //rockSmash.y = redShip.y - 66;
                //shipHit.x = redShip.x;
                //shipHit.y = redShip.y;
                //drawSmashRock = true;
                goldArray[i].reset();
            }
        }
        if (drawRed) {
            for (i = 0; i < boxArray.length; i++) {
                if (redShot.x <= (boxArray[i].x + 40) && boxArray[i].x <= (redShot.x + 34) && redShot.y <= (boxArray[i].y + 34) && boxArray[i].y <= (redShot.y + 34)) {
                    console.log("BoxSmash");
                    ++boxKill;
                    boxSmash.x = redShot.x;
                    boxSmash.y = redShot.y;
                    drawSmash = true;
                    boxArray[i].reset();
                }
            }

        }

        if (rockSmash.x < redShip.x - 18) {
            drawSmashRock = false;
        }
        if (rockSmash.x > redShip.x + 50) {
            drawSmashRock = false;
        }
        if (stoneSmash.x < redShip.x - 18) {
            drawSmashStone = false;
        }
        if (stoneSmash.x > redShip.x + 50) {
            drawSmashStone = false;
        }
        if (boxSmash.y < redShot.y - 5) {
            drawSmash = false;
        }
        if (boxSmash.y > redShot.y + 5) {
            drawSmash = false;
        }
        if (boxSmashTwo.x < redShip.x - 16) {
            drawSmashOne = false;
        }
        if (boxKill >= 21) {
            redVictory = true;

        }
        if (boxKill >= 42) {
            redVictoryOne = true;

        }
        if (redDeath >= 42) {
            gameOver = true;

        }

        //if (boxKill >= 21) {
        //    redVictory = true;
        //
        //}
        //if (boxKill >= 42) {
        //    redVictoryOne = true;
        //
        //}

    };


    //if (tick = 200) {
    //    tick = 0;
    //}

    var drawGame = function () {
        if (bgReady) {
            context.drawImage(bgImage, 0, 0)
            context.drawImage(bgCloud.image, bgCloud.x, bgCloud.y);
            context.drawImage(bgCloudNine.image, bgCloudNine.x, bgCloudNine.y);
        }
        if (tick < 222) {
            context.drawImage(openScreen.image, openScreen.x, openScreen.y);
        }

        if (tick > 222) {
            if (afterBurn) {
                context.drawImage(burner.image, redShip.x - 24, redShip.y - 2)

            }
            if (afterBurn && shotMove) {
                context.drawImage(burnerTwo.image, redShot.x + 6, redShot.y + 5)
            }
            if (redShipReady) {
                context.drawImage(bgCloud.image, bgCloud.x, bgCloud.y);
                context.drawImage(bgCloudNine.image, bgCloudNine.x, bgCloudNine.y);
                for (i = 0; i < stoneArray.length; i++) {
                    context.drawImage(stoneArray[i].image, stoneArray[i].x, stoneArray[i].y);
                };
                for (i = 0; i < rockArray.length; i++) {
                    context.drawImage(rockArray[i].image, rockArray[i].x, rockArray[i].y);
                };
                for (i = 0; i < goldArray.length; i++) {
                    context.drawImage(goldArray[i].image, goldArray[i].x, goldArray[i].y);
                    if (afterBurn) {
                        goldArray[i].src = blockImage[1];
                    }
                };
                for (i = 0; i < boxArray.length; i++) {
                    context.drawImage(boxArray[i].image, boxArray[i].x, boxArray[i].y);
            
                }
                if (drawRed) {
                    context.drawImage(redShot.image, redShot.x, redShot.y);
                    shotMove = true;

                }

                context.drawImage(smokePlume.image, smokePlume.x, redShip.y + 26)
                context.drawImage(smokePlumeOne.image, smokePlumeOne.x, redShip.y + 24)
                context.drawImage(smokePlumeOne.image, smokePlumeOne.x + 10, redShip.y + 25)
                context.drawImage(redShip.image, redShip.x, redShip.y);

            }

            if (drawSmash) {
                context.drawImage(boxSmash.image, boxSmash.x, boxSmash.y);
                boxSmash.x += 2;
                boxSmash.y -= 1;
                smashBox = true;
            }
            if (drawSmashOne) {
                context.drawImage(boxSmashTwo.image, boxSmashTwo.x, boxSmashTwo.y);
                context.drawImage(shipHitBox.image, shipHitBox.x, shipHitBox.y);
                boxSmashTwo.x -= 7.1;
                smashBoxOne = true;
            }
            if (drawSmashRock) {
                context.drawImage(rockSmash.image, rockSmash.x, rockSmash.y);
                context.drawImage(shipHit.image, shipHit.x, shipHit.y);
                rockSmash.x -= 2;
                rockSmash.y += 1;
            }
            if (drawSmashStone) {
                context.drawImage(stoneSmash.image, stoneSmash.x, stoneSmash.y);
                context.drawImage(shipHit.image, shipHit.x, shipHit.y);
                stoneSmash.x -= 2;
                stoneSmash.y += 1;
            }
        }


    };
    var tickTock = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        drawGame();
        then = now;
        ++tick
        requestAnimationFrame(tickTock);
    };

    var w = window;
    requestAnimationFrame =
        w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        w.msRequestAnimationFrame ||
        w.mozRequestAnimationFrame;

    var then = Date.now();
    update();
    tickTock();

};