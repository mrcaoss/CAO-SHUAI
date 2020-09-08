// $(function () {
//     $('#link-login').on('click', function () {
//         $('.login-box').hide()
//         $('.reg-box').show()
//     })
//     $('#link-reg').on('click', function () {
//         $('.reg-box').hide()
//         $('.login-box').show()
//     })

//     layui.form.verify({
//         password: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],

//         repassword: function (value) {
//             if ($('#reg-psd').val() !== value) {
//                 // alert("密码都输不对，")
//                 return '密码不一样'
//             }
//         },
//     })
//     // 绑定submit\
//     $('.layui-form').submit(function (e) {
//         e.preventDefault()
//         var username = $('#reg-username').val()
//         var password = $('#reg-psd').val()
//         var formdata = {
//             username: username,
//             password: password,
//         }
//         $.post('http://ajax.frontend.itheima.net/api/reguser', formdata, function (
//             res
//         ) {
//             if (res.status === 0) {
//                 console.log(res.message);
//                 alert('1234')
//             } else {
//                 console.log(res.message);
//                 alert('asdf')
//             }
//             alert(1)
//         })
//     })
// })


$(function () {
    $('#link-login').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link-reg').on('click', function () {
        $('.reg-box').hide()
        $('login-box').show()
    })
    layui.form.verify({
        password: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repassword: function (value) {
            if ($('#reg-username').val() !== value) {
                return 'mimabuyizhi '
            }
        },
    })
    $('.layui-form').submit(function (e) {
        e.preventDefault()
        var username = $('#reg-username').val()
        var password = $('#reg-psd').val()
        var formdata = {
            username: username,
            password: password,
        }
        $.post('http://ajax.frontend.itheima.net/api/reguser', formdata, function (res) {
            if (res.status === 0) {
                console.log(res.message);
            } else {
                console.log(res.message);
            }
        })
    })
})