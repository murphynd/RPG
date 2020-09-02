import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Game from "./js/GamePlay.js";

$(document).ready(function () {});
const Quest = new Game();
const KingArthur = new Character("King Arthur", 20, 60, 80);
const BlackKnight = new Character("Black Knight", 20, 60, 100);
// Sir Bedevere the Wise
// Sir Lancelot the Brave
// Sir Galahad the Pure
// Sir Robin the Not-Quite-So-Brave-as-Sir-Lancelot
