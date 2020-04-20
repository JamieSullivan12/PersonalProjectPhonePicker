var dict = {};
dict["iPhone11Pro"] = "premium,small,64gb,256gb,512gb,cam3,face";
dict["iPhone11ProMax"] = "premium,large,64gb,256gb,512gb,cam3,face";
dict["iPhoneXS"] = "premium,small,64gb,256gb,512gb,cam2,face";
dict["iPhoneXSMax"] = "premium,large,64gb,256gb,512gb,cam2,face";
dict["iPhoneXR"] = "basic,medium,64gb,128gb,cam1,face";
dict["iPhone11"] = "basic,medium,64gb,128gb,256gb,cam2,face";
dict["iPhone8Plus"] = "basic,large,64gb,128gb,cam1,touch";
dict["iPhoneSE"] = "basic,small,64gb,128gb,256gb,cam1,touch";

var dictqs = {};
dictqs["premium"] = "premium,basic";
dictqs["size"] = "small,medium,large";
dictqs["storage"] = "64gb,128gb,256gb,512gb";
dictqs["cameras"] = "cam1,cam2,cam3";
dictqs["face/touch"] = "face,touch";
var premium = ["Premium","Basic"];
var size = ["Small","Medium","Large"];
var storage = ["64GB","128GB","256GB","512GB"];
var cameras = ["1 (Not Much)", "2 (Doesn't Matter)","3(Very)"];
var face_touch = ["FaceID","TouchID"];
var phone;
var phoneNiceNames = ["iPhone 11 Pro","iPhone 11 Pro Max","iPhone XS","iPhone XS Max", "iPhone XR", "iPhone 11", "iPhone 8 PlusA", "iPhone SE (2020)"];
var phones = ["iPhone11Pro","iPhone11ProMax","iPhoneXS","iPhoneXSMax","iPhoneXR","iPhone11","iPhone8Plus", "iPhoneSE"];
var phonePrices = ["$1749","$1899","$999","$1249","$1049","$1199","$949","$750"];
var phoneLinks = ["https://www.apple.com/au/shop/buy-iphone/iphone-11-pro","https://www.apple.com/au/shop/buy-iphone/iphone-11-pro","https://www.jbhifi.com.au/products/apple-iphone-xs-64gb-space-grey","https://www.jbhifi.com.au/products/apple-iphone-xs-max-64gb-gold","https://www.apple.com/au/shop/buy-iphone/iphone-xr","https://www.apple.com/au/shop/buy-iphone/iphone-11","https://www.apple.com/au/shop/buy-iphone/iphone-8","https://www.apple.com/au/shop/buy-iphone/iphone-se"];
var phoneScreenSizes = ["5.8","6.5","5.8","6.5","6.1","6.1","5.5","4.7"];
var phoneStorage = ["64,256,512","64,256,512","64,256,512","64,256,512","64,128","64,128,256","64,256","64,128,256"];
var phonePixelDensity = ["458","458","458","458","326","326","401","326"];
var phoneCameraNumber = ["3","3","2","2","1","2","2","1"];
var phoneTelephotoCamera = ["Y","Y","Y","Y","N","Y","Y","N"];
var phoneUltraWideCamera = ["Y","Y","N","N","N","Y","N","N"];
var phoneRAM = ["4","4","4","4","3","4","3","3"];
var phoneFrontCamera = ["12","12","7","7","7","12","7","7"];
var phoneFaceID = ["Y","Y","Y","Y","Y","Y","N","N"];
var phoneTouchID = ["N","N","N","N","N","N","Y","Y"];
var phoneWaterproofing = ["IP68","IP68","IP68","IP68","IP67","IP68","IP67","IP67"];
var priceRating = ["20","19","18","17","12","17","12","16"];
function show(element) {
    var x = document.getElementById(element);
    x.style.display = "block";
}
function hide(element) {
    var x = document.getElementById(element);
    x.style.display = "none";
}
function disable(element){
    document.getElementById(element).disabled = true;
}
function enable(element){
    document.getElementById(element).disabled = false;
}
function RadioValue(name) {

    var ele = document.getElementsByName(name);
    var checkedvalue;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
          checkedvalue = ele[i].value;

        }

    }

        newdict={};

        for(var key in dict){


          if(dict[key].includes(checkedvalue)){
            newdict[key]=dict[key]

          }

        }
        dict={}
        for(var key in newdict){
          dict[key] = newdict[key]
        }
        phone = "";
        document.getElementById("phone-text").innerHTML = "";
        for(key in dict){
          phone += key;
          var phonedup = phone;
          document.getElementById("phone-text").innerHTML += phone += " is best for you";
          phone = phonedup;

        }

        }

