var CommonFunctions = (function () {
    function CommonFunctions() {
    }
    CommonFunctions.prototype.moveLabelUp = function (string) {
        var label = document.getElementById("label-" + string);
        label.classList.add('active');
    };
    CommonFunctions.prototype.moveLabelDown = function (string) {
        var input = document.getElementById(string).value;
        if (input === '' || input === 'blank') {
            var label = document.getElementById("label-" + string);
            label.classList.remove('active');
        }
    };
    CommonFunctions.prototype.changeAttributeInput = function (inputId, typeOfChange) {
        var input = document.getElementById(inputId);
        input.type = typeOfChange;
        this.moveLabelUp(inputId);
    };
    CommonFunctions.prototype.togglePanel = function (panelId, arg) {
        if (arg) {
            document.getElementById(panelId).hidden = true;
        }
        else {
            document.getElementById(panelId).hidden = false;
        }
    };
    return CommonFunctions;
}());
export { CommonFunctions };
//# sourceMappingURL=../../../../src/app/shared/common-functions.js.map