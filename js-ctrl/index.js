(function () {
    var that = me.define("index", {
        ctrl: function () {
            that.changeMenu(1);
        },

        changeMenu: function(menuIndex){
            that.$scope.menuIndex = menuIndex;

            switch(menuIndex){
                case 0:
                    me.show("menu1", {
                        showType: 0
                    });
                    break;
                case 1:
                    me.show("menu2", {
                        showType: 0
                    });
                    break;
                case 2:
                    me.show("menu3", {
                        showType: 0
                    });
                    break;
                case 3:
                    me.show("menu4", {
                        showType: 0
                    });
                    break;
                case 4:
                    me.show("menu5", {
                        showType: 0
                    });
                    break;
            }
        }
    });
})();