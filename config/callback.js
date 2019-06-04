

app.get("/", function(req, res) {
    orm.selectAll(function (data){
      res.render("index", {taco: data[0].taco_name});
    });
    // console.log(data)
    console.log()
    
    });
      

//all the above code after 'orm.selectAll(function (data)) is passed into the selectAll function
// So the select all looks like:


//  selectAll: function ( ** this is all 'cb' function after the stars ** function (data){
//       res.render("index", {taco: data[0].taco_name});
//     });){
//         connection.query("SELECT * FROM tacos;", function(err, data) {
//             if (err) {
//             //   return res.status(500).end();
//             }
//            cb(data);
        
//         })
//     },




// The below is in a different file

    selectAll : function (cb){
        connection.query("SELECT * FROM tacos;", function(err, data) {
            if (err) {
            //   return res.status(500).end();
            }
           cb(data);
        
        })
    },