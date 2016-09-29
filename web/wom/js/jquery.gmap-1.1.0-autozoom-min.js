(function($){$.fn.gMap=function(options){if(!window.GBrowserIsCompatible||!GBrowserIsCompatible()){return this}var opts=$.extend({},$.fn.gMap.defaults,options);return this.each(function(){$gmap=new GMap2(this);$geocoder=new GClientGeocoder();if(opts.address){$geocoder.getLatLng(opts.address,function(gpoint){$gmap.setCenter(gpoint,opts.zoom)})}else{if(opts.latitude&&opts.longitude){$gmap.setCenter(new GLatLng(opts.latitude,opts.longitude),opts.zoom)}else{if($.isArray(opts.markers)&&opts.markers.length>0){var latlngbounds=new GLatLngBounds();if(opts.autozoom){for(var i=0;i<opts.markers.length;i++){if(opts.markers[i].latitude&&opts.markers[i].longitude){latlngbounds.extend(new GLatLng(opts.markers[i].latitude,opts.markers[i].longitude))}else{if(opts.markers[i].address){$geocoder.getLatLng(opts.markers[i].address,function(gpoint){latlngbounds.extend(gpoint);$gmap.setCenter(latlngbounds.getCenter(),$gmap.getBoundsZoomLevel(latlngbounds))})}}}}else{if(opts.markers[0].latitude&&opts.markers[0].longitude){$gmap.setCenter(new GLatLng(opts.markers[0].latitude,opts.markers[0].longitude),opts.zoom)}else{$geocoder.getLatLng(opts.markers[0].address,function(gpoint){$gmap.setCenter(gpoint,opts.zoom)})}}if(!latlngbounds.isEmpty()){$gmap.setCenter(latlngbounds.getCenter(),$gmap.getBoundsZoomLevel(latlngbounds))}}else{$gmap.setCenter(new GLatLng(34.885931,9.84375),opts.zoom)}}}$gmap.setMapType(opts.maptype);if(opts.controls.length==0){$gmap.setUIToDefault()}else{for(var i=0;i<opts.controls.length;i++){eval("$gmap.addControl(new "+opts.controls[i]+"());")}}if(opts.scrollwheel==true&&opts.controls.length!=0){$gmap.enableScrollWheelZoom()}for(var j=0;j<opts.markers.length;j++){marker=opts.markers[j];gicon=new GIcon();gicon.image=opts.icon.image;gicon.shadow=opts.icon.shadow;gicon.iconSize=($.isArray(opts.icon.iconsize))?new GSize(opts.icon.iconsize[0],opts.icon.iconsize[1]):opts.icon.iconsize;gicon.shadowSize=($.isArray(opts.icon.shadowsize))?new GSize(opts.icon.shadowsize[0],opts.icon.shadowsize[1]):opts.icon.shadowsize;gicon.iconAnchor=($.isArray(opts.icon.iconanchor))?new GPoint(opts.icon.iconanchor[0],opts.icon.iconanchor[1]):opts.icon.iconanchor;gicon.infoWindowAnchor=($.isArray(opts.icon.infowindowanchor))?new GPoint(opts.icon.infowindowanchor[0],opts.icon.infowindowanchor[1]):opts.icon.infowindowanchor;if(marker.icon){gicon.image=marker.icon.image;gicon.shadow=marker.icon.shadow;gicon.iconSize=($.isArray(marker.icon.iconsize))?new GSize(marker.icon.iconsize[0],marker.icon.iconsize[1]):marker.icon.iconsize;gicon.shadowSize=($.isArray(marker.icon.shadowsize))?new GSize(marker.icon.shadowsize[0],marker.icon.shadowsize[1]):marker.icon.shadowsize;gicon.iconAnchor=($.isArray(marker.icon.iconanchor))?new GPoint(marker.icon.iconanchor[0],marker.icon.iconanchor[1]):marker.icon.iconanchor;gicon.infoWindowAnchor=($.isArray(marker.icon.infowindowanchor))?new GPoint(marker.icon.infowindowanchor[0],marker.icon.infowindowanchor[1]):marker.icon.infowindowanchor}if(marker.address){if(marker.html=="_address"){marker.html=marker.address}$geocoder.getLatLng(marker.address,function(gicon,marker){return function(gpoint){gmarker=new GMarker(gpoint,gicon);if(marker.html){gmarker.bindInfoWindowHtml(opts.html_prepend+marker.html+opts.html_append)}if(marker.html&&marker.popup){gmarker.openInfoWindowHtml(opts.html_prepend+marker.html+opts.html_append)}if(gmarker){$gmap.addOverlay(gmarker)}}}(gicon,marker))}else{if(marker.html=="_latlng"){marker.html=marker.latitude+", "+marker.longitude}gmarker=new GMarker(new GPoint(marker.longitude,marker.latitude),gicon);if(marker.html){gmarker.bindInfoWindowHtml(opts.html_prepend+marker.html+opts.html_append)}if(marker.html&&marker.popup){gmarker.openInfoWindowHtml(opts.html_prepend+marker.html+opts.html_append)}if(gmarker){$gmap.addOverlay(gmarker)}}}})};$.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,autozoom:true,markers:[],controls:[],scrollwheel:true,maptype:G_NORMAL_MAP,html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],infowindowanchor:[9,2]}}})(jQuery);