function RadioCheck(name){
  var list;

  for(var key in dictqs){
    if (key == name){

      list = dictqs[key].split(",");
      for(var thing in list){
        disable(list[thing])
      }
      for(var thing in list){

        for(var key in dict){

          if (dict[key].includes(list[thing])){
            enable(list[thing]);
            if (name == 'size'){
              document.getElementById(list[thing] + 'label').innerHTML = "<span>" + size[thing] + "</span>";
            }
            if (name == 'storage'){
              document.getElementById(list[thing] + 'label').innerHTML = "<span>" + storage[thing] + "</span>";
            }
            if (name == 'cameras'){
              document.getElementById(list[thing] + 'label').innerHTML = "<span>" + cameras[thing] + "</span>";
            }
            if (name == 'face/touch'){
              document.getElementById(list[thing] + 'label').innerHTML = "<span>" + face_touch[thing] + "</span>";
            }
          }
        }
      }
    }
  }
}
function phoneFinished(){
  var storageArray = []
  var specsOutput;
  var image = document.getElementById('qc-img');
  var path = "Images/1" + phone + ".jpeg";
  image.src = path;
  if(phone == "iPhoneXS"){
    document.getElementById('bodyBackground').setAttribute("class", "blackBackground");
  }
  if(phone == "iPhoneXSMax"){
    document.getElementById('bodyBackground').setAttribute("class", "blackBackground");
  }
  if(phone == "iPhone11Pro"){
    document.getElementById('bodyBackground').setAttribute("class", "blackBackground");
  }
  if(phone == "iPhone11ProMax"){
    document.getElementById('bodyBackground').setAttribute("class", "blackBackground");
  }
  if(phone == "iPhoneSE"){
    document.getElementById('bodyBackground').setAttribute("class", "blackBackground");
  }

  for(iPhone in phones){
    if (phones[iPhone] == phone){
      console.log(phones[iPhone])
      specsOutput = ''
      specsOutput += '&#8226; Price (base model): AU' + phonePrices[iPhone] + '<br>';
            console.log(iPhone)
            specsOutput += "&#8226; " + phoneNiceNames[iPhone] + " has " + phoneCameraNumber[iPhone] + " camera(s):<br>";
            specsOutput += "<span style='margin-left:6%'></span>&#8226; 1X 12-megapixel Wide Camera<br>";
            if (phoneTelephotoCamera[iPhone] == 'Y'){
              specsOutput += "<span style='margin-left:6%'></span>&#8226; 1X 12-megapixel Telephoto Camera (2x Optical zoom)<br>";
            }
            if (phoneUltraWideCamera[iPhone] == 'Y'){
              specsOutput += "<span style='margin-left:6%'></span>&#8226; 1X 12-megapixel Ultra-Wide Camera<br>";
            }
      specsOutput += '&#8226; Front Camera: ' + phoneFrontCamera[iPhone] + '-megapixels<br>';
      specsOutput += '&#8226; Screen size (diagonal inches): ' + phoneScreenSizes[iPhone] + '"<br>';
      specsOutput += '&#8226; RAM: ' + phoneRAM[iPhone] + 'GB<br>';
      storageArray = phoneStorage[iPhone].split(',');
      specsOutput += '&#8226; Storage options:<br>';
      for (item in storageArray){
        specsOutput += "<span style='margin-left:6%'></span>&#8226; " + storageArray[item] + "GB<br>";
      }
      specsOutput += '&#8226; Pixel Density (pixels-per-inch): ' + phonePixelDensity[iPhone] + 'ppi<br>';
      if (phoneFaceID[iPhone] == 'Y'){
        specsOutput += '&#8226; FaceID<br>';
      }
      if (phoneTouchID[iPhone] == 'Y'){
        specsOutput += '&#8226; TouchID<br>';
      }
      specsOutput += '&#8226; IP Rating (waterproofing): ' + phoneWaterproofing[iPhone] + '<br>';
      specsOutput += '&#8226; Price Rating (Out Of 20 - The higher, the better): ' + priceRating[iPhone] + '<br>';
      specsOutput += "  <a target='_blank' href='" + phoneLinks[iPhone] + "'><button style='font-size:4vw; border-radius: 5px;background-color: rgb(192,192,192);cursor:pointer;' type='button' class='arial'>BUY " + phone + '</button></a><br><br><br>';
      specsOutput += "&#8226; Sustainability rating (Out Of 50 - The higher, the better):<br>";
      specsOutput += "<img src='Images/" + phones[iPhone] + "_sus.jpeg' alt='sustainability' class='mobile'>";

    }
  }
  document.getElementById('specs').innerHTML = specsOutput;


}
