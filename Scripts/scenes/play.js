var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // add roll button
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            // initialize array of bitmaps
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._initializeBitmapArray = function () {
            this._dices = new Array();
            for (var dice = 0; dice < 2; dice++) {
                this._dices[dice] = new createjs.Bitmap(assets.getResult("DiceOne"));
                this._dices[dice].x = 122 + (dice * 243);
                this._dices[dice].y = 153;
                this.addChild(this._dices[dice]);
                console.log("Dice" + dice + " " + this._dices[dice]);
            }
        };
        Play.prototype._roll = function () {
            var outCome = [0, 0];
            var image = [" ", " "];
            for (var dice = 0; dice < 2; dice++) {
                outCome[dice] = Math.floor((Math.random() * 6) + 1);
                switch (outCome[dice]) {
                    case 1:
                        image[dice] = "DiceOne";
                        break;
                    case 2:
                        image[dice] = "DiceTwo";
                        break;
                    case 3:
                        image[dice] = "DiceThree";
                        break;
                    case 4:
                        image[dice] = "DiceFour";
                        break;
                    case 5:
                        image[dice] = "DiceFive";
                        break;
                    case 6:
                        image[dice] = "DiceSix";
                        break;
                    default:
                        break;
                }
            }
            return image;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            var bitmap = this._roll();
            for (var dice = 0; dice < 2; dice++) {
                this._dices[dice].image = assets.getResult(bitmap[dice]);
                console.log(bitmap[0] + " - " + bitmap[1]);
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map