sap.ui.define([
        "sap/ui/core/mvc/Controller"
],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
                "use strict";

                return Controller.extend("functionproject1.functionsampleproject1.controller.View1", {
                        onInit: function () {
                                alert("onInit function called");
                        },
                        onBeforeRendering: function () {
                                debugger;
                                alert("onBeforeRendering function called");
                        },
                        onAfterRendering: function () {
                                alert("onAfterRendering function called");
                        },
                        onExit: function () {
                                console.log("onExit() of controller called...");
                                alert("onExit function called");
                        },
                        onPress: function (Event) {
                                this.getView().destroy();
                        }
                });
        });