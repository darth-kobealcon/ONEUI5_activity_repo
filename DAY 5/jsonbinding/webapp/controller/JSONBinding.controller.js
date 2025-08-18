sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sapips/training/jsonbinding/model/formatter",
  "sap/m/library"
], function (Controller, JSONModel, formatter ) {
  "use strict";
 
  return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
    formatter: formatter,
 
    onInit: function () {
      var oUserData = {
        EID: "",
        Enabled: true,
        Address: {
          Street: " Balbaliktad Street ",
          City: "Laoag City",
          Zip: " 2900 ",
          Country: "Philippines"
        },
        SalesAmount: 87000,
        CurrencyCode: "USD"
      };
      var oUserData = new JSONModel(oUserData);
      this.getView().setModel(oUserData, "userData");
 
      var oProductModel = new JSONModel("/model/ProductsModel.json");
      this.getView().setModel(oProductModel, "ProductsModel")
    },
    ProductsModel: function(oEvent){
        var oList = oEvent.getSource();
        var oSelectedProduct = oList.getSelectedItem();
        var oBindingContext = oSelectedProduct.getBindingContext("ProductsModel");
        var sPath = oBindingContext.getPath();
        var oPanel = this.byId("Product_details");
        oPanel.bindElement({
            path: sPath,
            model: "ProductsModel"
        })
    }
  });
});