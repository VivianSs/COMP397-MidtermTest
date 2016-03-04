// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _rollButton: objects.Button;
        private _diceOne: createjs.Bitmap;
        private _diceTwo: createjs.Bitmap;

        private _dices: createjs.Bitmap[];
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            
            // add roll button
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180)
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this); 

            // initialize array of bitmaps
            this._initializeBitmapArray();
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        private _initializeBitmapArray(): void {
            this._dices = new Array<createjs.Bitmap>();
            for (var dice: number = 0; dice < 2; dice++) {
                this._dices[dice] = new createjs.Bitmap(assets.getResult("DiceOne"));
                this._dices[dice].x = 122 + (dice * 243);
                this._dices[dice].y = 153;
                this.addChild(this._dices[dice]);
                console.log("Dice" + dice + " " + this._dices[dice]);
            }
        }

        private _roll(): string[] {
            var outCome = [0, 0];
            var image = [" ", " "];
            for (var dice: number = 0; dice < 2; dice++) {
                outCome[dice] = Math.floor((Math.random() * 6) + 1);
                switch (outCome[dice]) {
                    case 1:
                        image[dice] = "DiceOne"
                        break;
                    case 2:                   
                        image[dice] = "DiceTwo"
                        break;
                    case 3:
                        image[dice] = "DiceThree"
                        break;
                    case 4:                   
                        image[dice] = "DiceFour"
                        break;
                    case 5:
                        image[dice] = "DiceFive"
                        break;
                    case 6:
                        image[dice] = "DiceSix"
                        break;
                    default:
                        break;
                }
                
            }
            return image;
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        private _rollButtonClick(event: createjs.MouseEvent): void {
               var bitmap: string[] = this._roll();

                for (var dice: number = 0; dice < 2; dice++) {
                    this._dices[dice].image = assets.getResult(bitmap[dice]);
                    console.log(bitmap[0] + " - " + bitmap[1]);
                }
        }
    }
}