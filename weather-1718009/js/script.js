$('#search-cuaca').on('click',function(){
    $.ajax({
        url : 'https://api.weatherbit.io/v2.0/current',
        type : 'get',
        dataType : 'json',
        data:
        {
            'city' : $('#search-input').val(),
            'key':'3252b4666f1f4f31bde9ba37ac3c7a5d'
        },
        success: function(result){
            if(result.count = 1){
                let cuaca = result.data
                $.each(cuaca, function(city, data){
                    $('#list-cuaca').html(`
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <img src="https://www.weatherbit.io/static/img/icons/`+ data.weather.icon +`.png" width = 400px height=300px">
                            </div>
                            <div class="col-sm">
                                    <ul class="list-group">
                                    <li class="list-group-item active">`+ data.city_name +`</li>
                                    <li class="list-group-item">Description : `+data.weather.description +`</li>
                                    <li class="list-group-item">Temperatur : `+ data.temp +`</li>
                                    <li class="list-group-item">Time Zone : `+ data.timezone +`</li>
                                    <li class="list-group-item">Date Time : ` + data.datetime + `</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                     `)
                });
            }
            else{
                $('#list-cuaca').html(`
                <div class ="container">
                <h1> Kota Tidak Di temukan </h1>`)
            }
        }
       
    });
});