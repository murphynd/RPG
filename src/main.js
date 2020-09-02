import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Character from "src/js/Character.js";
import Game from "src/js/GamePlay.js";

$(document).ready(function () {});
const Quest = new Game();
const KingArthur = new Character("King", "King Arthur", "Strong, Witty", 60);
const BlackKnight = new Character("enemy", "Black Knight", "Bold, persistent", 100);
// Sir Bedevere the Wise
// Sir Lancelot the Brave
// Sir Galahad the Pure
// Sir Robin the Not-Quite-So-Brave-as-Sir-Lancelot
// Black Knight
