(function () {
    var that = me.define("menu2", {
        ctrl: function () {
            that.$scope.student = me.param();
        },

        save: function(){
            me.hide(that.$scope.student);
        },

        cancel: function(){
            me.hide();
        },

        showClass: function () {
            me.show("menu3",{
                showType: 1
            });
        }
    });
})();