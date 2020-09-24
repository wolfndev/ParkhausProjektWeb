// Wir werden für das Parkhaus das Singleton-Pattern anwenden, weil wir erreichen wollen,
// dass es immmer nur eine gültige Parkhaus-Instanz gibt.clock

var CarPark = (function(){

    // Speichert eine Referenz zum Singelton
    var instance;

    function init(){
    // Singleton

    //Private Methoden und Properties
    var carParkSpaceCount = 0;
    var carParkName = "Parkhaus von Gruppe 23";
    var carParkOwners = "Samel, Andreas, Cong, Niclas";

    return {
        // Öffentliche Methoden und Properties
        getCarParkSpaceCount: function(){
            return carParkSpaceCount;
        },
        setCarParkSpaceCount: function(number){
            if(number > 0){
                carParkSpaceCount = number;
            }
        },
        getCarParkName: function(){
            return carParkName;
        }
    };

    };

    return {
        // Gibt die Singleton-Instanz zurück, wenn eine existiert, oder erstellt sonst eine
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };


})();

