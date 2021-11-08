(function () {
  "use strict";
  const scoreTeam1 = () => (103 + 120 + 89) / 3;
  const scoreTeam2 = () => (123 + 94 + 116) / 3;

  const whoWins = () => {
    if (scoreTeam1() > scoreTeam2())
      return "Team 1 wins with: " + scoreTeam1() + " points";
    else if (scoreTeam1() == scoreTeam2()) return "Teko";
    else return "Team 2 wins with: " + scoreTeam2() + " points";
  };

  console.log(whoWins());
})();
