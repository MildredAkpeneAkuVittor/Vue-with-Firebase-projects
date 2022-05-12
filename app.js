new Vue({
    el:'#newApp',
    data:{
        name: 'Mimmie',
        age: 39,
        website: 'www.google.com',
        websiteTag:'<a href="website">google</a>',
        x:0,
        y:0


    },
    methods: {
        greet:function (){
           return 'Heya' + ' ' + this.name; 
        },
        add:function (inc){
            this.age += inc
        },
        subtract:function (dec){
            this.age -= dec
        },
         updateXY:function (event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
    }
);