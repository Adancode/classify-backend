$(document).ready(function() {
    $('#signUpSubmit').on('click', function() {
        var userName = $('.newUsernameText').val();
        var password = $('.newPw').val();
        $.ajax({
                url: '/signup',
                type: 'POST',
                dataType: 'JSON',
                data: { userName, password },
            })
            .done(function(res) {
                console.log(res.done + " " + res.status);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    })

    $('#headerSubmit').on('click', function() {
        var userName = $('.usernameText').val();
        var password = $('.pw').val();
        console.log(userName + "  " + password);
        $.ajax({
                url: '/signin',
                type: 'POST',
                dataType: 'JSON',
                data: { userName, password },
            })
            .done(function(res) {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

    })

<<<<<<< HEAD
})
=======
	})
})
>>>>>>> 1dd8f8af050e7518e6119a6e070c9971c8a61637