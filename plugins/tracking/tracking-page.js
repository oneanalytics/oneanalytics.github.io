
function getIP(){
    $.getJSON('https://api.ipregistry.co/?key=x2nmgnklcrzbso', function(data) {
        console.log("data api registry "+JSON.stringify(data, null, 2));
        trackEvent(data);
    });    
}

//get the cookie google analytics
function trackEvent(data){
    ga(function() {
        var trackers = ga.getAll();
        ga(function(tracker) {

            var dataEntity = {

                //technology
                'device':data.user_agent.device.name,
                'os':data.user_agent.os.name,
                'browser':'unknown',
                'provider':data.carrier.name,
                'ipAddress':data.ip,
                'cookieGA':tracker.get('clientId'),
                'tuid':'unknown',
                'guid':'unknown',
                'tdid':'unknown',

                //entity user
                'email':'unknown',
                'phone':'unknown',
                'age':'unknown',
                'type':'unknown',
                'gender':'unknown',
                'location':'unknown',
                'city':'unknown',

                //page
                'page':'unknown',
                'title':'unknown',
                'section':'unknown',
                'category':'unknown',
            }
            console.log("Data Entity "+JSON.stringify(dataEntity));
            retrieveCustomerDataCollection(dataEntity)

        });
    });    
}

function retrieveCustomerDataCollection(dataEntity){
    console.log("call");
    
    $.ajax({
        url: "/visitlog/savelog",
        async: true,
        type: "GET",
        dataType: "json",
        data: { "log_data": JSON.stringify(dataEntity) },	
        contentType: "application/json"               
    })
    .done(function (data) {
        alert("success");
    })
    .fail(function (xhr, textStatus, errorThrown) {
        alert("fail");
    });
    

    
}



