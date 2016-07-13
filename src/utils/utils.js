
import React from 'react';
import Review from '../components/review';

export  const getAverageRating = (reviews) => {
       
    if(reviews  && reviews.length > 1){
        
        var sum = 0;
        reviews.forEach((review) =>{
            sum += review.rating;
        });

        return Math.floor(sum / reviews.length);
    }else
        return 0; 
}


export const sortUsingCategoryFilter = (arr,filterCategory) => {
	var sorted = [];
    const timeNow = getCurrentHour();

	if(filterCategory){
        
        if(filterCategory === 'openNow' && arr.length > 2){
            
            sorted =  arr.filter(res => {

                if(res.operatingHours.open <= timeNow && res.operatingHours.close > timeNow){
                    return res;
                }
                 
            });
        
            return sorted;

        }else{
                sorted = arr.sort((a,b) => {

                if(filterCategory === 'highestRated' && arr.length > 2){

                	return a.averageRating < b.averageRating;

                }else if(filterCategory === 'mostReviewed' && arr.length > 2){
                    return a.numberOfRatings < b.numberOfRatings;
                }else {

                    return arr;
                }
            });

            return sorted;
        }
    }else
    	return arr;
}


export const  sortUsingTextFilter = (arr,text) => {
  
	return arr.filter((R) =>{

      if(R.name.indexOf(text) !== -1 || R.address.indexOf(text) !== -1  || R.cuisineType.indexOf(text) !== -1){
        return R;
      }
      
	});
	
}

export const  filterRestaurants = (arr, text, category) => {
    
	if(text){
		return sortUsingTextFilter(arr,text);
	}

	if(category){
        return sortUsingCategoryFilter(arr,category);
	}

	return arr;
}


export const getNumberOfRatings = (reviews) => {
    if(reviews  && reviews.length > 1){
        return reviews.length;
    }
    return 0; 
}


export const loadReviews = (reviews) => {

    return reviews.map((review) => {
         
        return(
            <Review 
            key={review.id}
            name={review.name}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
            /> 

        );

    });
   
}

export const getCurrentDate = () =>{
    var newDate = new Date();
        const mm = newDate.getMonth() + 1;
        const dd = newDate.getDate();
        const yy = newDate.getFullYear();
    return  mm + "/" + dd + "/" + yy;
}

export const getCurrentHour = () => {
    var newDate = new Date();
    var time = parseInt(newDate.getHours());

    switch(time){
        case 13:
            return 1;
        case 14:
            return 2;
        case 15:
            return 3;
        case 16:
            return 4;
        case 17:
            return 5;
        case 18:
            return 6;
        case 19:
            return 7;
        case 20:
            return 8;
        case 21:
            return 9;
        case 22:
            return 10;
        case 23:
            return 11;
        case 0:
            return 12;                    
        default: 
            return time;   
    }
    
}
