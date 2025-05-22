var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EA_2022_1 = new ol.format.GeoJSON();
var features_EA_2022_1 = format_EA_2022_1.readFeatures(json_EA_2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EA_2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EA_2022_1.addFeatures(features_EA_2022_1);
var lyr_EA_2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EA_2022_1, 
                style: style_EA_2022_1,
                popuplayertitle: 'EA_2022',
                interactive: true,
                title: '<img src="styles/legend/EA_2022_1.png" /> EA_2022'
            });
var format_tbl_Villagehierachy2022_2 = new ol.format.GeoJSON();
var features_tbl_Villagehierachy2022_2 = format_tbl_Villagehierachy2022_2.readFeatures(json_tbl_Villagehierachy2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tbl_Villagehierachy2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tbl_Villagehierachy2022_2.addFeatures(features_tbl_Villagehierachy2022_2);
var lyr_tbl_Villagehierachy2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tbl_Villagehierachy2022_2, 
                style: style_tbl_Villagehierachy2022_2,
                popuplayertitle: 'tbl_Villagehierachy2022',
                interactive: true,
                title: '<img src="styles/legend/tbl_Villagehierachy2022_2.png" /> tbl_Villagehierachy2022'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_EA_2022_1.setVisible(true);lyr_tbl_Villagehierachy2022_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EA_2022_1,lyr_tbl_Villagehierachy2022_2];
lyr_EA_2022_1.set('fieldAliases', {'PID': 'PID', 'Pname': 'Pname', 'AC2016': 'AC2016', 'ACNAME': 'ACNAME', 'EA2016': 'EA2016', 'AC2022': 'AC2022', 'ACNAME22': 'ACNAME22', 'EA2022': 'EA2022', });
lyr_tbl_Villagehierachy2022_2.set('fieldAliases', {'VID': 'VID', 'Village': 'Village', 'ID': 'ID', 'PID': 'PID', 'PNAME': 'PNAME', 'AC2009': 'AC2009', 'AC2016': 'AC2016', 'ACNAME': 'ACNAME', 'IslID': 'IslID', 'Is_Name': 'Is_Name', 'Prov': 'Prov', 'PID_2': 'PID_2', 'ID2016': 'ID2016', 'ACNAME22': 'ACNAME22', 'PID_3': 'PID_3', 'Pname_2': 'Pname_2', 'AC2016_2': 'AC2016_2', 'ACNAME_2': 'ACNAME_2', 'EA2016': 'EA2016', 'AC2022': 'AC2022', 'ACNAME22_2': 'ACNAME22_2', 'EA2022': 'EA2022', });
lyr_EA_2022_1.set('fieldImages', {'PID': 'TextEdit', 'Pname': 'TextEdit', 'AC2016': 'TextEdit', 'ACNAME': 'TextEdit', 'EA2016': 'Range', 'AC2022': 'TextEdit', 'ACNAME22': 'TextEdit', 'EA2022': 'Range', });
lyr_tbl_Villagehierachy2022_2.set('fieldImages', {'VID': 'TextEdit', 'Village': 'TextEdit', 'ID': 'TextEdit', 'PID': 'TextEdit', 'PNAME': 'TextEdit', 'AC2009': 'TextEdit', 'AC2016': 'TextEdit', 'ACNAME': 'TextEdit', 'IslID': 'TextEdit', 'Is_Name': 'TextEdit', 'Prov': 'TextEdit', 'PID_2': 'TextEdit', 'ID2016': 'TextEdit', 'ACNAME22': 'TextEdit', 'PID_3': 'TextEdit', 'Pname_2': 'TextEdit', 'AC2016_2': 'TextEdit', 'ACNAME_2': 'TextEdit', 'EA2016': 'Range', 'AC2022': 'TextEdit', 'ACNAME22_2': 'TextEdit', 'EA2022': 'Range', });
lyr_EA_2022_1.set('fieldLabels', {'PID': 'hidden field', 'Pname': 'no label', 'AC2016': 'hidden field', 'ACNAME': 'hidden field', 'EA2016': 'hidden field', 'AC2022': 'hidden field', 'ACNAME22': 'no label', 'EA2022': 'no label', });
lyr_tbl_Villagehierachy2022_2.set('fieldLabels', {'VID': 'hidden field', 'Village': 'no label', 'ID': 'hidden field', 'PID': 'hidden field', 'PNAME': 'hidden field', 'AC2009': 'hidden field', 'AC2016': 'hidden field', 'ACNAME': 'hidden field', 'IslID': 'hidden field', 'Is_Name': 'hidden field', 'Prov': 'hidden field', 'PID_2': 'hidden field', 'ID2016': 'hidden field', 'ACNAME22': 'no label', 'PID_3': 'hidden field', 'Pname_2': 'hidden field', 'AC2016_2': 'hidden field', 'ACNAME_2': 'hidden field', 'EA2016': 'hidden field', 'AC2022': 'hidden field', 'ACNAME22_2': 'hidden field', 'EA2022': 'no label', });
lyr_tbl_Villagehierachy2022_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});