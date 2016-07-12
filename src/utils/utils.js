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
	if(filterCategory){
        
        if(filterCategory === 'all'){
            /* Do Nothing */
            return arr;
        }else{
                sorted = arr.sort((a,b) => {

                if(filterCategory === 'highestRated' && arr.length > 2){

                	return a.averageRating < b.averageRating;

                }else if(filterCategory === 'mostReviewed' && arr.length > 2){
                    return a.numberOfRatings < b.numberOfRatings;
                }
            });

            return sorted;
        }
    }else
    	return arr;
}


export const  sortUsingTextFilter = (arr,text) => {
   /*ToDo : filter better by ignoring case and using contains or something similar*/
  
	return arr.filter((R) =>{

      if(R.name.indexOf(text) !== -1 || R.address.indexOf(text) !== -1  || R.cuisineType.indexOf(text) !== -1){
        return R;
      }
      
	});
	
}

export const  filterRestaurants = (arr, text, category) => {
    
	if(text){
		return this.sortUsingTextFilter(arr,text);
	}

	if(category){
        return this.sortUsingCategoryFilter(arr,category);
	}

	return arr;
}


export const getNumberOfRatings = (reviews) => {
    if(reviews  && reviews.length > 1){
        return reviews.length;
    }
    return 0; 
}