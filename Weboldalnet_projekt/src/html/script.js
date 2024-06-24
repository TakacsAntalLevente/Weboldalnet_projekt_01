$(document).ready(function() {
    var currentIndex = 0;
    var totalProducts = $('.productKlima_div').length;

    // Show the initial product (first one)
    $('.productKlima_div').eq(0).addClass('active');

    // Click event for sliding right
    $('.product_slideButton_right').click(function() {
        currentIndex = (currentIndex + 1) % totalProducts;
        showProduct(currentIndex);
    });

    // Click event for sliding left
    $('.product_slideButton_left').click(function() {
        currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
        showProduct(currentIndex);
    });

    // Function to show the product at a given index
    function showProduct(index) {
        $('.productKlima_div').removeClass('active');
        $('.productKlima_div').eq(index).addClass('active');
    }
});
