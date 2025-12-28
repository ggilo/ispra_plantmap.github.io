var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reg01012023_WGS84_1 = new ol.format.GeoJSON();
var features_Reg01012023_WGS84_1 = format_Reg01012023_WGS84_1.readFeatures(json_Reg01012023_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reg01012023_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reg01012023_WGS84_1.addFeatures(features_Reg01012023_WGS84_1);
var lyr_Reg01012023_WGS84_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reg01012023_WGS84_1, 
                style: style_Reg01012023_WGS84_1,
                popuplayertitle: 'Reg01012023_WGS84',
                interactive: false,
                title: '<img src="styles/legend/Reg01012023_WGS84_1.png" /> Reg01012023_WGS84'
            });
var format_2024_2 = new ol.format.GeoJSON();
var features_2024_2 = format_2024_2.readFeatures(json_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_2.addFeatures(features_2024_2);
cluster_2024_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2024_2
});
var lyr_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2024_2, 
                style: style_2024_2,
                popuplayertitle: '2024',
                interactive: true,
                title: '2024'
            });
var format_2023_3 = new ol.format.GeoJSON();
var features_2023_3 = format_2023_3.readFeatures(json_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_3.addFeatures(features_2023_3);
cluster_2023_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2023_3
});
var lyr_2023_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2023_3, 
                style: style_2023_3,
                popuplayertitle: '2023',
                interactive: true,
                title: '2023'
            });
var format_2022_4 = new ol.format.GeoJSON();
var features_2022_4 = format_2022_4.readFeatures(json_2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_4.addFeatures(features_2022_4);
cluster_2022_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2022_4
});
var lyr_2022_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2022_4, 
                style: style_2022_4,
                popuplayertitle: '2022',
                interactive: true,
                title: '2022'
            });
var format_2021_5 = new ol.format.GeoJSON();
var features_2021_5 = format_2021_5.readFeatures(json_2021_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_5.addFeatures(features_2021_5);
cluster_2021_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2021_5
});
var lyr_2021_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2021_5, 
                style: style_2021_5,
                popuplayertitle: '2021',
                interactive: true,
                title: '2021'
            });
var format_2020_6 = new ol.format.GeoJSON();
var features_2020_6 = format_2020_6.readFeatures(json_2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_6.addFeatures(features_2020_6);
cluster_2020_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2020_6
});
var lyr_2020_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2020_6, 
                style: style_2020_6,
                popuplayertitle: '2020',
                interactive: true,
                title: '2020'
            });
var format_2019_7 = new ol.format.GeoJSON();
var features_2019_7 = format_2019_7.readFeatures(json_2019_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019_7.addFeatures(features_2019_7);
cluster_2019_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2019_7
});
var lyr_2019_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2019_7, 
                style: style_2019_7,
                popuplayertitle: '2019',
                interactive: true,
                title: '2019'
            });
var format_2018_8 = new ol.format.GeoJSON();
var features_2018_8 = format_2018_8.readFeatures(json_2018_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018_8.addFeatures(features_2018_8);
cluster_2018_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2018_8
});
var lyr_2018_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2018_8, 
                style: style_2018_8,
                popuplayertitle: '2018',
                interactive: true,
                title: '2018'
            });
var format_2017_9 = new ol.format.GeoJSON();
var features_2017_9 = format_2017_9.readFeatures(json_2017_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2017_9.addFeatures(features_2017_9);
cluster_2017_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2017_9
});
var lyr_2017_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2017_9, 
                style: style_2017_9,
                popuplayertitle: '2017',
                interactive: true,
                title: '2017'
            });
var format_2016_10 = new ol.format.GeoJSON();
var features_2016_10 = format_2016_10.readFeatures(json_2016_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_10.addFeatures(features_2016_10);
cluster_2016_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2016_10
});
var lyr_2016_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2016_10, 
                style: style_2016_10,
                popuplayertitle: '2016',
                interactive: true,
                title: '2016'
            });
var format_2015_11 = new ol.format.GeoJSON();
var features_2015_11 = format_2015_11.readFeatures(json_2015_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_11.addFeatures(features_2015_11);
cluster_2015_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_2015_11
});
var lyr_2015_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2015_11, 
                style: style_2015_11,
                popuplayertitle: '2015',
                interactive: true,
                title: '2015'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Reg01012023_WGS84_1.setVisible(true);lyr_2024_2.setVisible(true);lyr_2023_3.setVisible(false);lyr_2022_4.setVisible(false);lyr_2021_5.setVisible(false);lyr_2020_6.setVisible(false);lyr_2019_7.setVisible(false);lyr_2018_8.setVisible(false);lyr_2017_9.setVisible(false);lyr_2016_10.setVisible(false);lyr_2015_11.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_Reg01012023_WGS84_1,lyr_2024_2,lyr_2023_3,lyr_2022_4,lyr_2021_5,lyr_2020_6,lyr_2019_7,lyr_2018_8,lyr_2017_9,lyr_2016_10,lyr_2015_11];
lyr_Reg01012023_WGS84_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_2024_2.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2023_3.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2022_4.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2021_5.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2020_6.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2019_7.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2018_8.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2017_9.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2016_10.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_2015_11.set('fieldAliases', {'Comune': 'Comune', 'Tipologia': 'Tipologia', 'anno': 'anno', 'IstatComun': 'IstatComun', 'lat': 'lat', 'lon': 'lon', });
lyr_Reg01012023_WGS84_1.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_2024_2.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2023_3.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2022_4.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2021_5.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2020_6.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2019_7.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2018_8.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2017_9.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2016_10.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_2015_11.set('fieldImages', {'Comune': 'TextEdit', 'Tipologia': 'TextEdit', 'anno': 'TextEdit', 'IstatComun': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_Reg01012023_WGS84_1.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'DEN_REG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_2024_2.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2023_3.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2022_4.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2021_5.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2020_6.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2019_7.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2018_8.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2017_9.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2016_10.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2015_11.set('fieldLabels', {'Comune': 'no label', 'Tipologia': 'no label', 'anno': 'hidden field', 'IstatComun': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_2015_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});