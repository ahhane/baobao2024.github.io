document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2023-02-16'); 
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - targetDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById('day-counter').innerText = `和宝宝一起腻歪了${diffDays}天耶！！`;
});



document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const popup2 = document.getElementById('popup2');
    const acceptButton = document.getElementById('accept');
    const declineButton = document.getElementById('decline');
    const body = document.body;

    // Function显示模糊effect和popup
    function showPopup() {
        overlay.style.display = 'block';
        popup.style.display = 'block';
        body.classList.add('blur');
    }

    // Function去掉模糊effect和popup
    function hidePopup() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        body.classList.remove('blur');
    }

    // Function显示第二个迪迦
    function showPopup2() {
        popup2.style.display = 'block';
        setTimeout(() => {
            popup2.style.display = 'none';
        }, 5000); // 五秒后消失
    }

    // Function启动烟花
    function triggerConfetti() {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // 没显示过就会显示
    if (!localStorage.getItem('popupShown')) {
        showPopup();
    }

    acceptButton.addEventListener('click', () => {
        hidePopup();
        triggerConfetti();
        showPopup2();
        localStorage.setItem('popupShown', 'true'); 
    });

    declineButton.addEventListener('click', () => {
        alert('哼！咋那么调皮呢 点不接受就是想看看会咋样是吧 俺就知道！坏蛋 快点接受啦');
    });
});
