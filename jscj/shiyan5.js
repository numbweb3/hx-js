$(document).ready(function () {
            // 打开会员登录 
            $("#Login_start_").click(function () {
                $("#regist_container").hide();
                $("#_close").show();
                $("#_start").animate({
                    left: '350px',
                    height: '520px',
                    width: '400px'
                }, 500, function () {
                    $("#login_container").show(500);
                    $("#_close").animate({
                        height: '40px',
                        width: '40px'
                    }, 500);
                });
            });

            // 打开会员注册
            $("#Regist_start_").click(function () {
                $("#login_container").hide();
                $("#_close").show();
                $("#_start").animate({
                    left: '350px',
                    height: '520px',
                    width: '400px'
                }, 500, function () {
                    $("#regist_container").show(500);
                    $("#_close").animate({
                        height: '40px',
                        width: '40px'
                    }, 500);
                });
            });

            // 关闭
            $("#_close").click(function () {
                $("#_close").animate({
                    height: '0px',
                    width: '0px'
                }, 500, function () {
                    $("#_close").hide(500);
                    $("#login_container").hide(500);
                    $("#regist_container").hide(500);
                    $("#_start").animate({
                        left: '0px',
                        height: '0px',
                        width: '0px'
                    }, 500);
                });
            });

            // 去注册
            $("#toRegist").click(function () {
                $("#login_container").hide(500);
                $("#regist_container").show(500);
            });

            // 去登录
            $("#toLogin").click(function () {
                $("#regist_container").hide(500);
                $("#login_container").show(500);
            });

            // 实时验证
            $("#login_number, #login_password").on('input', function () {
                validateLogin();
            });

            $("#regist_account, #regist_password1, #regist_password2, #regist_phone, #regist_vcode").on('input', function () {
                validateRegister();
            });

            // 登录验证
            function validateLogin() {
                var username = $("#login_number").val().trim();
                var password = $("#login_password").val().trim();
                var isValid = true;

                if (username === "") {
                    $("#login_number").next(".error").text("用户名不能为空").show();
                    isValid = false;
                } else {
                    $("#login_number").next(".error").hide();
                }

                if (password === "") {
                    $("#login_password").next(".error").text("密码不能为空").show();
                    isValid = false;
                } else {
                    $("#login_password").next(".error").hide();
                }

                return isValid;
            }

            // 注册验证
            function validateRegister() {
                var account = $("#regist_account").val().trim();
                var password1 = $("#regist_password1").val().trim();
                var password2 = $("#regist_password2").val().trim();
                var phone = $("#regist_phone").val().trim();
                var vcode = $("#regist_vcode").val().trim();
                var isValid = true;

                if (account === "") {
                    $("#regist_account").next(".error").text("用户名不能为空").show();
                    isValid = false;
                } else if (account.length < 3 || account.length > 15) {
                    $("#regist_account").next(".error").text("用户名长度应在3到15个字符之间").show();
                    isValid = false;
                } else {
                    $("#regist_account").next(".error").hide();
                }

                if (password1 === "") {
                    $("#regist_password1").next(".error").text("密码不能为空").show();
                    isValid = false;
                } else if (password1.length < 6) {
                    $("#regist_password1").next(".error").text("密码长度不能少于6个字符").show();
                    isValid = false;
                } else {
                    $("#regist_password1").next(".error").hide();
                }

                if (password1 !== password2) {
                    $("#regist_password2").next(".error").text("两次输入的密码不一致").show();
                    isValid = false;
                } else {
                    $("#regist_password2").next(".error").hide();
                }

                var phonePattern = /^1[3-9]\d{9}$/;
                if (!phonePattern.test(phone)) {
                    $("#regist_phone").next(".error").text("手机号格式不正确").show();
                    isValid = false;
                } else {
                    $("#regist_phone").next(".error").hide();
                }

                if (vcode === "") {
                    $("#regist_vcode").next(".error").text("验证码不能为空").show();
                    isValid = false;
                } else {
                    $("#regist_vcode").next(".error").hide();
                }

                return isValid;
            }

            $("#login_btn").click(function () {
                if (validateLogin()) {
                    alert("登录成功");
                }
            });

            $("#regist_btn").click(function () {
                if (validateRegister()) {
                    alert("注册成功");
                }
            });
        });

        var clock = '';
        var nums = 30;
        var btn;

        function sendCode(thisBtn) {
            btn = thisBtn;
            btn.disabled = true; // 将按钮置为不可点击
            btn.value = '重新获取（' + nums + '）';
            clock = setInterval(doLoop, 1000); // 一秒执行一次
        }

        function doLoop() {
            nums--;
            if (nums > 0) {
                btn.value = '重新获取（' + nums + '）';
            } else {
                clearInterval(clock); // 清除js定时器
                btn.disabled = false;
                btn.value = '点击发送验证码';
                nums = 30; // 重置时间
            }
        }

        $(document).ready(function () {
            $("#login_QQ").click(function () {
                alert("暂停使用！");
            });
            $("#login_WB").click(function () {
                alert("暂停使用！");
            });
        });