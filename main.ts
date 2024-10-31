namespace SpriteKind {
    export const Skraldespand = SpriteKind.create()
    export const Affald = SpriteKind.create()
    export const plast = SpriteKind.create()
    export const glas = SpriteKind.create()
    export const æble = SpriteKind.create()
}
function mad () {
    æble = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f 7 . . . . . 
        . . . . . . . f f 7 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 1 2 2 2 2 2 . . . . 
        . . . . 2 1 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.æble)
    æble.setPosition(randint(0, 256), randint(0, 256))
}
sprites.onOverlap(SpriteKind.glas, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    sprites.destroy(glasflaske)
    info.changeScoreBy(1)
    glasCount += 1
    if (glasCount == 5) {
        sprites.destroy(skraldespandMad)
        sprites.destroy(æble)
        game.setGameOverScoringType(game.ScoringType.None)
        game.gameOver(true)
    } else {
        ølflaske()
    }
})
function opsamletplast () {
    plastikflaske.follow(Hero)
}
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.æble, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    sprites.destroy(æble)
    info.changeScoreBy(1)
    æbleCount += 1
    if (æbleCount == 5) {
        sprites.destroy(skraldespandMad)
        sprites.destroy(æble)
        tiles.setCurrentTilemap(tilemap`level8`)
        skraldespandGlas = sprites.create(img`
            . . f f f f f f f f f f f f . . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . f f f f . . 
            . . . . . . . . . . . f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f 7 7 f f f f f . . 
            . . f f f f f 7 7 f f f f f . . 
            . . f f f f 7 7 7 7 f f f f . . 
            . . f f f f 7 7 7 7 f f f f . . 
            . . f f f f 7 e e 7 f f f f . . 
            . . f f f f 7 7 7 7 f f f f . . 
            . . f f f f 7 7 7 7 f f f f . . 
            . . f f f f 7 7 7 7 f f f f . . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Skraldespand)
        skraldespandGlas.setPosition(80, 230)
        ølflaske()
        game.showLongText("Sammel 5 glasflasker for at vinde spillet.", DialogLayout.Bottom)
        info.startCountdown(30)
        info.setScore(0)
    } else {
        mad()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.glas, function (sprite, otherSprite) {
    opsamletglas()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.plast, function (sprite, otherSprite) {
    opsamletplast()
})
function ølflaske () {
    glasflaske = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 e e e e 7 f . . . . 
        . . . . f 7 e e e e 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.glas)
    glasflaske.setPosition(randint(0, 256), randint(0, 256))
}
function plastik () {
    plastikflaske = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.plast)
    plastikflaske.setPosition(randint(0, 256), randint(0, 256))
}
function opsamletglas () {
    glasflaske.follow(Hero)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.æble, function (sprite, otherSprite) {
    opsamletæble()
})
sprites.onOverlap(SpriteKind.plast, SpriteKind.Skraldespand, function (sprite, otherSprite) {
    sprites.destroy(plastikflaske)
    info.changeScoreBy(1)
    plastCount += 1
    if (plastCount == 5) {
        sprites.destroy(skraldespandPlast)
        sprites.destroy(plastikflaske)
        tiles.setCurrentTilemap(tilemap`level6`)
        skraldespandMad = sprites.create(img`
            . . f f f f f f f f f f f f . . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . f f f f . . 
            . . . . . . . . . . . f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f 7 f f f f f . . 
            . . f f f f f 7 7 f f f f f . . 
            . . f f f f 2 2 2 2 f f f f . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f f f f 2 2 2 2 f f f f . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Skraldespand)
        skraldespandMad.setPosition(60, 230)
        mad()
        game.showLongText("Sammel 5 æbler for at gå videre til næste bane.", DialogLayout.Bottom)
        info.setScore(0)
        info.startCountdown(40)
    } else {
        plastik()
    }
})
function opsamletæble () {
    æble.follow(Hero)
}
let skraldespandGlas: Sprite = null
let plastikflaske: Sprite = null
let skraldespandMad: Sprite = null
let glasflaske: Sprite = null
let æble: Sprite = null
let skraldespandPlast: Sprite = null
let Hero: Sprite = null
let glasCount = 0
let æbleCount = 0
let plastCount = 0
plastCount = 0
æbleCount = 0
glasCount = 0
tiles.setCurrentTilemap(tilemap`level2`)
Hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d 3 3 d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Hero)
Hero.setStayInScreen(true)
Hero.setPosition(1, 250)
controller.moveSprite(Hero)
info.setScore(0)
info.startCountdown(45)
skraldespandPlast = sprites.create(img`
    . . f f f f f f f f f f f f . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . f f f f f . . 
    . . . . . . . . . . f f f f . . 
    . . . . . . . . . . . f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f 8 8 f f f f f . . 
    . . f f f f f 8 8 f f f f f . . 
    . . f f f f f 8 8 f f f f f . . 
    . . f f f f 8 8 8 8 f f f f . . 
    . . f f f f 8 8 8 8 f f f f . . 
    . . f f f f 8 8 8 8 f f f f . . 
    . . f f f f 8 8 8 8 f f f f . . 
    . . f f f f 8 8 8 8 f f f f . . 
    . . f f f f 8 8 8 8 f f f f . . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Skraldespand)
skraldespandPlast.setPosition(40, 230)
game.showLongText("Udfør opgaverne på tid for ikke at tabe.", DialogLayout.Bottom)
game.showLongText("Sammel 5 plastflasker for at gå videre til næste bane.", DialogLayout.Bottom)
plastik()
