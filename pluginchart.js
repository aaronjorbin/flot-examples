jQuery(document).ready( function($){

    $('#line').submit(function(e){
        // when using jquery, we don't need to 
        e.preventDefault();


    
        plot = $.plot( 
        $('#placeholder'), // target
        chartdata, // data
                {
                    series: {
                        lines: { show: true, lineWidth: 3 },
                        shadowSize: 0
                    },
                    grid: { borderWidth: 1, borderColor: '#666',  hoverable: true, clickable: true, color: '#666' },
                    xaxis: { mode: "time", timeformat: "%b %d %y", minTickSize: [1, "day"], ticks: 9, color: '#666', tickColor: '#666'  },
                    yaxis: {ticks: 5, minTickSize: 1,  color: '#666', tickDecimals: false, min: 0, tickColor: '#666'},
                    colors: ['#900'],
                    legend: {show: true}
                 }
        );

    });
    
    $('#linepoints').submit(function(e){
        e.preventDefault();

        var showTooltip = function(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css( {
                position: 'absolute',
                display: 'none',
                top: y + 9,
                left: x + 9,
                border: '1px solid #fdd',
                padding: '3px',
                'background-color': '#fee',
                opacity: 0.85,
                color: '#000000',
                'font-size': "105%"
            }).appendTo("body").fadeIn(100);
        }          

    
        plot = $.plot( 
        $('#placeholder'), // target
        chartdata, // data
                {
                    series: {
                        lines: { show: true, lineWidth: 3 },
                        points: { show: true, fillColor: null , radius: 2, fill: 0.9,  lineWidth: 0  },
                       shadowSize: 0
                    },
                    grid: { borderWidth: 1, borderColor: '#666',  hoverable: true, clickable: true, color: '#666' },
                    xaxis: { mode: "time", timeformat: "%b %d %y", minTickSize: [1, "day"], ticks: 9, color: '#666', tickColor: '#666'  },
                    yaxis: {ticks: 5, minTickSize: 1,  color: '#666', tickDecimals: false, min: 0, tickColor: '#666'},
                    colors: ['#900'],
                    legend: {show: false}
                 }
        );

          $("#placeholder").bind(
                "plothover",
                function (event, pos, item) {
                    $("#x").text(pos.x.toFixed(2));
                    $("#y").text(pos.y.toFixed(2));
                    if (item) {
                        if (previousPoint != item.datapoint) {
                            previousPoint = item.datapoint;
                            $("#tooltip").remove();
                            var x = item.datapoint[0],
                                y = item.datapoint[1].toFixed(0),
                                date = new Date();
                            date.setTime(x)
                            date.setDate(date.getDate())
                            showTooltip(
                                item.pageX,
                                item.pageY,
                                y + " " + item.series.label + " on " + $.plot.formatDate(date,"%b %d %y") 
                            );                            
                            $(this).css('cursor','pointer');
                        }
                    }
                    else {
                        $("#tooltip").remove();
                        previousPoint = null;           
                        $(this).css('cursor','auto');
                    }
                }
            );


    });
    $('#bar').submit(function(e){
        e.preventDefault();

        plot = $.plot( 
        $('#placeholder'), // target
        chartdata, // data
                {
                    series: {
                        bars: { show: true, barWidth: 0, lineWidth: 4  },
                           shadowSize: 0
                    },
                    grid: { borderWidth: 1, borderColor: '#666',  hoverable: true, clickable: true, color: '#666' },
                    xaxis: { mode: "time", timeformat: "%b %d %y", minTickSize: [1, "day"], ticks: 0, color: '#666', tickColor: '#666'  },
                    yaxis: {ticks: 5, minTickSize: 1,  color: '#666', tickDecimals: false, min: 0, tickColor: '#666'},
                    colors: ['#900'],
                    legend: {show: false}
                 }
        );

    });

    $('#fillline').submit(function(e){
        e.preventDefault();

        plot = $.plot( 
        $('#placeholder'), // target
        chartdata, // data
                {
                    series: {
                        lines: { show: true, lineWidth: 3, fill: true, steps: true },
                           shadowSize: 0
                    },
                    grid: { borderWidth: 1, borderColor: '#666',  hoverable: true, clickable: true, color: '#666' },
                    xaxis: { mode: "time", timeformat: "%b %d %y", minTickSize: [1, "day"], ticks: 0, color: '#666', tickColor: '#666'  },
                    yaxis: {ticks: 5, minTickSize: 1,  color: '#666', tickDecimals: false, min: 0, tickColor: '#666'},
                    colors: ['#900'],
                    legend: {show: false}
                 }
        );

          $("#placeholder").bind(
                "plotclick",
                function (event, pos, item) {
                    $("#x").text(pos.x.toFixed(2));
                    $("#y").text(pos.y.toFixed(2));
                    if (item) {
                        if (previousPoint != item.datapoint) {
                            previousPoint = item.datapoint;
                            $("#tooltip").remove();
                            var x = item.datapoint[0],
                                y = item.datapoint[1].toFixed(0),
                                date = new Date();
                            date.setTime(x)
                            date.setDate(date.getDate())
                            $(this).css('cursor','pointer');
                        }
                    alert(x);
                    }
                    else {
                    }
                }
            );

    });

    $('#lot').submit(function(e){
        e.preventDefault();

        var alot = [];
        for (var i = 0; i < 10000; i += 0.5)
           alot.push([i, Math.sin(i)]);


        plot = $.plot(
        $('#placeholder'),
        [alot],
                {
                    series: {
                        points: { show: true, fillColor: null , radius: 2, fill: 0.9,  lineWidth: 0  },
                       shadowSize: 0
                    },
                    grid: { borderWidth: 1, borderColor: '#666',  hoverable: true, clickable: true, color: '#666' },
                    axis: {  minTickSize: [1, "day"], ticks: 9, color: '#666', tickColor: '#666'  },
                    yaxis: {ticks: 5, minTickSize: 1,  color: '#666', tickDecimals: false, min: 0, tickColor: '#666'},
                    colors: ['#900'],
                    legend: {show: false}
                 }

        );
    });

    $('#multi').submit(function(e){
        e.preventDefault();

        var l1 = [];
        for (var i = 0; i < 40; i += 0.5)
            l1.push([i, Math.sin(i)]);
        
        var l2 = []
        for (var i = 20; i < 60; i += 0.5)
            l2.push([i, Math.cos(i)]);

    plot = $.plot(
        $('#placeholder'),
        [l1,l2],
                {
                    series: {
                        lines: { show: true, lineWidth: 3 },
                       shadowSize: 0
                    },
                    grid: { borderWidth: 1, borderColor: '#666',  hoverable: true, clickable: true, color: '#666' },
                    axis: {  minTickSize: [1, "day"], ticks: 9, color: '#666', tickColor: '#666'  },
                    yaxis: {ticks: 5, minTickSize: 1,  color: '#666', tickDecimals: false, tickColor: '#666'},
                    colors: ['#900','#090','#009' ],
                    legend: {show: false}
                 }

        );
    });


});
