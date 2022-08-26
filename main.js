
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90 
   });
   camera=document.getElementById("camera");
   Webcam.attach("camera");
   function Take_snap_shots(){
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
       });
   }
   console.log("ml5.version:",ml5.version);
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KZ7gjld5r/model.json",model_loaded);
   function model_loaded(){
       console.log("Model is Loaded");
   }
   function Check(){
       img=document.getElementById("captured_image");
       classifier.classify(img,got_result);
   }
   function got_result(error,worked){
   if(error){
       console.error(error);
   
   }
   else{
       console.log(worked);
       document.getElementById("result_object_name").innerHTML=worked[0].label;
       document.getElementById("result_object_accuracy").innerHTML=worked[0].confidence.toFixed(3);
   }
   }