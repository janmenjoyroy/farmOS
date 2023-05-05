(function () {
  farmOS.map.behaviors.quick_movement = {
    attach: function (instance) {

      // Create a layer for the current asset location.
      var opts = {
        title: 'Current Location',
        color: 'blue',
      };
      instance.currentLocationLayer = instance.addLayer('vector', opts);
    },

    // When updating asset geometry, update the current location layer.
    updateAssetGeometry: function (instance, wkt) {

      // Clear features from the layer.
      instance.currentLocationLayer.getSource().clear();

      // If WKT is not empty, add features to the layer and zoom.
      if (wkt) {
        instance.currentLocationLayer.getSource().addFeatures(instance.readFeatures('wkt', wkt));
        instance.zoomToLayer(instance.currentLocationLayer);
      }
    },

    // Make sure this runs after farmOS.map.behaviors.wkt.
    weight: 101,
  };
}());
