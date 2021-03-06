$( document ).ready(function() {
    var authors = [
        {
            "id": 1,
            "name": "Jason Bourne",
            "role": "Registered user",
            "place": "New York",
            "avatar_url": "https://api.adorable.io/avatars/250/jason-bourne"
        },
        {
            "id": 2,
            "name": "Zlatan Ibrahimović",
            "role": "Moderator",
            "place": "Sweden",
            "avatar_url": "https://api.adorable.io/avatars/250/zlatan"
        },
        {
            "id": 3,
            "name": "Mitsuha Miyamizu",
            "role": "Moderator",
            "place": "Itomori",
            "avatar_url": "http://loremflickr.com/g/250/250/japan,girl/all"
        },
        {
            "id": 4,
            "name": "Harry Potter",
            "role": "Admin",
            "place": "Hogwarts",
            "avatar_url": "https://api.adorable.io/avatars/250/harry"
        },
        {
            "id": 5,
            "name": "Linus Torvalds",
            "role": "Registered user",
            "place": "Oregon",
            "avatar_url": "https://api.adorable.io/avatars/250/linus"
        }
    ];


    function render(data){
        var template = Handlebars.compile($('#block-template').html());
        var html = template(data);
        $("#block-lists").append(html);
    }

    $.get('posts.json', function(data){
        render(data);
    });

    

    Handlebars.registerHelper('author_name',function( author_id ){
        console.log(authors);
        var dev = JSON.parse(authors);
        console.log(dev);
        return '132';
    });

});