(function () {
  "use strict";
  const scoreTeam1 = () => (103 + 120 + 89) / 3;
  const scoreTeam2 = () => (123 + 94 + 116) / 3;
  const scoreTeam3 = () => (97 + 134 + 105) / 3;

  const whoWins = () => {
    if (scoreTeam1() > scoreTeam2() && scoreTeam1() > scoreTeam3())
      return "Team 1 wins with: " + scoreTeam1() + " points";
    else if (scoreTeam1() == scoreTeam2() || scoreTeam1() == scoreTeam3())
      return "draw";
    else if (scoreTeam2() > scoreTeam1() && scoreTeam2() > scoreTeam3())
      return "Team 2 wins with: " + scoreTeam2() + " points";
    else return "Team 3 wins with: " + scoreTeam3() + " points";
  };

  console.log(whoWins());
})();
