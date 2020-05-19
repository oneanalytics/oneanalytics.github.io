
function getIP(entity){
    $.getJSON('https://api.ipregistry.co/?key=x2nmgnklcrzbso', function(data) {
        trackEvent(data, entity);
    });    
}

//get the cookie google analytics
function trackEvent(data,entity){
    ga(function() {
        var trackers = ga.getAll();
        ga(function(tracker) {

            var dataEntity = {

                //technology
                'device':data.user_agent.device.name,
                'os':data.user_agent.os.name,
                'browser':data.user_agent.name,
                'provider':data.carrier.name,
                'ipAddress':data.ip,
                'cookieGA':tracker.get('clientId'),
                'tuid':'unknown',
                'guid':'unknown',
                'tdid':getCookie('TDID'),

                //entity user
                'email':entity.email,
                'phone':entity.phone,
                'age':entity.age,
                'type':entity.type,
                'gender':entity.gender,
                'country':data.location.country.name,
                'city':data.location.city,

                //page
                'page':window.location.href,
                'title':entity.title,
                'section':entity.section,
                'category':entity.category,
                'clientId':entity.clientId,
            }

            retrieveCustomerDataCollection(dataEntity)

        });
    });    
}

function retrieveCustomerDataCollection(dataEntity){
    
    $.ajax({
        url: "/visitlog/savelog",
        async: true,
        type: "GET",
        dataType: "json",
        data: { "log_data": JSON.stringify(dataEntity) },	
        contentType: "application/json"               
    })
    .done(function (data) {
        alert("success")
    })
    .fail(function (xhr, textStatus, errorThrown) {
    });
    

    
}



