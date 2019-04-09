    function vergelijk(){
        keuze1 = document.getElementById("plantenKeuze1").value;
        keuze2 = document.getElementById("plantenKeuze2").value;

        var plant1Data = [1554444382, 18, 220];
        var plant2Data = [1553353382, 15, 250];
        var plant3Data = [1553353382, 17, 220];
        var plant4Data = [1553353382, 16, 210];
        var plant5Data = [1553353382, 18, 223];
        var plant6Data = [1553353382, 20, 220];
        var plant7Data = [1553353382, 21, 220];


        if(keuze1 == "Plant1"){
            document.getElementById('tijd1').innerHTML = plant1Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur1').innerHTML = plant1Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid1').innerHTML = plant1Data[2] +" Liter"+ "<br>";
        } else if (keuze1 == "Plant2"){
            document.getElementById('tijd1').innerHTML = plant2Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur1').innerHTML = plant2Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid1').innerHTML = plant2Data[2] +" Liter"+ "<br>";
        } else if (keuze1 == "Plant3"){
            document.getElementById('tijd1').innerHTML = plant3Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur1').innerHTML = plant3Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid1').innerHTML = plant3Data[2] +" Liter"+ "<br>";
        } else if (keuze1 == "Plant4"){
            document.getElementById('tijd1').innerHTML = plant4Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur1').innerHTML = plant4Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid1').innerHTML = plant4Data[2] +" Liter"+ "<br>";
        } else if (keuze1 == "Plant5"){
            document.getElementById('tijd1').innerHTML = plant5Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur1').innerHTML = plant5Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid1').innerHTML = plant5Data[2] +" Liter"+ "<br>";
        } else if (keuze1 == "Plant6"){
            document.getElementById('tijd1').innerHTML = plant6Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur1').innerHTML = plant6Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid1').innerHTML = plant6Data[2] +" Liter"+ "<br>";
        } else if (keuze1 == "Plant7"){
            document.getElementById('tijd1').innerHTML = plant7Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur1').innerHTML = plant7Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid1').innerHTML = plant7Data[2] +" Liter"+ "<br>";
        };

        if(keuze2 == "Plant1"){
            document.getElementById('tijd2').innerHTML = plant1Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur2').innerHTML = plant1Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid2').innerHTML = plant1Data[2] +" Liter"+ "<br>";
        } else if (keuze2 == "Plant2"){
            document.getElementById('tijd2').innerHTML = plant2Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur2').innerHTML = plant2Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid2').innerHTML = plant2Data[2] +" Liter"+ "<br>";
        } else if (keuze2 == "Plant3"){
            document.getElementById('tijd2').innerHTML = plant3Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur2').innerHTML = plant3Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid2').innerHTML = plant3Data[2] +" Liter"+ "<br>";
        } else if (keuze2 == "Plant4"){
            document.getElementById('tijd2').innerHTML = plant4Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur2').innerHTML = plant4Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid2').innerHTML = plant4Data[2] +" Liter"+ "<br>";
        } else if (keuze2 == "Plant5"){
            document.getElementById('tijd2').innerHTML = plant5Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur2').innerHTML = plant5Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid2').innerHTML = plant5Data[2] +" Liter"+ "<br>";
        } else if (keuze2 == "Plant6"){
            document.getElementById('tijd2').innerHTML = plant6Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur2').innerHTML = plant6Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid2').innerHTML = plant6Data[2] +" Liter"+ "<br>";
        } else if (keuze2 == "Plant7"){
            document.getElementById('tijd2').innerHTML = plant7Data[0] +" Seconden"+ "<br>" ;
            document.getElementById('temperatuur2').innerHTML = plant7Data[1]+"&#8451;" + "<br>";
            document.getElementById('grondvochtigheid2').innerHTML = plant7Data[2] +" Liter"+ "<br>";
        }


    }