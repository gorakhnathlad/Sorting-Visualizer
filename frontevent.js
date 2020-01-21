
$(document).ready(function(){        
  $("p").click(function(event) {              
        let id=event.target.id;

                                if(id=='mergesort'){

                                                showSortButton();

                                }else if(id=='quicksort'){

                                                showSortButton();

                                }else if(id=='bubblesort'){

                                                showSortButton();

                                }else if(id=='heapsort'){

                                                showSortButton();

                                }else if(id=='arraySize'){

                                                generatedynamicgraps();

                                }else if(id=='sort'){

                                                sortExecutionStart();

                                }else{

                                                alert('Invalid button pressed!!! Inside Else ');

                                }

    });

                $("input").change(function(){

                                generatedynamicgraps();

  });

});

function showSortButton() {

                let id=event.target.id;

                document.getElementById("sort").innerHTML = "Click here to apply "+id;

}

function sortExecutionStart()

{

                drawGraph();

} 

function generatedynamicgraps(){

                document.getElementById("changeSize").value;

                drawGraph();

}

 

function drawGraph(){
                reset();
                var data=document.getElementById('changeSize').value;

                var rand=[];

                for(var i=0;i<data;i++){
                var random =Math.floor( Math.random()*250);
                rand[i]=random;
		}
                var canvas=document.getElementById('myCanvas');
                var ctx=canvas.getContext('2d');
                var width=8; //bar width
                var x=10; // first bar position
                ctx.fillStyle='#008512';

                for(var i=0;i<rand.length;i++){

                var h=rand[i];

                ctx.fillRect(x,canvas.height - h, width,h);

                x += width+1;

}
}

function reset(){

var canvas=document.getElementById('myCanvas');

var ctx=canvas.getContext('2d');

ctx.clearRect(0,0,canvas.width,canvas.height);

}
