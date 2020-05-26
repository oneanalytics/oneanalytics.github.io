
window.onload=function(){
    
function getIPXML(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.ipregistry.co/?key=x2nmgnklcrzbso";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getIP(url,title, page, entityUser){
    $.getJSON('https://api.ipregistry.co/?key=x2nmgnklcrzbso', function(data) {
        console.log("tes"+JSON.stringify(data, null, 2));
        console.log("tes"+data.ip);

        trackEvent(data,url,title,page,entityUser);
    });
    
}

//get the cookie google analytics
function trackEvent(data,url,title, page,entityUser){
    
    ga(function() {
         
        var trackers = ga.getAll();
        ga(function(tracker) {

            console.log("Testing");
            //var clientId = tracker.get('clientId');
            var email = getUser();
            console.log("email "+email);
            var phone = "081289097890";
            var ipAddress = "cloe";
            var ipEntity = "Blank";
            var tdid = getCookie("TDID");
            var dataEntity = {
                'email':email,
                'phone':phone,
                'ipAddress':data.ip,
                'cookie':tracker.get('clientId'),
                'guid':guid(),
                'tdid':tdid,
                'url':url,
                'section':title,
                'page': page,
                'location':data.location.city,
                'os':data.user_agent.os.name,
                'gender':entityUser.gender,
                'age':'24'
            }
            console.log("data "+dataEntity);

            
            retrieveCustomerDataCollection(dataEntity)
            return dataEntity;

        });
    });

    function retrieveCustomerDataCollection(customerData){
        console.log(customerData)
    
    
    
        $.ajax({
            url: "http://localhost:8080/jsmarket/web/app_dev.php/customerdata/collectFullCustData",
            async: true,
            type: "GET",
            dataType: "json",
            data: { "customerData": JSON.stringify(customerData) },	
            contentType: "application/json"               
        })
        .done(function (data) {
            console.log("return value "+JSON.stringify(data.message));   
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            points = "fail";
        });
    } 
}



};