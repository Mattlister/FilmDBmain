<script>
							var data;
function getanswer(q){
$.get("https://www.omdbapi.com/?s="+q+"&apikey=be4b405e", function(rawdata){    
 let rawstring =JSON.stringify(rawdata);
 data =JSON.parse(rawstring);
 let title = data.Search[0].Title;
 let year = data.Search[0].Year; 
 let imdburl="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";

 let posterurl =data.Search[0].Poster;
document.getElementById('answer').innerHTML="<h1>"+title+"</h1><br> <img src= '"+posterurl+"'><br><p> Year Released:"+year+"</p> <br> <p> IMDB page: <a href='"+imdburl+"'target='_blank'>"+imdburl+"</a></p>"; })
}
</script>