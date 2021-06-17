import { DateDropdown } from '../../components/dateDropdown/dateDropdown';
import {Guests} from '../../components/dropdown/_guests/dropdown__Guests.js';
import * as $ from 'jquery';

class Booking{
    constructor(roomPrice, discont, servicesTotal, additionalServicesPrice){
  
      this.logicModel = new this.LogicModel(roomPrice, discont, servicesTotal, additionalServicesPrice, this.dateSelected);
      this.viewModel = new this.ViewModel;

      this.logicModel.calculate();
      this.updateView();
    }
  
    LogicModel = function(roomPrice, discont, servicesTotal, additionalServicesPrice, selectFunc){
  
      this.price = roomPrice;
      this.discont = discont;
      this.servicesTotal = servicesTotal;
      this.additionalServicesPrice = additionalServicesPrice;
      this.dateDropdown = new DateDropdown(".dateSelect", ["прибытие", "выезд"], ["dateComing, dateLeave"], selectFunc, "+1d", "+4d");
      this.guests = new Guests(".guestsQuantity", "гости", "guestsQuantity"); 
  
      this.calculate = () => {
  
        this.days = this.dateDropdown.getNumberOfDays();
        this.basicPriceResult = this.price * this.days;
        this.totalPriceValue = this.basicPriceResult - this.discont + 
          this.servicesTotal + this.additionalServicesPrice;
      }
    }
  
    ViewModel = function(){
  
      this.bookingBlock = $(".bookingBlock");
      this.price = this.bookingBlock.find(".bookingBlock__price");
      this.basicPriceCalculate = this.bookingBlock.find(".bookingBlock__basicPriceCalculate");
      this.basicPriceResult = this.bookingBlock.find(".bookingBlock__basicPriceResult");
      this.discont = this.bookingBlock.find(".bookingBlock__servicesPrices");
      this.servicesTotal = this.bookingBlock.find(".bookingBlock__servicesTotal");
      this.additionalServicesTotal = this.bookingBlock.find(".bookingBlock__additionalServicesTotal");
      this.totalPriceValue = this.bookingBlock.find(".bookingBlock__totalPriceValue");
  
      this.numberMargins = function(number){
  
        let arr = String(number).split("");
        let len = Math.trunc(arr.length/3);
  
        for (let i=1; i<=len; i++) {
            arr.splice(arr.length - (i * 3 + i - 1), 0, " ");
        }
  
        return arr.join("");
      }
  
      this.setPrice = (price) => {
        this.price.html(this.numberMargins(price) + "&#8381 ") ;
      }
  
      this.setBasicPriceCalculate = (price, days) => {
        this.basicPriceCalculate.html(`${this.numberMargins(price)}&#8381 x ${days}`);
      }
  
      this.setBasicPriceResult = (price) => {
        this.basicPriceResult.html(this.numberMargins(price) + "&#8381");
      }
  
      this.setDiscount = (price) => {
        this.discont.html(" " + this.numberMargins(price) + "&#8381");
      } 
  
      this.setServicesTotal = (price) => {
        this.servicesTotal.html(this.numberMargins(price) + "&#8381");
      }
  
      this.setAdditionalServicesTotal = (price) => {
        this.additionalServicesTotal.html(this.numberMargins(price) + "&#8381");
      }
  
      this.setTotalPriceValue = (price) => {
        this.totalPriceValue.html(this.numberMargins(price) + "&#8381");
      }
    }
  
    updateView = () => {
  
      this.viewModel.setPrice(this.logicModel.price);
      this.viewModel.setBasicPriceCalculate(this.logicModel.price, this.logicModel.days);
      this.viewModel.setBasicPriceResult(this.logicModel.basicPriceResult);
      this.viewModel.setDiscount(this.logicModel.discont);
      this.viewModel.setServicesTotal(this.logicModel.servicesTotal);
      this.viewModel.setAdditionalServicesTotal(this.logicModel.additionalServicesPrice);
      this.viewModel.setTotalPriceValue(this.logicModel.totalPriceValue)
    }
  
    dateSelected = () => {
      
      this.logicModel.calculate();
      this.updateView();
    }
  }
  
  export {Booking}