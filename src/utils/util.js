export getAverageRating = (reviews) => {
       
    if(reviews  && reviews.length > 1){
        
        var sum = 0;
        reviews.forEach((review) =>{
            sum += review.rating;
        });

        return Math.floor(sum / reviews.length);
    }else
        return 0; 
}