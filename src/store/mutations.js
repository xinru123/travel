export default {
   //改变城市
   changeCity(state,city){
    state.city=city
    try {
        localStorage.city=city
    } catch (e) {}
   }
};