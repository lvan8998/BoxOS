 let currentVerifyCode = "";

        /**
         * 生成随机4位验证码字符（数字+大小写字母）
         * @returns {string} 4位随机字符串
         */
        function generateRandomCode() {
            // 验证码字符库：可去除易混淆字符（如 0/O、1/I/l）
            const chars = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789";
            let code = "";
            for (let i = 0; i < 4; i++) {
                // 随机取字符库中的一个字符
                const randomIndex = Math.floor(Math.random() * chars.length);
                code += chars.charAt(randomIndex);
            }
            return code;
        }

        /**
         * 绘制验证码图片到Canvas
         */
        function drawVerifyCanvas() {
            // 1. 获取canvas元素和上下文
            const canvas = document.getElementById("verifyCanvas");
            const ctx = canvas.getContext("2d");
            // 清空画布（避免叠加）
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 2. 生成随机4位验证码并存储
            currentVerifyCode = generateRandomCode();

            // 3. 绘制背景（随机浅灰色，降低辨识度）
            ctx.fillStyle = `rgb(${240 + Math.random() * 10}, ${240 + Math.random() * 10}, ${240 + Math.random() * 10})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 4. 绘制验证码字符（随机颜色、大小、旋转角度）
            for (let i = 0; i < currentVerifyCode.length; i++) {
                // 随机字符颜色（深色，避免和背景融合）
                ctx.fillStyle = `rgb(${Math.random() * 80}, ${Math.random() * 80}, ${Math.random() * 80})`;
                // 随机字体大小
                const fontSize = 18 + Math.random() * 6;
                ctx.font = `bold ${fontSize}px Arial`;
                // 随机旋转角度（-30° ~ 30° 转换为弧度）
                const angle = (Math.random() * 60 - 30) * Math.PI / 180;
                // 字符位置：x轴分散，y轴居中
                const x = 20 + i * 25 + Math.random() * 5;
                const y = canvas.height / 2 + fontSize / 2 - 5 + Math.random() * 5;
                
                // 保存当前画布状态 → 旋转 → 绘制字符 → 恢复状态（避免影响后续绘制）
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);
                ctx.fillText(currentVerifyCode[i], 0, 0);
                ctx.restore();
            }

            // 5. 绘制干扰线（3-5条随机斜线，增加识别难度）
            const lineCount = 3 + Math.floor(Math.random() * 3);
            for (let i = 0; i < lineCount; i++) {
                ctx.beginPath();
                ctx.strokeStyle = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`;
                ctx.lineWidth = 1;
                // 随机起点和终点
                ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                ctx.stroke();
            }

            // 6. 绘制噪点（50个随机小点，增强干扰）
            const dotCount = 50;
            for (let i = 0; i < dotCount; i++) {
                ctx.beginPath();
                ctx.fillStyle = `rgb(${Math.random() * 150}, ${Math.random() * 150}, ${Math.random() * 150})`;
                ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        /**
         * 验证输入的验证码是否正确
         */
        function checkVerifyCode() {
            const inputVal = document.getElementById("inputCode").value.trim();
            if (!inputVal) {
                alert("请输入验证码！");
                return;
            }
            if (inputVal.toLowerCase() === currentVerifyCode.toLowerCase()) {
                alert("验证成功！");
                // 验证成功后刷新验证码
                drawVerifyCanvas();
                document.getElementById("inputCode").value = "";
            } else {
                alert("验证码错误！");
                // 验证失败后刷新验证码
                drawVerifyCanvas();
                document.getElementById("inputCode").value = "";
            }
        }

        // 页面加载完成后初始化验证码
        window.onload = function() {
            drawVerifyCanvas();
            // 点击验证码图片刷新
            document.getElementById("verifyCanvas").addEventListener("click", drawVerifyCanvas);
            // 点击验证按钮触发校验
            document.getElementById("checkBtn").addEventListener("click", checkVerifyCode);
        };