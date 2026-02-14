var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gis_osm_pois_free_1_1 = new ol.format.GeoJSON();
var features_gis_osm_pois_free_1_1 = format_gis_osm_pois_free_1_1.readFeatures(json_gis_osm_pois_free_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_pois_free_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_pois_free_1_1.addFeatures(features_gis_osm_pois_free_1_1);
var lyr_gis_osm_pois_free_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_pois_free_1_1, 
                style: style_gis_osm_pois_free_1_1,
                popuplayertitle: 'gis_osm_pois_free_1',
                interactive: true,
                title: '<img src="styles/legend/gis_osm_pois_free_1_1.png" /> gis_osm_pois_free_1'
            });
var format_gis_osm_railways_free_1_2 = new ol.format.GeoJSON();
var features_gis_osm_railways_free_1_2 = format_gis_osm_railways_free_1_2.readFeatures(json_gis_osm_railways_free_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_railways_free_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_railways_free_1_2.addFeatures(features_gis_osm_railways_free_1_2);
var lyr_gis_osm_railways_free_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_railways_free_1_2, 
                style: style_gis_osm_railways_free_1_2,
                popuplayertitle: 'gis_osm_railways_free_1',
                interactive: true,
                title: '<img src="styles/legend/gis_osm_railways_free_1_2.png" /> gis_osm_railways_free_1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_gis_osm_pois_free_1_1.setVisible(true);lyr_gis_osm_railways_free_1_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_gis_osm_pois_free_1_1,lyr_gis_osm_railways_free_1_2];
lyr_gis_osm_pois_free_1_1.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_gis_osm_railways_free_1_2.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_gis_osm_pois_free_1_1.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_gis_osm_railways_free_1_2.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_gis_osm_pois_free_1_1.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_gis_osm_railways_free_1_2.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_gis_osm_railways_free_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});