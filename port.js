var i =0;
var images = [];
var images2 =[];
var time = 3000;
images[0]='image1.jpg';
images[1] = 'image2.jpg';
images[2]= 'image3.jpg';
images2[0]='im1.jpg';
images2[1]='im2.jpg';
images2[2] = 'im3.jpg';
function changeimg()
{
    document.slide.src = images[i];
    document.slide2.src= images2[i];
    if(i<images.length -1)
        {
            i++;
        }
    else{
        i=0;

    }
    setTimeout("changeimg()",time);
}
window.onload = changeimg;