
function initMap() {
    new google.maps.Map(document.getElementById("map"), {
        mapId: "a5ca9847215a8070",
        center: {lat: 24.776239955718744, lng: 121.07518797974771},
        zoom: 16,
    });
}

window.initMap = initMap;
console.log("initMap");

function resizeImageContainers() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container) => {
        const image = container.querySelector('img');
        const imageAspectRatio = image.naturalWidth / image.naturalHeight;

        const containerWidth = container.offsetWidth;
        const containerHeight = containerWidth / imageAspectRatio;
        container.style.paddingBottom = `${(containerHeight / containerWidth) * 100}%`;
    });
}

window.addEventListener('resize', resizeImageContainers);
window.addEventListener('load', resizeImageContainers);

// 创建一个观察者对象
anima_time = 500;
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        // 检查图片元素是否进入视口
        if (entry.isIntersecting) {
            // 添加清晰类，移除模糊类
            setTimeout(()=>{
                entry.target.classList.add('clear-image');
                entry.target.classList.remove('blur-image');
                entry.target.classList.remove('blur-image2');
            },anima_time);
            // 停止观察该图片元素
            observer.unobserve(entry.target);
            anima_time = 200;
        }
    });
});

// 选择所有图片元素
var images = document.querySelectorAll('.image-item');

// 为每个图片元素添加观察者
images.forEach(function(image) {
    observer.observe(image);

    // 在图片加载完成后添加.enlarge-image类
    image.addEventListener('load', function() {
        image.classList.add('enlarge-image');
    });
});

window.addEventListener('load', function() {
    // 隐藏加载画面并添加淡出效果
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 500); // 500 毫秒是淡出动画的持续时间
});


window.addEventListener('scroll', handleScroll);

// 定义标志变量
let isScrolling = false;

// 滚动事件处理函数
function handleScroll() {
    // 如果正在滚动，立即返回
    if (isScrolling) {
        return;
    }

    // 设置标志变量为 true
    isScrolling = true;

    // 执行您需要的动作
    // 例如，触发一次动作或调用特定函数
    console.log('屏幕滚动时执行动作');

    // 在适当的时间后重置标志变量
    setTimeout(function() {
        isScrolling = false;
    }, 500); // 设置延迟时间，确保在 500 毫秒后重置标志变量
}