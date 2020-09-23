// Wir werden für das Parkhaus das Singleton-Pattern anwenden, weil wir erreichen wollen,
// dass es immmer nur eine gültige Parkhaus-Instanz gibt.clock

var CarPark = (function(){

    // Speichert eine Referenz zum Singelton
    var instance;

    function init(){
    // Singleton

    return {
        // Öffentliche Methoden
        publicMethod: function(){
            console.log("Pulic");
        },
        publProp: "Public",

        getRandomNumber: function(){
            return 0;
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

