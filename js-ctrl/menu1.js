(function () {
    var that = me.define("menu1", {
        ctrl: function () {
            that.getStudentScore();
        },

        getStudentScore: function(){
            var data = [];
            data.push({
                name: "���",
                id: "001",
                score: "80",
                sex: 1,
                age: 10
            });
            data.push({
                name: "������",
                id: "002",
                score: "85",
                sex: 1,
                age: 20
            });
            data.push({
                name: "���黢",
                id: "003",
                score: "80",
                sex: 1,
                age: 30
            });

            that.$scope.studentList = data;
        },

        showStudent: function(student, index){
            me.show("studentInfo", {
                showType: 1,
                param:angular.copy(student)
            }).on("hide", function(newStudent){
                if (!newStudent) return;

                that.$scope.studentList[index] = newStudent;
            });
        },

        delStudent: function(index){
            //���÷�����apiɾ����Ȼ��ɾ����������
            that.$scope.studentList.splice(index, 1);
        }
    });
})();