var express= require('express'),
	app=express();

app.get('/',function(req,res){
	res.send('This is index page');
})


app.listen(process.env.PORT,function(){
	console.log('Server has started');
});