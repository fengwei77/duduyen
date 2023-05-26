
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
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        // 检查图片元素是否进入视口
        if (entry.isIntersecting) {
            // 添加清晰类，移除模糊类
            setTimeout(()=>{
                entry.target.classList.add('clear-image');
                entry.target.classList.remove('blur-image');
            },200);
            // 停止观察该图片元素
            observer.unobserve(entry.target);
        }
    });
});

// 选择所有图片元素
var images = document.querySelectorAll('.blur-image');

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