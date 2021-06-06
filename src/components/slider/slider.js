import * as $ from 'jquery'
import './jquery-ui/jquery-ui'
import './jquery-ui/jquery-ui.css'
import './slider.sass'

$(function(){
    let a = $('.slider__values')[0];
    console.log(a);
    $('.slider__body').slider({
        range: true,
        min: 0,
        max: 15000,
        values: ['5000', '10000'],
        slide: function(event, ui) {
            let value = `${numberMargins(ui.values[0])}&#8381 - ${numberMargins(ui.values[1])}&#8381`
            $('#qwe').html(value);
        }
    })
    let value = `${numberMargins($(".slider__body").slider("values", 0))}&#8381 - ${numberMargins($(".slider__body").slider("values", 1))}&#8381`
    $('#qwe').html(value);
    
    


})

function numberMargins(number){
    let arr = String(number).split("");
    let len = Math.trunc(arr.length/3);
    for (let i=1; i<=len; i++) {
        arr.splice(arr.length - (i * 3 + i - 1), 0, " ");
    }
    return arr.join("");
}