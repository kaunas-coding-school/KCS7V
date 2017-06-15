app.controller('manoController', function($scope) {
    $scope.vardas = "Tautvydas";
    $scope.pavarde = "Dulskis";
    $scope.busena = true;

    function keisti() {
        $scope.vardas = 'naujas vardas';
    }

    $scope.keistiVarda = keisti;
});