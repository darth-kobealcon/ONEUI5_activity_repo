sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.ui5.trng.sampleapp.controller.View1", {
        onInit() {
        },
        onClearPress: function () {
            var oView = this.getView();
 
            oView.byId("input1_1754464110870").setValue("");
            oView.byId("input2").setValue("");
            oView.byId("input2_copy").setValue("");
            oView.byId("input2_copy2").setValue("");
            oView.byId("input2_copy3").setValue("");
            oView.byId("select_inpt").setSelectedKey(null);
        }
    });
});