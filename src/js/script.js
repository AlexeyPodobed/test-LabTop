function ready() {

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = { threshold: [0.01] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer.observe(elm);
    }

    let windowinnerHeight = $(window).innerHeight();
    let pageBottom = $(this).scrollTop() + windowinnerHeight - 100;

    function animations() {

        $('.banner-animation-hidden').each(function () {
            showAnim($(this), 'banner-animation', 'banner-animation-hidden');
        });

        $('.banner-content-animation-hidden').each(function () {
            showAnim($(this), 'banner-content-animation', 'banner-content-animation-hidden');
        });

        function showAnim($this, firstClass, secondClass) {
            var currentOffsetTop = $this.offset().top;
            if (currentOffsetTop < pageBottom) {
                $this.addClass(firstClass).removeClass(secondClass);
            }
        }
    }

    animations();

    $(window).scroll(function () {
        windowinnerHeight = $(window).innerHeight() + 100;
        pageBottom = $(this).scrollTop() + windowinnerHeight;
        animations();
    });

}

document.addEventListener("DOMContentLoaded", ready);