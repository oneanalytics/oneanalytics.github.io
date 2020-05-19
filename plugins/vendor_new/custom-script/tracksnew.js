//window.onload=function(){
    /* some code */
    console.log("Always running guaranted");
function collectDataEntity(entity){
    getDataTechnology(entity)
}
   

//get data technology
function getDataTechnology(entity){
    var xhr = new XMLHttpRequest();
    var url = "https://api.ipregistry.co/?key=x2nmgnklcrzbso";

    xhr.open('GET', url, true);
    xhr.send();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        data = xhr.response;
        console.log(data);

        trackEvent(data, entity);
        }
    }        
}

function trackEvent(data,entity){
    console.log("tes 2")
    ga(function() {
        var trackers = ga.getAll();
        console.log("tes")
        ga(function(tracker) {
            var dataEntity = {
                //technology
                'device':data.user_agent.device.name,
                'os':data.user_agent.os.name,
                'browser':data.user_agent.name,
                'provider':data.carrier.name,
                'ipAddress':data.ip,
                'cookieGA':tracker.get('clientId'),
                //'cookieGA':'te',
                'tuid':'unknown',
                'guid':'unknown',
                'tdid':getCookie('TDID'),
                
    
                //entity user
                'email':entity.email,
                'phone':entity.phone,
                'age':entity.age,
                'type':entity.type,
                'gender':entity.gender,
                'city':data.location.region.name,
                'country':data.location.country.name,
    
                //page
                'page':window.location.href,
                'title':entity.title,
                'section':entity.section,
                'category':entity.category,
                'clientId':clientId
                }
                console.log(dataEntity);
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
            console.log("success");
        })
        .fail(function (xhr, textStatus, errorThrown) {
        });
        
    
        
    }
    
// };

