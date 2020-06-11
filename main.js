let dollar = document.getElementById('us-dollar');
let real = document.getElementById('brazilian-real');
let conversion = 4.7050;

// TODO: Upon entering a value into 'us-dollar', multiply that value by the conversion value,
//       and print that value into 'brazilian-real'.
dollar.addEventListener('keyup', function() {
    // console.log(dollar.value);
    real.value = (dollar.value * conversion).toFixed(2);
})

// TODO: Upon entering a value into 'brazilian-real', divide that value by the conversion value,
//       and print that value into 'us-dollar'.
real.addEventListener('keyup', function() {
    // console.log(dollar.value);
    dollar.value = (real.value / conversion).toFixed(2);
})