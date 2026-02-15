export default function MovieInfo({rating}){
        if(rating > 8.5){
            return('🔥 Top')
        } else if(rating > 8){
            return('❤️ Very good')
        } else{
            return('👌 Not bad')
        }
}