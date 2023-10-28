$(document).ready(function(){
    var HEIGHT = $(window).height();
    HEIGHT -= 50;
    HEIGHT += "px";
    
    setInterval(wave, 5300);

    function wave(){
        $("#div1").animate({"top": HEIGHT}, "slow", function(){
            $("#div2").animate({"top": HEIGHT}, "slow", function(){
                $("#div3").animate({"top": HEIGHT}, "slow", function(){
                    $("#div4").animate({"top": HEIGHT}, "slow", function(){
                        $("#div5").animate({"top": HEIGHT}, "slow", function(){
                            $("#div6").animate({"top": HEIGHT}, "slow", function(){
                                $("#div7").animate({"top": HEIGHT}, "slow", function(){
                                    $("#div8").animate({"top": HEIGHT}, "slow", function(){
                                    });
                                });
                            });
                        });
                    });
                });
            });
            const top = "0px";
            $("#div1").animate({"top": top}, "slow", function(){
                $("#div2").animate({"top": top}, "slow", function(){
                    $("#div3").animate({"top": top}, "slow", function(){
                        $("#div4").animate({"top": top}, "slow", function(){
                            $("#div5").animate({"top": top}, "slow", function(){
                                $("#div6").animate({"top": top}, "slow", function(){
                                    $("#div7").animate({"top": top}, "slow", function(){
                                        $("#div8").animate({"top": top}, "slow", function(){});
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }); 
    };
});